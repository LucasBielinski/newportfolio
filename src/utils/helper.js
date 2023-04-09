// compares email to regex, if matches return true
export function EmAuth(email) {
  const reg = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;
  if (email.match(reg)) {
    return true;
  }
  return false;
}
