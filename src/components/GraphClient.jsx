const putUserData = async (user) => {
    const responce = await fetch("https://car-account-creator.azurewebsites.net/api/User", {
        method: "POST", 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(user)
    });
    console.log(responce);
};

export default putUserData;