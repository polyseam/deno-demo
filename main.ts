const whoToGreet = Deno.env.get("WHO_TO_GREET") || "World";

Deno.serve((req: Request): Response => {
  const { url } = req;
  const message = "hello";

  const body: string = JSON.stringify({
    version: 2,
    message: `${message} ${whoToGreet}`,
    metadata: {
      url,
    },
  });

  return new Response(
    body,
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    },
  );
});
