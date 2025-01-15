const baseApiUrl = "https://sw-backend-production-9a4d.up.railway.app/"

interface Link {
    customer: string
}

const ALL_API_CONST: Link = {
    customer: baseApiUrl + "api/v1/enquiry",
}

export default ALL_API_CONST;