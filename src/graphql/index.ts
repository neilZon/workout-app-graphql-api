import { typeDefs as Mutation } from './types/mutationBase';
import { typeDefs as Query } from './types/queryBase';
import { typeDefs as User } from './types/user';
import { typeDefs as ExerciseSet } from './types/set';
import { typeDefs as Template } from './types/template';
import { typeDefs as Workout } from './types/workout';
import { typeDefs as Exercise } from './types/exercise';
import { typeDefs as Set } from './types/set';
import { typeDefs as Auth } from './types/auth';
import { authMutations } from './mutations/auth';
import { userQueries } from './queries/user';
import { templateQueries } from './queries/template';
import { templateMutations } from './mutations/template';
import { workoutQueries } from './queries/workout';
import { templateResolvers } from './resolvers/template';
import { workoutResolvers } from './resolvers/workout';
import { userResolvers } from './resolvers/user';
import { exerciseResolvers } from './resolvers/exercise';
import { workoutMutations } from './mutations/workout';
import { setMutations } from './mutations/set';

export const typeDefs = [
  Query,
  Mutation,
  Auth,
  User,
  Exercise,
  ExerciseSet,
  Workout,
  Template,
  Set,
];

export const resolvers = {
  Mutation: {
    ...authMutations,
    ...templateMutations,
    ...workoutMutations,
    ...setMutations,
  },
  Query: {
    ...userQueries,
    ...templateQueries,
    ...workoutQueries,
  },
  User: {
    ...userResolvers,
  },
  WorkoutTemplate: {
    ...templateResolvers,
  },
  Workout: {
    ...workoutResolvers,
  },
  Exercise: {
    ...exerciseResolvers,
  },
};
