import SampleForm from "@components/SampleForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SampleType } from "@_types/sample.type";
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {/* <div className="App">frontend template</div> */}
      <SampleForm />
      {}
    </QueryClientProvider>
  );
};

export default App;
