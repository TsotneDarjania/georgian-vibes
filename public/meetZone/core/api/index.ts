import { Notification, useApp } from "../../store/AppCotext";

export function updateNotifications(userId: string) {
  return fetch("/meetzone/api/friends/updaterecivednotification", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
    }),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return 500;
      }
    })
    .then((res) => {
      return res;
    });
}

export function updateFriendsList(userId: string) {
  return fetch("/meetzone/api/friends/friendList", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
    }),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return 500;
      }
    })
    .then((res) => {
      return res;
    });
}

export async function updateFriendSuggestions(userId: string) {
  return fetch("/meetzone/api/friends/updatefriendsuggestions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
    }),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return 500;
      }
    })
    .then((res) => {
      return res;
    });
}

export async function deleteFriend(userId: string, friendId: string) {
  return fetch("/meetzone/api/friends/deletefriend", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      friendId,
    }),
  }).then((res) => {
    if (res.status === 200) {
      return 200;
    } else {
      return 500;
    }
  });
}

export async function getChatInfo(userId: string, friendId: string) {
  return fetch("/meetzone/api/chat/getchatinfo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      friendId,
    }),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return 500;
      }
    })
    .then((res) => {
      return res;
    });
}

export function sendMessage(messageData: {
  sender: {
    id: string;
    username: string;
  };
  recipient: {
    id: string;
    username: string;
  };
  message: string;
}) {
  return fetch("/meetzone/api/chat/sendmessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messageData,
    }),
  }).then((res) => {
    if (res.status === 200) {
      return 200;
    } else {
      return 500;
    }
  });
}

export async function uploadPost(
  userId: string,
  post: {
    username: string;
    title: string;
    content: string;
  }
) {
  return fetch("/meetzone/api/post/upload", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      post: post,
    }),
  }).then((res) => {
    if (res.status === 200) {
      return 200;
    } else {
      return 500;
    }
  });
}

export async function getPosts() {
  return fetch("/meetzone/api/post/getposts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return 500;
      }
    })
    .then((res) => {
      return res;
    });
}

export function deleteAccount(userId: string) {
  return fetch("/meetzone/api/user/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
    }),
  }).then((res) => {
    if (res.status === 200) {
      return 200;
    } else {
      return 500;
    }
  });
}
