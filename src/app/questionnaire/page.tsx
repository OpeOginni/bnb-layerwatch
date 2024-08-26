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
import Link from "next/link";

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
  const [recommendationUrl, setRecommendationUrl] = useState("");

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate recommendation
      const { name, site } = calculateRecommendation(newAnswers);
      setRecommendation(name);
      setRecommendationUrl(site);
      setShowRecommendation(true);
    }
  };

  const calculateRecommendation = (
    userAnswers: string[]
  ): { name: string; site: string } => {
    let opBNBScore = 0;
    let comboScore = 0;
    let xterioScore = 0;
    let greenFieldScore = 0;

    // Simple scoring system
    if (userAnswers[0] === "Developer") {
      opBNBScore += 1;
      greenFieldScore += 1;
    }
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
    if (userAnswers[2] === "Onchain Storage") greenFieldScore += 1;

    const scores = [
      {
        name: "opBNB",
        site: "https://opbnb.bnbchain.org/en",
        score: opBNBScore,
      },
      { name: "COMBO", site: "https://combonetwork.io/", score: comboScore },
      { name: "Xterio", site: "https://xter.io/", score: xterioScore },
      {
        name: "BNB GreenField",
        site: "https://greenfield.bnbchain.org/en",
        score: greenFieldScore,
      },
    ];

    return scores.sort((a, b) => b.score - a.score)[0];
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setRecommendation("");
    setRecommendationUrl("");
    setShowRecommendation(false);
  };

  return (
    <div className="flex flex-col items-center justify-center container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Layer 2 Recommendation Questionnaire
      </h1>

      {currentQuestion < questions.length && (
        <div className="mt-32 border rounded-md p-7">
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

      <Dialog open={showRecommendation} onOpenChange={resetQuiz}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Your Recommended Layer 2</DialogTitle>
          </DialogHeader>
          <p>Based on your answers, we recommend:</p>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">{recommendation}</h2>
            <Link
              className="border-2 border-black rounded-lg px-3 py-2 hover:bg-slate-200"
              href={recommendationUrl}
              target="_blank"
            >
              Learn More
            </Link>
          </div>
          <Button onClick={resetQuiz}>Close</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
