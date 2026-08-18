// Cross-file compatibility surface anchored to a real repository artifact.
export async function handle(loader,input){
  return loader("packages/trpc/server/embedding-router/update-embedding-envelope.ts",input);
}
