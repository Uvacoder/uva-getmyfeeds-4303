import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

test("loads homepage", async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );

  await waitFor(() =>
    expect(
      screen.getByText(/The place to read your feeds/i)
    ).toBeInTheDocument()
  );
});

test("loads bookmarks on click", async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );

  fireEvent.click(screen.getByTestId("bookmark-btn"));

  await waitFor(() => screen.getByText("Bookmarks"));
});

test("landing on a bad page", async () => {
  const history = createMemoryHistory();
  history.push("/some/bad/route");
  render(
    <Router history={history}>
      <App />
    </Router>
  );

  await waitFor(() =>
    expect(screen.getByText(/Take me back/i)).toBeInTheDocument()
  );

  await fireEvent.click(screen.getByText(/Take me back/i));

  await waitFor(() =>
    expect(
      screen.getByText(/The place to read your feeds/i)
    ).toBeInTheDocument()
  );
});
