import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { CampaignAPI } from "~/utils/campaign-api";
import type {
  CampaignRegistrationRequest,
  PDPAConsentRequest,
  MissionSubmissionRequest,
} from "~/types/campaign";

export const useCampaigns = () => {
  return useQuery({
    queryKey: ["campaigns"],
    queryFn: () => CampaignAPI.getCampaigns(),
    select: (data) => data.data,
  });
};

export const useCampaign = (campaignId: string, enabled = true) => {
  return useQuery({
    queryKey: ["campaigns", campaignId],
    queryFn: () => CampaignAPI.getCampaign(campaignId),
    select: (data) => data.data,
    enabled,
  });
};

export const useCampaignMissions = (campaignId: string, enabled = true) => {
  return useQuery({
    queryKey: ["campaigns", campaignId, "missions"],
    queryFn: () => CampaignAPI.getCampaignMissions(campaignId),
    select: (data) => data.data,
    enabled,
  });
};

export const useMission = (missionId: string, enabled = true) => {
  return useQuery({
    queryKey: ["missions", missionId],
    queryFn: () => CampaignAPI.getMission(missionId),
    select: (data) => data.data,
    enabled,
  });
};

export const useCampaignCredits = (campaignId: string, enabled = true) => {
  return useQuery({
    queryKey: ["campaigns", campaignId, "credits"],
    queryFn: () => CampaignAPI.getCampaignCredits(campaignId),
    select: (data) => data.data,
    enabled,
  });
};

export const useConsentPDPA = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ campaignId, data }: { campaignId: string; data: PDPAConsentRequest }) =>
      CampaignAPI.consentPDPA(campaignId, data),
    onSuccess: (_, { campaignId }) => {
      queryClient.invalidateQueries({ queryKey: ["campaigns", campaignId] });
    },
  });
};

export const useRegisterCampaign = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ campaignId, data }: { campaignId: string; data: CampaignRegistrationRequest }) =>
      CampaignAPI.registerCampaign(campaignId, data),
    onSuccess: (_, { campaignId }) => {
      queryClient.invalidateQueries({ queryKey: ["campaigns", campaignId] });
    },
  });
};

export const useSubmitMission = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ missionId, data }: { missionId: string; data: MissionSubmissionRequest }) =>
      CampaignAPI.submitMission(missionId, data),
    onSuccess: (response, { missionId }) => {
      const mission = queryClient.getQueryData<any>(["missions", missionId]);
      if (mission) {
        const campaignId = mission.campaign_id;
        queryClient.invalidateQueries({ queryKey: ["campaigns", campaignId, "missions"] });
        queryClient.invalidateQueries({ queryKey: ["campaigns", campaignId, "credits"] });
        queryClient.invalidateQueries({ queryKey: ["campaigns", campaignId] });
      }
      queryClient.invalidateQueries({ queryKey: ["missions", missionId] });
    },
  });
};

export const useUploadFile = () => {
  return useMutation({
    mutationFn: (file: File) => CampaignAPI.uploadFile(file),
  });
};