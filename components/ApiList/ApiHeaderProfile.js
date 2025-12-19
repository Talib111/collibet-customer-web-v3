export default function ApiHeaderProfile() {
    let token = window.localStorage.getItem("generatedToken");
    console.log('the generated token...',token)
    const header = {
    //   timeout: 60000,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        'Content-Type': "application/json",
      },
    };
    return header;
  }