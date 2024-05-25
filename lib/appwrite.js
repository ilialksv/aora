import {
  Client,
  Account,
  ID,
  Avatars,
  Databases,
  Query,
} from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.ilialksv.aora",
  projectId: "6640b06f0015f5ddaf57",
  databaseId: "6640b22a0006b68ceb77",
  userCollectionId: "6640b2c70036d1b1b6a7",
  videoCollectionId: "6640b30a002151620147",
  storageId: "6651afca0004089da817",
};

// Init your React Native SDK
const client = new Client();
const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

// Register user
export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username,
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      },
    );

    return newUser;
  } catch (error) {
    console.error(error);

    throw new Error(error);
  }
};

// Sign in
export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);

    return session;
  } catch (error) {
    console.error(error);

    throw new Error(error);
  }
};

// Get Account
export const getAccount = async () => {
  try {
    const currentAccount = await account.get();

    return currentAccount;
  } catch (error) {
    throw new Error(error);
  }
};

// Get current user
export const getCurrentUser = async () => {
  try {
    const currentAccount = await getAccount();

    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)],
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.error(error);

    throw new Error(error);
  }
};

// Get all video Posts
export const getAllPosts = async () => {
  try {
    const posts = await databases.listDocuments(
      config.databaseId,
      config.videoCollectionId,
    );

    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
};

// Get latest created video posts
export const getLatestPosts = async () => {
  try {
    const posts = await databases.listDocuments(
      config.databaseId,
      config.videoCollectionId,
      [Query.orderDesc("$createdAt"), Query.limit(7)],
    );

    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
};
