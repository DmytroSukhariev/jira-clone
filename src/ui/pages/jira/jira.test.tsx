import { shallow } from "enzyme";
import { Container } from "@mui/material";

import { TasksBoard } from "components/tasks-board";
import { TasksList } from "components/tasks-list";

import { Jira } from "./jira.component";

describe("Pages", () => {
  describe("<Jira />", () => {
    describe("Render", () => {
      it("Should render <Container /> from mui with .jira-page class", () => {
        const jira = shallow(<Jira />)
          .find(Container)
          .find(".jira-page");
        expect(jira).toHaveLength(1);
      });

      it("Should render <TasksBoard />", () => {
        const tasksBoard = shallow(<Jira />).find(TasksBoard);
        expect(tasksBoard).toHaveLength(1);
      });

      it("Should render <TasksList />", () => {
        const tasksList = shallow(<Jira />).find(TasksList);
        expect(tasksList).toHaveLength(1);
      });
    });
  });
});
