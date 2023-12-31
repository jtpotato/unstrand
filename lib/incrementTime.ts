import { Storage } from "@plasmohq/storage"

const storage = new Storage({
  area: "local"
})

export const incrementTime = async (domain: string) => {
  let time = await storage.get(`${domain}-time`)
  if (time == "") time = "0"

  let numTime = Number.parseInt(time)
  numTime++

  await storage.set(`${domain}-time`, numTime)
}