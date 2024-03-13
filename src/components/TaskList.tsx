import { useEffect, useState } from "react"
import { getTasksRequest } from "../api/task"
import { Task } from '../interface/task.interface'
function TaskList() {

  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    getTasksRequest()
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, [])


  return (
    <div>
      {
        tasks.map(task => (
          <div key={task._id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default TaskList