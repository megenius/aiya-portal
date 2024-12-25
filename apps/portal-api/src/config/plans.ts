
export const plans = `
plans:
  free_trial:
    name: "Free Trial"
    price: 0
    billing: "forever free"
    features:
      smart_replies_per_month: 150
      generative_replies_per_month: 20
      checks_per_month: 15
      service_hours: 2
      notifications_per_service: 1
      knowledge_bases: 3
      storage: "100MB"
      team_members_per_service: 2
      supported_formats:
        - "text"
        - "images"
        - "links"
        - "documents (PDF)"
      support_type: "community"
      integrations:
        line: false
        facebook: false

  starter:
    name: "Starter"
    price: 1890
    billing: "per month incl. VAT"
    label: "Most popular"
    features:
      smart_replies_per_month: 3000
      generative_replies_per_month: 1200
      checks_per_month: 100
      service_hours: 3
      notifications_per_service: 3
      knowledge_bases: 5
      storage: "2GB"
      team_members_per_service: 3
      supported_formats:
        - "text"
        - "images"
        - "links"
        - "documents (PDF, Word, Excel)"
        - "video"
      support_type: "email"
      analysis: "basic"
      integrations:
        line: false
        facebook: false

  growth:
    name: "Growth"
    price: 3490
    billing: "per month incl. VAT"
    features:
      smart_replies_per_month: 8000
      generative_replies_per_month: 3000
      checks_per_month: 300
      service_hours: 5
      notifications_per_service: 5
      knowledge_bases: 10
      storage: "5GB"
      team_members_per_service: 5
      supported_formats:
        - "text"
        - "images"
        - "links"
        - "documents (PDF, Word, Excel)"
        - "video"
      support_type: "priority"
      analysis: "advanced"
      integrations:
        line: false
        facebook: false
`

