import React from 'react';
import * as cn from './Todo.module.css';

export const Todo = ({todo}) => <li className={cn.todoItem}>{todo}</li>;
