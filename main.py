import json
from difflib import get_close_matches
from typing import List, Dict, Optional
from transformers import pipeline


qa_pipeline = pipeline("question-answering")

def load_knowledge_base(file_path: str) -> Dict:
    try:
        with open(file_path, "r") as file:
            data: Dict = json.load(file)
    except json.JSONDecodeError:
        print("Error: The JSON file is empty or not properly formatted.")
        data = {"questions": []}
    return data

def save_knowledge_base(file_path: str, data: Dict):
    with open(file_path, "w") as file:
        json.dump(data, file, indent=2)

def find_best_match(user_question: str, questions: List[str]) -> Optional[str]:
    matches: List = get_close_matches(user_question, questions, n=1, cutoff=0.6)
    return matches[0] if matches else None

def get_answer_for_question(question: str, knowledge_base: Dict) -> Optional[str]:
    for q in knowledge_base["questions"]:
        if q["question"] == question:
            return q["answer"]
    return None

def advanced_answer(user_question: str, knowledge_base: Dict) -> str:

    best_match = find_best_match(user_question, [q["question"] for q in knowledge_base["questions"]])
    if best_match:
        return get_answer_for_question(best_match, knowledge_base)
    

    context = " ".join([q["answer"] for q in knowledge_base["questions"]])
    if context:
        result = qa_pipeline(question=user_question, context=context)
        return result["answer"]

    return None

def chatbot():
    knowledge_base: Dict = load_knowledge_base('knowledge_base.json')

    while True:
        user_input: str = input("You: ")
        if user_input.lower() == "quit":
            break

        answer: Optional[str] = advanced_answer(user_input, knowledge_base)
        if answer:
            print(f'Bot: {answer}')
        else:
            print("Bot: I don't know the answer, can you please teach me?")
            new_answer: str = input("Type the answer or type skip to skip: ")

            if new_answer.lower() != "skip":
                knowledge_base["questions"].append({"question": user_input, "answer": new_answer})
                save_knowledge_base("knowledge_base.json", knowledge_base)
                print("Bot: Thank you, I learned a new response!")

if __name__ == "__main__":
    chatbot()
