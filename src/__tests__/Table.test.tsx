import React from "react";
import { render, screen } from "@testing-library/react";
import { UserContext } from "../context/UserContext";
import Table from "../components/Table";

describe("Table", () => {
  it("should render the table with user data", async () => {
    const mockUsers = [
      {
        name: { firstName: "Cortney", lastName: "Lemke" },
        age: 25,
        country: "Nicaragua",
        email: "Eduardo_McGlynn60@yahoo.com",
      },
      {
        name: { firstName: "Tara", lastName: "Stehr" },
        age: 30,
        country: "Nicaragua",
        email: "Eduardo_McGlynn60@yahoo.com",
      },
    ];

    const mockUsersContextValue = {
      users: mockUsers,
      isLoading: false,
      error: null,
      fetchUsers: jest.fn(),
    };

    render(
      <UserContext.Provider value={mockUsersContextValue}>
        <Table />
      </UserContext.Provider>
    );

    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();

    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(mockUsers.length + 1);

    const cells = screen.getAllByRole("cell");
    expect(cells.length).toBe(mockUsers.length * 3);

    mockUsers.forEach((user) => {
      const nameCell = screen.getByText(
        `${user.name.firstName} ${user.name.lastName}`
      );
      expect(nameCell).toBeInTheDocument();

      const ageCell = screen.getByText(user.age.toString());
      expect(ageCell).toBeInTheDocument();
    });
  });
});
