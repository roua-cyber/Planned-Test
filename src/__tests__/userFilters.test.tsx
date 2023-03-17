import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { UserContextProps } from "../../types";
import UsersFilter from "../features/UsersFilter/UsersFilter";
import { UserContext } from "../context/UserContext";

const mockFetchUsers = jest.fn();

const mockUsersContextValue: UserContextProps = {
  users: [],
  isLoading: false,
  error: null,
  fetchUsers: mockFetchUsers,
};

describe("UsersFilter", () => {
  beforeEach(() => {
    render(
      <UserContext.Provider value={mockUsersContextValue}>
        <UsersFilter />
      </UserContext.Provider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the form inputs and button", () => {
    const minInput = screen.getByPlaceholderText(/min/i);
    const maxInput = screen.getByPlaceholderText(/max/i);
    const retrieveButton = screen.getByText(/retrieve users/i);
    expect(minInput).toBeInTheDocument();
    expect(maxInput).toBeInTheDocument();
    expect(retrieveButton).toBeInTheDocument();
  });
  it("should call fetchUsers with correct parameters when form is submitted", async () => {
    const minInput = screen.getByPlaceholderText(/Min/i);
    const maxInput = screen.getByPlaceholderText(/Max/i);
    const retrieveButton = screen.getByText(/retrieve users/i);

    fireEvent.change(minInput, { target: { value: "18" } });
    fireEvent.change(maxInput, { target: { value: "25" } });
    fireEvent.click(retrieveButton);

    await waitFor(() => {
      expect(mockFetchUsers).toHaveBeenCalledTimes(1);
      expect(mockFetchUsers).toHaveBeenCalledWith({ Min: 18, Max: 25 });
    });
  });
  it("should update input values when min and max values change", () => {
    const minInput = screen.getByPlaceholderText(/Min/i);
    const maxInput = screen.getByPlaceholderText(/Max/i);

    fireEvent.change(minInput, { target: { value: "18" } });
    fireEvent.change(maxInput, { target: { value: "25" } });

    expect(minInput).toHaveValue("18");
    expect(maxInput).toHaveValue("25");
  });

  test("should display error message when range is invalid", async () => {
    const minInput = screen.getByPlaceholderText(/min/i);
    const maxInput = screen.getByPlaceholderText(/max/i);
    const retrieveButton = screen.getByText(/retrieve users/i);
    fireEvent.change(minInput, { target: { value: "0" } });
    fireEvent.change(maxInput, { target: { value: "0" } });
    fireEvent.click(retrieveButton);
    const mockUsersContextValue: UserContextProps = {
      users: [],
      isLoading: false,
      error: "Invalid range",
      fetchUsers: mockFetchUsers,
    };
    render(
      <UserContext.Provider value={mockUsersContextValue}>
        <UsersFilter />
      </UserContext.Provider>
    );
    await waitFor(() => {
      const alert = screen.getByText(/Invalid range/i);
      expect(alert).toBeInTheDocument();
    });

    expect(minInput).toHaveValue("0");
    expect(maxInput).toHaveValue("0");
  });
});
