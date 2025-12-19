export default function ApiHeader() {
    let token = window.localStorage.getItem("token");
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        'Content-Type': "application/json",
      },
    };
    return header;
  }