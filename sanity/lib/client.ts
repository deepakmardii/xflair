import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:"skLPZWu87kTnl6g4mFqxVWE9eDhBHk5SZYBSfFtD9OLaiKheaOhwsVM5vamxokr3jsWE0k18EPGNKQoeuxrRtT0i5mxThM5wLiPJr36GrttdHzXiOQEQylnskE1VG5P9EFgmEFKsQJVzpUpzSm6NrpUHJHW72FgFPa0hKvP3IqPTJmBXuuP3",
})
