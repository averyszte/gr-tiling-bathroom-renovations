import { Button } from "@/components/ui/button";
import { Star, CheckCircle2, ChevronRight, XCircle, MessageCircle, FileText, Wrench } from "lucide-react";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const reviews = [
  { name: "Raimonda Brooks", text: "Gerry and the team transformed our bathroom beyond expectations. On time, tidy, and the finish is immaculate." },
  { name: "Dionne Haslam", text: "Excellent communication from start to finish. The tiling is perfect and they left the house spotless every day." },
  { name: "Alan L", text: "A genuinely professional service. Honest quote, fast turnaround, and top-quality workmanship throughout." },
];

const faqs = [
  { q: "How much does a bathroom renovation cost in Dublin?", a: "Costs depend on the size, scope, and materials chosen for your bathroom remodel. We provide clear, detailed quotes before any work starts, with no hidden extras." },
  { q: "How long does a bathroom renovation take?", a: "Most standard bathroom renovations take 1 to 3 weeks. We give you a realistic timeline at the start and keep you updated throughout." },
  { q: "Will the work area be kept clean?", a: "Yes. We protect your home, clean up every day, and leave the area tidy. We treat your home the way we'd want ours treated." },
  { q: "Do I get a written quote?", a: "Absolutely. We provide a clear written quote before any work begins so you know exactly what's included and what the cost will be." },
  {
    q: "Do you cover all areas of Dublin?",
    a: (
      <>
        Yes, we work across Dublin and nearby areas.{