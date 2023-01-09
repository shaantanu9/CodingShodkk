import Dashboard from "./Dashboard";
import Footer from "./Footer";
import { GetComments } from "./GetComments";
import HighlightSyntax from "./HighlightSyntax";
import HomePage from "./Home";
import Layout from "./Layout";
import LoginComp from "./LoginComp";
import Navbar from "./Navbar";
import { PostComments, CommentId } from "./PostComments";
import SingleSnips from "./SingleSnips";
// Type Export
import type { SingleSnipsProps } from "./SingleSnips";
export type { SingleSnipsProps, CommentId };
// Component Export
export {
  Footer,
  Navbar,
  Layout,
  HomePage,
  LoginComp,
  Dashboard,
  HighlightSyntax,
  SingleSnips,
  GetComments,
  PostComments,
};
