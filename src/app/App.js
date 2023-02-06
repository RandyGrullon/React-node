import React, { useState, useEffect } from "react";
import Table from "./Table";

const App = () => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch("/api/task");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddTask = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/task", {
        method: "POST",
        body: JSON.stringify({
          title: noteTitle,
          description: noteDescription,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      M.toast({ html: "Task Saved" });
      setNoteTitle("");
      setNoteDescription("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    if (name === "title") {
      setNoteTitle(value);
    } else if (name === "description") {
      setNoteDescription(value);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="light-blue darken-4">
        <div className="container">
          <a href="/" className="brand-logo">
            RANDY GRULLON
          </a>
        </div>
      </nav>

      <div className="">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="card">
                <div className="card-content">
                  <form onSubmit={handleAddTask}>
                    <div className="row ">
                      <div className="input-field col s6">
                        <input
                          name="title"
                          type="text"
                          placeholder="Note title"
                          autoFocus
                          onChange={handleInputChange}
                          value={noteTitle}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <textarea
                          name="description"
                          placeholder="Note description"
                          className="materialize-textarea"
                          onChange={handleInputChange}
                          value={noteDescription}
                        ></textarea>
                      </div>
                    </div>
                    <div className="center">
                      <button className="btn light-blue darken-4" type="submit">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Table Data={tasks} />
        </div>
      </div>
    </>
  );
};

export default App;
