export async function getToken(req) {
  const token = await req.headers.cookie
    ?.split(';')
    .find((c) => c.trim().startsWith('token='))
    ?.split('=')[1];
  return token;
}
