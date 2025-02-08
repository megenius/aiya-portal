import React, { useEffect, useState } from "react";
import NavButton from "./NavButton";
import DateSelector from "./DateSelector";
import DateRangeSelector from "./DateRangeSelector";
import { useOutletContext, useSearchParams } from "@remix-run/react";
import { endOfDay, startOfDay } from "date-fns";
import { useBotStatsToday } from "~/hooks/bot/useBotStatsToday";
import { Bot } from "~/@types/app";
import { MessageCircle, MessageSquare, UserIcon } from "lucide-react";
import TodayBarChart from "./TodayBarChart";
import AnalyaticDashbaord from "./AnalyaticDashbaord";
import { Loading } from "@repo/preline";
import DateBarChart from "./DateBarChart";

interface MainContentProps {}

const MainContent: React.FC<MainContentProps> = () => {
  const { bot } = useOutletContext<{ bot: Bot }>();
  const [searchParams, setSearchParams] = useSearchParams();

  const [startDate, setStartDate] = React.useState<Date>(
    startOfDay(new Date())
  );
  const [endDate, setEndDate] = React.useState<Date>(endOfDay(new Date()));

  const [activeTab, setActiveTab] = React.useState<"Conversations" | "Users">(
    "Conversations"
  );

  const [timeUnit, setTimeUnit] = useState("day");

  const [rangeDate, setRangeDate] = useState({
    startDate: "",
    endDate: "",
  });

  const { data: stats, isLoading: isStatsLoading } = useBotStatsToday({
    variables: {
      botId: bot.id as string,
      timeUnit,
      startDate: rangeDate.startDate,
      endDate: rangeDate.endDate,
    },
  });

  useEffect(() => {
    const start_date = searchParams.get("start");
    const end_date = searchParams.get("end");
    const tab = searchParams.get("tab");

    if (start_date && end_date) {
      setStartDate(startOfDay(new Date(start_date)));
      setEndDate(endOfDay(new Date(end_date)));
    }

    if (tab) {
      setActiveTab(tab as "Conversations" | "Users");
    }
  }, [searchParams]);

  const handleDateUpdate = (dates: {
    timeUnit?: string;
    startDate?: string;
    endDate?: string;
  }) => {
    setTimeUnit(dates.timeUnit || "");
    setRangeDate({
      startDate: dates.startDate || "",
      endDate: dates.endDate || "",
    });
  };

  return (
    <div className="p-2 sm:p-5 sm:py-0 sm:py-5 space-y-5">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h2 className="inline-block text-lg font-semibold text-gray-800 dark:text-neutral-200">
          Dashboard
        </h2>
        <div className="mt-1 flex items-center gap-x-2">
          <DateSelector onDateChange={handleDateUpdate} />
          {/* <DateRangeSelector startDate={startDate} endDate={endDate} /> */}
        </div>
      </div>
      {/* End Header */}
      {/* Audience */}
      {isStatsLoading && <Loading />}
      {!isStatsLoading && <>
        <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
          {/* Tab Nav */}
          <nav
            className="relative z-0 flex border-b border-gray-200 dark:border-neutral-700"
            aria-label="Tabs"
            role="tablist"
            aria-orientation="horizontal"
          >
            <NavButton
              icon={<MessageSquare size={24} color="gray" />}
              label="Total Conversations"
              value={stats?.summary.conversations.total || 0}
              active={activeTab === "Conversations"}
              onClick={() => setActiveTab("Conversations")}
            />
            <NavButton
              icon={<UserIcon size={24} color="gray" />}
              label="Active Users"
              value={stats?.summary.users.total || 0}
              active={activeTab === "Users"}
              onClick={() => setActiveTab("Users")}
            />
          </nav>
          {/* End Tab Nav */}
          {/* Tab Content */}
          <div className="p-5">
            {/* Tab Content Item */}
            <div
              id="bar-with-underline-1"
              role="tabpanel"
              aria-labelledby="bar-with-underline-item-1"
            >
              {timeUnit === "day" ? (
                <TodayBarChart
                  title={
                    activeTab === "Conversations"
                      ? "Hourly Chat Conversations"
                      : "Hourly Active Users"
                  }
                  data={stats?.hourlyActivity.map((d) => {
                    return {
                      hour: d.hour,
                      value:
                        activeTab === "Conversations"
                          ? d.conversations
                          : d.uniqueUsers,
                    };
                  })}
                />
              ) : (
                <DateBarChart
                  title={
                    activeTab === "Conversations"
                      ? "Daily Chat Conversations"
                      : "Daily Active Users"
                  }
                  data={stats?.dailyActivity.map((d) => {
                    return {
                      date: d.date,
                      value:
                        activeTab === "Conversations"
                          ? d.conversations
                          : d.uniqueUsers,
                    };
                  })}
                />
              )}
            </div>
          </div>
          {/* End Tab Content */}
        </div>
        {/* End Audience */}
        {stats && (
          <AnalyaticDashbaord stats={stats} today={timeUnit === "day"} />
        )}
      </>}
    </div>
  );
};

export default MainContent;
