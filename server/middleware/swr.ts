import type { IncomingMessage, ServerResponse } from "http";

export default (_: IncomingMessage, res: ServerResponse, next: () => void) => {
  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate");
  next();
};
