import { useEffect, useState } from "react";

export const useQuestion = () => {
    const questions = [
        { id: 1, question: 'What is the capital of France?', answer: 'Paris' },
        { id: 2, question: 'Who was the first person to climb Mount Everest?', answer: 'Edmund Hillary and Tenzing Norgay' },
        { id: 3, question: 'What is the largest planet in our solar system?', answer: 'Jupiter' },
        { id: 4, question: 'Who wrote the play "Romeo and Juliet"?', answer: 'William Shakespeare' },
        { id: 5, question: 'What is the smallest country in the world?', answer: 'Vatican City' },
        { id: 6, question: 'Which element has the chemical symbol "O"?', answer: 'Oxygen' },
        { id: 7, question: 'What is the boiling point of water in Celsius?', answer: '100°C' },
        { id: 8, question: 'Who painted the Mona Lisa?', answer: 'Leonardo da Vinci' },
        { id: 9, question: 'What is the fastest land animal?', answer: 'Cheetah' },
        { id: 10, question: 'How many continents are there on Earth?', answer: 'Seven' },
        { id: 11, question: 'Which country is famous for sushi?', answer: 'Japan' },
        { id: 12, question: 'What is the name of the longest river in the world?', answer: 'Nile River' },
        { id: 13, question: 'Who discovered gravity?', answer: 'Isaac Newton' },
        { id: 14, question: 'Which planet is known as the Red Planet?', answer: 'Mars' },
        { id: 15, question: 'What is the national flower of Japan?', answer: 'Cherry Blossom' },
        { id: 16, question: 'What is the chemical formula for water?', answer: 'H2O' },
        { id: 17, question: 'How many players are there in a standard soccer team?', answer: '11' },
        { id: 18, question: 'What is the capital of Australia?', answer: 'Canberra' },
        { id: 19, question: 'Which ocean is the largest?', answer: 'Pacific Ocean' },
        { id: 20, question: 'Who invented the telephone?', answer: 'Alexander Graham Bell' }
    ];
    const [progress, setProgress] = useState(1)
    const [questionId, setQuestionId] = useState(1)
    const [questionCount, setQuestionCount] = useState(questions.length)
    const [isRevealAnswer, setIsRevealAnswer] = useState(false);
    const [isFinish, setIsFinish] = useState(false);
    const [question, setQuestion] = useState(questions[1]);

    useEffect(() => {
        setQuestion(questions[questionId - 1])
        setProgress(((questionId - 1) / questionCount) * 100)
    }, [questionId])

    const nextQuestion = () => {
        setIsRevealAnswer(false);
        if (questionId === questionCount) {
            setProgress(100);
            setIsFinish(true);
            return;
        }
        setQuestionId(questionId + 1)
    }

    const previousQuestion = () => {
        setIsRevealAnswer(false);
        if (questionId === 1) {
            return;
        }
        setQuestionId(questionId - 1)
    }

    const restart = () => {
        setIsFinish(false);
        setQuestionId(1);
        setProgress(1);
    };

    const toggleIsRevealAnswer = () => {
        setIsRevealAnswer(!isRevealAnswer);
    };

    return {
        question,
        questionCount,
        progress,
        isFinish,
        questionId,
        nextQuestion,
        previousQuestion,
        isRevealAnswer,
        toggleIsRevealAnswer,
        restart,
    }
}