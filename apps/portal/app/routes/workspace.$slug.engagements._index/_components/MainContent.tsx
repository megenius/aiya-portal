import { Link, Outlet, useParams } from '@remix-run/react';
import React, { Suspense } from 'react';
import { cn, isRouteActive } from "@repo/ui/utils"
import Dashboard from './Dashboard';
import { ClientOnly } from 'remix-utils/client-only';

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  const { id } = useParams()
  return (
    <>
      <Suspense fallback="">
        <ClientOnly>
          {() =>
            <Dashboard conversationsData={conversationsData} />
          }
        </ClientOnly>
      </Suspense>
    </>
  );
};

export default MainContent;

const conversationsData = [
  {
    id: "conv123456",
    conversation_id: "c987654321",
    link: "https://example.com/chat/c987654321",
    unread_count: 0,
    user_name: "John Doe",
    user_email: "john.doe@example.com",
    user_id: "u123456",
    agent_name: "Alice Smith",
    agent_email: "alice.smith@company.com",
    agent_id: "a789012",
    start_time: "2024-09-17T10:15:30Z",
    end_time: "2024-09-17T10:45:45Z",
    total_duration: 1815,
    total_messages: 12,
    agent_messages: 6,
    user_messages: 6,
    first_response_time: 45,
    average_response_time: 90,
    min_response_time: 30,
    max_response_time: 180,
    response_times: [45, 60, 90, 120, 150, 180],
    analysis: {
      classification: "Product Inquiry",
      interest: ["Smart Home", "Energy Efficiency"],
      recommendation: "Follow up with energy-saving product demos",
      lead_potential_score: 8.5,
      justification: "User showed high interest in smart home solutions and asked detailed questions about energy efficiency features."
    },
    chat_history: [
      {
        role: "user",
        content: "Hi, I'm interested in smart home solutions. Can you tell me more about your products?",
        time: "2024-09-17T10:15:30Z"
      },
      {
        role: "agent",
        content: "Hello John! I'd be happy to help you with information about our smart home solutions. We offer a range of products including smart thermostats, lighting systems, and security cameras. What specific aspects are you most interested in?",
        time: "2024-09-17T10:16:15Z"
      }
    ]
  },
  {
    id: "conv234567",
    conversation_id: "c876543210",
    link: "https://example.com/chat/c876543210",
    unread_count: 2,
    user_name: "Jane Smith",
    user_email: "jane.smith@example.com",
    user_id: "u234567",
    agent_name: "Bob Johnson",
    agent_email: "bob.johnson@company.com",
    agent_id: "a890123",
    start_time: "2024-09-18T14:30:00Z",
    end_time: "2024-09-18T15:10:15Z",
    total_duration: 2415,
    total_messages: 15,
    agent_messages: 7,
    user_messages: 8,
    first_response_time: 60,
    average_response_time: 105,
    min_response_time: 45,
    max_response_time: 210,
    response_times: [60, 75, 90, 120, 135, 180, 210],
    analysis: {
      classification: "Technical Support",
      interest: ["Software Troubleshooting", "Account Management"],
      recommendation: "Provide step-by-step guide for account recovery",
      lead_potential_score: 6.5,
      justification: "User faced technical issues but showed patience. Potential for upselling premium support package."
    },
    chat_history: [
      {
        role: "user",
        content: "Hello, I'm having trouble logging into my account. Can you help?",
        time: "2024-09-18T14:30:00Z"
      },
      {
        role: "agent",
        content: "Hi Jane, I'm sorry to hear you're having trouble. I'd be happy to help you with your login issues. Can you tell me what specific error message you're seeing?",
        time: "2024-09-18T14:31:00Z"
      }
    ]
  },
  // ... (8 more records with similar structure but different data)
];

