const btn = document.querySelector("#button");
const msg = document.querySelector("#message");

btn.onclick = () => {
  const promise = new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", "https://api.icndb.com/jokes/random");
    req.onload = () => {
      if (req.status === 200) {
        resolve(req.response);
      } else {
        reject(Error(req.statusText));
      }
    };
    req.onerror = () => {
      reject(Error("Error fetching Data"));
    };
    req.send();
  });

  promise.then(
    (data) => {
      console.log("got data successfully & promise executed");
      const res = JSON.parse(data).value.joke;
      msg.textContent = res;
    },
    (error) => {
      console.log("opps its an error & promise rejected");
      console.log(error);
    }
  );
};
