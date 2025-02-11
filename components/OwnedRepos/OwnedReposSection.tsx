import * as React from "react";
import { Center, Divider, Text } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { OwnedRepository } from "../../types/OwnedRepoResults";
import { RepositoriesList } from "./RepositoriesList";
import { UserCardPropType } from "../../types/UserCardPropType";
import { apiWrapper } from "../../apiWrapper";

export const OwnedReposSection = (props: UserCardPropType) => {
  const [reposData, setReposData] = useState<OwnedRepository[]>();
  const { data: session, status } = useSession();

  async function fetchMaintainedRepositories(accessToken: any, login: string) {
    const reposDataResponse = await apiWrapper.fetchContributedRepositories(
      accessToken
    );
    setReposData(reposDataResponse);
  }
  useEffect(() => {
    if (session) {
      fetchMaintainedRepositories(session.accessToken, props.user.login);
    }
  }, [session, props.user.login]);

  return (
    <>
      {reposData && reposData.length && (
        <Text mt={4} fontWeight={"400"}>
          🎉🎉🎉 Here are {reposData.length} public repos where you contributed!
        </Text>
      )}
      <Divider py={4} />
      <RepositoriesList repos={reposData} />
      {!reposData?.length && (
        <Center mt={4}>
          No Repositories found yet! BTW, today is a great day to create one.
        </Center>
      )}
    </>
  );
};
