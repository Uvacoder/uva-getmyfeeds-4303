import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const RenderApp = () => {
  const history = createMemoryHistory();
  return (
    <Router history={history}>
      <App />
    </Router>
  );
};

test("loads homepage", async () => {
  render(<RenderApp />);

  await waitFor(() =>
    expect(
      screen.getByText(/The place to read your feeds/i)
    ).toBeInTheDocument()
  );
});

test("loads bookmarks on click", async () => {
  render(<RenderApp />);

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

test("renders Matter feed", async () => {
  render(<RenderApp />);

  await waitFor(() => screen.getByText("Matter"));

  fireEvent.click(screen.getByText("Matter"));

  await waitFor(() => screen.getByText(/Matter - Medium/i));
});

// test("saves a bookmark", async () => {
//   render(<RenderApp />);

//   await waitFor(() => screen.getByText("Matter"));

//   fireEvent.click(screen.getByText("Matter"));

//   await waitFor(() => screen.getByText(/Matter - Medium/i));
//   await waitFor(() => screen.getByText(/Means of Descent/i));

//   fireEvent.click(screen.getByText(/Means of Descent/i));

//   await fireEvent.click(
//     screen.getByRole("button", {
//       name: /bookmark-btn/i,
//     })
//   );
// });
