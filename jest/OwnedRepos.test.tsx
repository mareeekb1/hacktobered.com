import { render, screen, waitFor } from "@testing-library/react";
import { OwnedReposSection } from "@/components/OwnedRepos/OwnedReposSection";
import { RepositoriesList } from "@/components/OwnedRepos/RepositoriesList";
import { RepositoryCard } from "@/components/OwnedRepos/RepositoryCard";
import { SessionProvider } from "next-auth/react";
import renderer from "react-test-renderer";

describe("Owned repos testing snapshots", () => {
  //MOCK
  jest.mock("next-auth/react");
  test("Owned repos section", () => {
    const mockedProps = {
      login: "string",
      avatar_url: "string",
      bio: "string",
      blog: "string",
      email: "string",
      html_url: "string",
      name: "string",
      id: 1,
      location: "string",
    };

    const component = renderer.create(
      <SessionProvider>
        <OwnedReposSection user={mockedProps} />
      </SessionProvider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  describe("Match snapshot of RepositoriesList", () => {
    const component = renderer.create(<RepositoriesList repos={undefined} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  describe("Match snapshot of RepositoriesList", () => {
    const component = renderer.create(<RepositoriesList repos={undefined} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  describe("Match snapshot of RepositoriesList", () => {
    const mockProps = {
      name: "String",
      url: "String",
      description: "String",
      stargazers: { totalCount: 0 },
      forkCount: 0,
      defaultBranchRef: null,
      repositoryTopics: {
        nodes: [
          {
            topic: {
              name: "string",
              stargazers: { totalCount: 0 },
              viewerHasStarred: false,
            },
            url: "string",
          },
        ],
      },
    };
    const component = renderer.create(<RepositoryCard {...mockProps} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
