import React from "react";
import { render, screen } from "@testing-library/react";
import { UserContext } from "../context/UserContext";
import Table from "../components/Table";
import { Users } from "../../types";

describe("no result dispayed", () => {
  it("should display NoResultMessage when ", async () => {
    const mockUsers: Users = [];

    const mockUserContextValue = {
      users: mockUsers,
      isLoading: false,
      error: null,
      fetchUsers: jest.fn(),
    };

    render(
      <UserContext.Provider value={mockUserContextValue}>
        <Table />
      </UserContext.Provider>
    );

    const NoResultMessage = screen.getByText(
      "Select age range to display userList"
    );
    expect(NoResultMessage).toBeInTheDocument();
  });
});
