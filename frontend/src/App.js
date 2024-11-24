import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImportantTasks from "./pages/ImportantTasks";
import IncompletedTask from "./pages/IncompletedTasks";
import CompletedTasks from "./pages/CompletedTasks";
import IncompletedTasks from "./pages/IncompletedTasks";
import AllTasks from "./pages/AllTasks";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
function App() {
  return (
    <div className="bg-gray-900 text-white h-screen p-4 relative">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route index element={<AllTasks />} />
            <Route path="/importantTasks" element={<ImportantTasks />} />
            <Route path="/completedTasks" element={<CompletedTasks />} />
            <Route path="/incompletedTasks" element={<IncompletedTasks />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
