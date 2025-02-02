import { useEffect, useState } from "react";

export const useQuestion = () => {
    const questions = [
        { id: 1, question: 'What is the capital of France?', answer: 'Paris' },
        { id: 2, question: 'Who was the first person to climb Mount Everest?', answer: 'Kilimanjaro' },
    ]
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