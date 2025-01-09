import { Bot, Brain, MessageCircle, Settings, Database, BarChart3, Users, Cloud, Lock } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Advanced NLP Engine",
      description: "Natural language processing that understands context, sentiment, and multiple languages."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Continuous Learning",
      description: "AI models that improve over time based on real conversations and feedback."
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Multi-channel Integration",
      description: "Connect with LINE, Facebook, WhatsApp, and custom channels seamlessly."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Visual Flow Builder",
      description: "Design conversation flows with an intuitive drag-and-drop interface."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Knowledge Management",
      description: "Centralized knowledge base with version control and collaborative editing."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Detailed insights into conversation quality, user satisfaction, and bot performance."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Collaboration",
      description: "Multi-user workspaces with role-based access control and activity tracking."
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud deployment with high availability and automatic backups."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "End-to-end encryption, audit logs, and compliance with global security standards."
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Comprehensive Platform</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for modern customer engagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
