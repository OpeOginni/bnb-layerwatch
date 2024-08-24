"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const questions = [
  {
    question: "What is your profession?",
    options: ["Developer", "Trader", "Gamer"],
  },
  {
    question: "How much does Gas Fee matter to you?",
    options: ["Not at all", "A little", "Matters a lot"],
  },
  {
    question: "What use case best suits you?",
    options: ["Onchain Games", "Trading Crypto", "Onchain Storage"],
  },
];

export default function QuestionnairePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [recommendation, setRecommendation] = useState("");

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate recommendation
      const recommendedLayer2 = calculateRecommendation(newAnswers);
      setRecommendation(recommendedLayer2);
      setShowRecommendation(true);
    }
  };

  const calculateRecommendation = (userAnswers: string[]): string => {
    let opBNBScore = 0;
    let comboScore = 0;
    let xterioScore = 0;

    // Simple scoring system
    if (userAnswers[0] === "Developer") opBNBScore += 1;
    if (userAnswers[0] === "Trader") opBNBScore += 1;
    if (userAnswers[0] === "Gamer") {
      comboScore += 1;
      xterioScore += 1;
    }

    if (userAnswers[1] === "Matters a lot") opBNBScore += 1;
    if (userAnswers[1] === "A little") comboScore += 1;
    if (userAnswers[1] === "Not at all") xterioScore += 1;

    if (userAnswers[2] === "Trading Crypto") opBNBScore += 1;
    if (userAnswers[2] === "Onchain Games") {
      comboScore += 1;
      xterioScore += 1;
    }
    if (userAnswers[2] === "Onchain Storage") opBNBScore += 1;

    const scores = [
      { name: "opBNB", score: opBNBScore },
      { name: "COMBO", score: comboScore },
      { name: "Xterio", score: xterioScore },
    ];

    return scores.sort((a, b) => b.score - a.score)[0].name;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        Layer 2 Recommendation Questionnaire
      </h1>

      {currentQuestion < questions.length && (
        <div>
          <h2 className="text-xl mb-2">
            {questions[currentQuestion].question}
          </h2>
          <RadioGroup onValueChange={handleAnswer}>
            {questions[currentQuestion].options.map((option, index) => (
              <div key={option} className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      )}

      <Dialog open={showRecommendation} onOpenChange={setShowRecommendation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Your Recommended Layer 2</DialogTitle>
          </DialogHeader>
          <p>Based on your answers, we recommend:</p>
          <h2 className="text-2xl font-bold">{recommendation}</h2>
          <Button onClick={() => setShowRecommendation(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
