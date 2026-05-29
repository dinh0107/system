
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model answers
 * 
 */
export type answers = $Result.DefaultSelection<Prisma.$answersPayload>
/**
 * Model attempts
 * 
 */
export type attempts = $Result.DefaultSelection<Prisma.$attemptsPayload>
/**
 * Model exam_questions
 * 
 */
export type exam_questions = $Result.DefaultSelection<Prisma.$exam_questionsPayload>
/**
 * Model exams
 * 
 */
export type exams = $Result.DefaultSelection<Prisma.$examsPayload>
/**
 * Model exam_classes
 * 
 */
export type exam_classes = $Result.DefaultSelection<Prisma.$exam_classesPayload>
/**
 * Model questions
 * 
 */
export type questions = $Result.DefaultSelection<Prisma.$questionsPayload>
/**
 * Model student_answers
 * 
 */
export type student_answers = $Result.DefaultSelection<Prisma.$student_answersPayload>
/**
 * Model subjects
 * 
 */
export type subjects = $Result.DefaultSelection<Prisma.$subjectsPayload>
/**
 * Model classes
 * 
 */
export type classes = $Result.DefaultSelection<Prisma.$classesPayload>
/**
 * Model class_students
 * 
 */
export type class_students = $Result.DefaultSelection<Prisma.$class_studentsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model refresh_tokens
 * 
 */
export type refresh_tokens = $Result.DefaultSelection<Prisma.$refresh_tokensPayload>
/**
 * Model email_otps
 * 
 */
export type email_otps = $Result.DefaultSelection<Prisma.$email_otpsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const attempt_status_enum: {
  IN_PROGRESS: 'IN_PROGRESS',
  SUBMITTED: 'SUBMITTED',
  TIMEOUT: 'TIMEOUT'
};

export type attempt_status_enum = (typeof attempt_status_enum)[keyof typeof attempt_status_enum]


export const exam_status_enum: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  CLOSED: 'CLOSED',
  ARCHIVED: 'ARCHIVED'
};

export type exam_status_enum = (typeof exam_status_enum)[keyof typeof exam_status_enum]


export const question_type_enum: {
  SINGLE_CHOICE: 'SINGLE_CHOICE',
  MULTIPLE_CHOICE: 'MULTIPLE_CHOICE',
  TRUE_FALSE: 'TRUE_FALSE'
};

export type question_type_enum = (typeof question_type_enum)[keyof typeof question_type_enum]


export const role_enum: {
  ADMIN: 'ADMIN',
  TEACHER: 'TEACHER',
  STUDENT: 'STUDENT'
};

export type role_enum = (typeof role_enum)[keyof typeof role_enum]

}

export type attempt_status_enum = $Enums.attempt_status_enum

export const attempt_status_enum: typeof $Enums.attempt_status_enum

export type exam_status_enum = $Enums.exam_status_enum

export const exam_status_enum: typeof $Enums.exam_status_enum

export type question_type_enum = $Enums.question_type_enum

export const question_type_enum: typeof $Enums.question_type_enum

export type role_enum = $Enums.role_enum

export const role_enum: typeof $Enums.role_enum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Answers
 * const answers = await prisma.answers.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Answers
   * const answers = await prisma.answers.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.answers`: Exposes CRUD operations for the **answers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answers.findMany()
    * ```
    */
  get answers(): Prisma.answersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attempts`: Exposes CRUD operations for the **attempts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attempts
    * const attempts = await prisma.attempts.findMany()
    * ```
    */
  get attempts(): Prisma.attemptsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exam_questions`: Exposes CRUD operations for the **exam_questions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exam_questions
    * const exam_questions = await prisma.exam_questions.findMany()
    * ```
    */
  get exam_questions(): Prisma.exam_questionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exams`: Exposes CRUD operations for the **exams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exams
    * const exams = await prisma.exams.findMany()
    * ```
    */
  get exams(): Prisma.examsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exam_classes`: Exposes CRUD operations for the **exam_classes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exam_classes
    * const exam_classes = await prisma.exam_classes.findMany()
    * ```
    */
  get exam_classes(): Prisma.exam_classesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questions`: Exposes CRUD operations for the **questions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.questions.findMany()
    * ```
    */
  get questions(): Prisma.questionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student_answers`: Exposes CRUD operations for the **student_answers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Student_answers
    * const student_answers = await prisma.student_answers.findMany()
    * ```
    */
  get student_answers(): Prisma.student_answersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subjects`: Exposes CRUD operations for the **subjects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subjects.findMany()
    * ```
    */
  get subjects(): Prisma.subjectsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classes`: Exposes CRUD operations for the **classes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.classes.findMany()
    * ```
    */
  get classes(): Prisma.classesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.class_students`: Exposes CRUD operations for the **class_students** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Class_students
    * const class_students = await prisma.class_students.findMany()
    * ```
    */
  get class_students(): Prisma.class_studentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refresh_tokens`: Exposes CRUD operations for the **refresh_tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Refresh_tokens
    * const refresh_tokens = await prisma.refresh_tokens.findMany()
    * ```
    */
  get refresh_tokens(): Prisma.refresh_tokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.email_otps`: Exposes CRUD operations for the **email_otps** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Email_otps
    * const email_otps = await prisma.email_otps.findMany()
    * ```
    */
  get email_otps(): Prisma.email_otpsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    answers: 'answers',
    attempts: 'attempts',
    exam_questions: 'exam_questions',
    exams: 'exams',
    exam_classes: 'exam_classes',
    questions: 'questions',
    student_answers: 'student_answers',
    subjects: 'subjects',
    classes: 'classes',
    class_students: 'class_students',
    users: 'users',
    refresh_tokens: 'refresh_tokens',
    email_otps: 'email_otps'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "answers" | "attempts" | "exam_questions" | "exams" | "exam_classes" | "questions" | "student_answers" | "subjects" | "classes" | "class_students" | "users" | "refresh_tokens" | "email_otps"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      answers: {
        payload: Prisma.$answersPayload<ExtArgs>
        fields: Prisma.answersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.answersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.answersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          findFirst: {
            args: Prisma.answersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.answersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          findMany: {
            args: Prisma.answersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>[]
          }
          create: {
            args: Prisma.answersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          createMany: {
            args: Prisma.answersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.answersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          update: {
            args: Prisma.answersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          deleteMany: {
            args: Prisma.answersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.answersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.answersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          aggregate: {
            args: Prisma.AnswersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswers>
          }
          groupBy: {
            args: Prisma.answersGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswersGroupByOutputType>[]
          }
          count: {
            args: Prisma.answersCountArgs<ExtArgs>
            result: $Utils.Optional<AnswersCountAggregateOutputType> | number
          }
        }
      }
      attempts: {
        payload: Prisma.$attemptsPayload<ExtArgs>
        fields: Prisma.attemptsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.attemptsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attemptsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.attemptsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attemptsPayload>
          }
          findFirst: {
            args: Prisma.attemptsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attemptsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.attemptsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attemptsPayload>
          }
          findMany: {
            args: Prisma.attemptsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attemptsPayload>[]
          }
          create: {
            args: Prisma.attemptsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attemptsPayload>
          }
          createMany: {
            args: Prisma.attemptsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.attemptsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attemptsPayload>
          }
          update: {
            args: Prisma.attemptsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attemptsPayload>
          }
          deleteMany: {
            args: Prisma.attemptsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.attemptsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.attemptsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attemptsPayload>
          }
          aggregate: {
            args: Prisma.AttemptsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttempts>
          }
          groupBy: {
            args: Prisma.attemptsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttemptsGroupByOutputType>[]
          }
          count: {
            args: Prisma.attemptsCountArgs<ExtArgs>
            result: $Utils.Optional<AttemptsCountAggregateOutputType> | number
          }
        }
      }
      exam_questions: {
        payload: Prisma.$exam_questionsPayload<ExtArgs>
        fields: Prisma.exam_questionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.exam_questionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_questionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.exam_questionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_questionsPayload>
          }
          findFirst: {
            args: Prisma.exam_questionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_questionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.exam_questionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_questionsPayload>
          }
          findMany: {
            args: Prisma.exam_questionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_questionsPayload>[]
          }
          create: {
            args: Prisma.exam_questionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_questionsPayload>
          }
          createMany: {
            args: Prisma.exam_questionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.exam_questionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_questionsPayload>
          }
          update: {
            args: Prisma.exam_questionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_questionsPayload>
          }
          deleteMany: {
            args: Prisma.exam_questionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.exam_questionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.exam_questionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_questionsPayload>
          }
          aggregate: {
            args: Prisma.Exam_questionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExam_questions>
          }
          groupBy: {
            args: Prisma.exam_questionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Exam_questionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.exam_questionsCountArgs<ExtArgs>
            result: $Utils.Optional<Exam_questionsCountAggregateOutputType> | number
          }
        }
      }
      exams: {
        payload: Prisma.$examsPayload<ExtArgs>
        fields: Prisma.examsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.examsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.examsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examsPayload>
          }
          findFirst: {
            args: Prisma.examsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.examsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examsPayload>
          }
          findMany: {
            args: Prisma.examsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examsPayload>[]
          }
          create: {
            args: Prisma.examsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examsPayload>
          }
          createMany: {
            args: Prisma.examsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.examsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examsPayload>
          }
          update: {
            args: Prisma.examsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examsPayload>
          }
          deleteMany: {
            args: Prisma.examsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.examsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.examsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examsPayload>
          }
          aggregate: {
            args: Prisma.ExamsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExams>
          }
          groupBy: {
            args: Prisma.examsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamsGroupByOutputType>[]
          }
          count: {
            args: Prisma.examsCountArgs<ExtArgs>
            result: $Utils.Optional<ExamsCountAggregateOutputType> | number
          }
        }
      }
      exam_classes: {
        payload: Prisma.$exam_classesPayload<ExtArgs>
        fields: Prisma.exam_classesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.exam_classesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_classesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.exam_classesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_classesPayload>
          }
          findFirst: {
            args: Prisma.exam_classesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_classesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.exam_classesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_classesPayload>
          }
          findMany: {
            args: Prisma.exam_classesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_classesPayload>[]
          }
          create: {
            args: Prisma.exam_classesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_classesPayload>
          }
          createMany: {
            args: Prisma.exam_classesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.exam_classesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_classesPayload>
          }
          update: {
            args: Prisma.exam_classesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_classesPayload>
          }
          deleteMany: {
            args: Prisma.exam_classesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.exam_classesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.exam_classesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_classesPayload>
          }
          aggregate: {
            args: Prisma.Exam_classesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExam_classes>
          }
          groupBy: {
            args: Prisma.exam_classesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Exam_classesGroupByOutputType>[]
          }
          count: {
            args: Prisma.exam_classesCountArgs<ExtArgs>
            result: $Utils.Optional<Exam_classesCountAggregateOutputType> | number
          }
        }
      }
      questions: {
        payload: Prisma.$questionsPayload<ExtArgs>
        fields: Prisma.questionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.questionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.questionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          findFirst: {
            args: Prisma.questionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.questionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          findMany: {
            args: Prisma.questionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>[]
          }
          create: {
            args: Prisma.questionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          createMany: {
            args: Prisma.questionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.questionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          update: {
            args: Prisma.questionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          deleteMany: {
            args: Prisma.questionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.questionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.questionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          aggregate: {
            args: Prisma.QuestionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestions>
          }
          groupBy: {
            args: Prisma.questionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.questionsCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionsCountAggregateOutputType> | number
          }
        }
      }
      student_answers: {
        payload: Prisma.$student_answersPayload<ExtArgs>
        fields: Prisma.student_answersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.student_answersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_answersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.student_answersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_answersPayload>
          }
          findFirst: {
            args: Prisma.student_answersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_answersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.student_answersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_answersPayload>
          }
          findMany: {
            args: Prisma.student_answersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_answersPayload>[]
          }
          create: {
            args: Prisma.student_answersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_answersPayload>
          }
          createMany: {
            args: Prisma.student_answersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.student_answersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_answersPayload>
          }
          update: {
            args: Prisma.student_answersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_answersPayload>
          }
          deleteMany: {
            args: Prisma.student_answersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.student_answersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.student_answersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_answersPayload>
          }
          aggregate: {
            args: Prisma.Student_answersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent_answers>
          }
          groupBy: {
            args: Prisma.student_answersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Student_answersGroupByOutputType>[]
          }
          count: {
            args: Prisma.student_answersCountArgs<ExtArgs>
            result: $Utils.Optional<Student_answersCountAggregateOutputType> | number
          }
        }
      }
      subjects: {
        payload: Prisma.$subjectsPayload<ExtArgs>
        fields: Prisma.subjectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subjectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subjectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload>
          }
          findFirst: {
            args: Prisma.subjectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subjectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload>
          }
          findMany: {
            args: Prisma.subjectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload>[]
          }
          create: {
            args: Prisma.subjectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload>
          }
          createMany: {
            args: Prisma.subjectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.subjectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload>
          }
          update: {
            args: Prisma.subjectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload>
          }
          deleteMany: {
            args: Prisma.subjectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.subjectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.subjectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload>
          }
          aggregate: {
            args: Prisma.SubjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubjects>
          }
          groupBy: {
            args: Prisma.subjectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.subjectsCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectsCountAggregateOutputType> | number
          }
        }
      }
      classes: {
        payload: Prisma.$classesPayload<ExtArgs>
        fields: Prisma.classesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.classesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.classesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>
          }
          findFirst: {
            args: Prisma.classesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.classesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>
          }
          findMany: {
            args: Prisma.classesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>[]
          }
          create: {
            args: Prisma.classesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>
          }
          createMany: {
            args: Prisma.classesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.classesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>
          }
          update: {
            args: Prisma.classesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>
          }
          deleteMany: {
            args: Prisma.classesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.classesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.classesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classesPayload>
          }
          aggregate: {
            args: Prisma.ClassesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClasses>
          }
          groupBy: {
            args: Prisma.classesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassesGroupByOutputType>[]
          }
          count: {
            args: Prisma.classesCountArgs<ExtArgs>
            result: $Utils.Optional<ClassesCountAggregateOutputType> | number
          }
        }
      }
      class_students: {
        payload: Prisma.$class_studentsPayload<ExtArgs>
        fields: Prisma.class_studentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.class_studentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_studentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.class_studentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_studentsPayload>
          }
          findFirst: {
            args: Prisma.class_studentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_studentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.class_studentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_studentsPayload>
          }
          findMany: {
            args: Prisma.class_studentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_studentsPayload>[]
          }
          create: {
            args: Prisma.class_studentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_studentsPayload>
          }
          createMany: {
            args: Prisma.class_studentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.class_studentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_studentsPayload>
          }
          update: {
            args: Prisma.class_studentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_studentsPayload>
          }
          deleteMany: {
            args: Prisma.class_studentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.class_studentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.class_studentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$class_studentsPayload>
          }
          aggregate: {
            args: Prisma.Class_studentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass_students>
          }
          groupBy: {
            args: Prisma.class_studentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Class_studentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.class_studentsCountArgs<ExtArgs>
            result: $Utils.Optional<Class_studentsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      refresh_tokens: {
        payload: Prisma.$refresh_tokensPayload<ExtArgs>
        fields: Prisma.refresh_tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.refresh_tokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.refresh_tokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload>
          }
          findFirst: {
            args: Prisma.refresh_tokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.refresh_tokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload>
          }
          findMany: {
            args: Prisma.refresh_tokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload>[]
          }
          create: {
            args: Prisma.refresh_tokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload>
          }
          createMany: {
            args: Prisma.refresh_tokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.refresh_tokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload>
          }
          update: {
            args: Prisma.refresh_tokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload>
          }
          deleteMany: {
            args: Prisma.refresh_tokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.refresh_tokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.refresh_tokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$refresh_tokensPayload>
          }
          aggregate: {
            args: Prisma.Refresh_tokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefresh_tokens>
          }
          groupBy: {
            args: Prisma.refresh_tokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<Refresh_tokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.refresh_tokensCountArgs<ExtArgs>
            result: $Utils.Optional<Refresh_tokensCountAggregateOutputType> | number
          }
        }
      }
      email_otps: {
        payload: Prisma.$email_otpsPayload<ExtArgs>
        fields: Prisma.email_otpsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.email_otpsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_otpsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.email_otpsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_otpsPayload>
          }
          findFirst: {
            args: Prisma.email_otpsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_otpsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.email_otpsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_otpsPayload>
          }
          findMany: {
            args: Prisma.email_otpsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_otpsPayload>[]
          }
          create: {
            args: Prisma.email_otpsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_otpsPayload>
          }
          createMany: {
            args: Prisma.email_otpsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.email_otpsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_otpsPayload>
          }
          update: {
            args: Prisma.email_otpsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_otpsPayload>
          }
          deleteMany: {
            args: Prisma.email_otpsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.email_otpsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.email_otpsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$email_otpsPayload>
          }
          aggregate: {
            args: Prisma.Email_otpsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmail_otps>
          }
          groupBy: {
            args: Prisma.email_otpsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Email_otpsGroupByOutputType>[]
          }
          count: {
            args: Prisma.email_otpsCountArgs<ExtArgs>
            result: $Utils.Optional<Email_otpsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    answers?: answersOmit
    attempts?: attemptsOmit
    exam_questions?: exam_questionsOmit
    exams?: examsOmit
    exam_classes?: exam_classesOmit
    questions?: questionsOmit
    student_answers?: student_answersOmit
    subjects?: subjectsOmit
    classes?: classesOmit
    class_students?: class_studentsOmit
    users?: usersOmit
    refresh_tokens?: refresh_tokensOmit
    email_otps?: email_otpsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AnswersCountOutputType
   */

  export type AnswersCountOutputType = {
    student_answers: number
  }

  export type AnswersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student_answers?: boolean | AnswersCountOutputTypeCountStudent_answersArgs
  }

  // Custom InputTypes
  /**
   * AnswersCountOutputType without action
   */
  export type AnswersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswersCountOutputType
     */
    select?: AnswersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnswersCountOutputType without action
   */
  export type AnswersCountOutputTypeCountStudent_answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: student_answersWhereInput
  }


  /**
   * Count Type AttemptsCountOutputType
   */

  export type AttemptsCountOutputType = {
    student_answers: number
  }

  export type AttemptsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student_answers?: boolean | AttemptsCountOutputTypeCountStudent_answersArgs
  }

  // Custom InputTypes
  /**
   * AttemptsCountOutputType without action
   */
  export type AttemptsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttemptsCountOutputType
     */
    select?: AttemptsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttemptsCountOutputType without action
   */
  export type AttemptsCountOutputTypeCountStudent_answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: student_answersWhereInput
  }


  /**
   * Count Type ExamsCountOutputType
   */

  export type ExamsCountOutputType = {
    attempts: number
    exam_questions: number
    exam_classes: number
  }

  export type ExamsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempts?: boolean | ExamsCountOutputTypeCountAttemptsArgs
    exam_questions?: boolean | ExamsCountOutputTypeCountExam_questionsArgs
    exam_classes?: boolean | ExamsCountOutputTypeCountExam_classesArgs
  }

  // Custom InputTypes
  /**
   * ExamsCountOutputType without action
   */
  export type ExamsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamsCountOutputType
     */
    select?: ExamsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExamsCountOutputType without action
   */
  export type ExamsCountOutputTypeCountAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attemptsWhereInput
  }

  /**
   * ExamsCountOutputType without action
   */
  export type ExamsCountOutputTypeCountExam_questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exam_questionsWhereInput
  }

  /**
   * ExamsCountOutputType without action
   */
  export type ExamsCountOutputTypeCountExam_classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exam_classesWhereInput
  }


  /**
   * Count Type QuestionsCountOutputType
   */

  export type QuestionsCountOutputType = {
    answers: number
    exam_questions: number
    student_answers: number
  }

  export type QuestionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QuestionsCountOutputTypeCountAnswersArgs
    exam_questions?: boolean | QuestionsCountOutputTypeCountExam_questionsArgs
    student_answers?: boolean | QuestionsCountOutputTypeCountStudent_answersArgs
  }

  // Custom InputTypes
  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionsCountOutputType
     */
    select?: QuestionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: answersWhereInput
  }

  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeCountExam_questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exam_questionsWhereInput
  }

  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeCountStudent_answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: student_answersWhereInput
  }


  /**
   * Count Type SubjectsCountOutputType
   */

  export type SubjectsCountOutputType = {
    exams: number
    questions: number
  }

  export type SubjectsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exams?: boolean | SubjectsCountOutputTypeCountExamsArgs
    questions?: boolean | SubjectsCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * SubjectsCountOutputType without action
   */
  export type SubjectsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectsCountOutputType
     */
    select?: SubjectsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectsCountOutputType without action
   */
  export type SubjectsCountOutputTypeCountExamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: examsWhereInput
  }

  /**
   * SubjectsCountOutputType without action
   */
  export type SubjectsCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionsWhereInput
  }


  /**
   * Count Type ClassesCountOutputType
   */

  export type ClassesCountOutputType = {
    class_students: number
    exam_classes: number
  }

  export type ClassesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class_students?: boolean | ClassesCountOutputTypeCountClass_studentsArgs
    exam_classes?: boolean | ClassesCountOutputTypeCountExam_classesArgs
  }

  // Custom InputTypes
  /**
   * ClassesCountOutputType without action
   */
  export type ClassesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassesCountOutputType
     */
    select?: ClassesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassesCountOutputType without action
   */
  export type ClassesCountOutputTypeCountClass_studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: class_studentsWhereInput
  }

  /**
   * ClassesCountOutputType without action
   */
  export type ClassesCountOutputTypeCountExam_classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exam_classesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    attempts: number
    exams: number
    questions: number
    refresh_tokens: number
    classes_teaching: number
    class_memberships: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempts?: boolean | UsersCountOutputTypeCountAttemptsArgs
    exams?: boolean | UsersCountOutputTypeCountExamsArgs
    questions?: boolean | UsersCountOutputTypeCountQuestionsArgs
    refresh_tokens?: boolean | UsersCountOutputTypeCountRefresh_tokensArgs
    classes_teaching?: boolean | UsersCountOutputTypeCountClasses_teachingArgs
    class_memberships?: boolean | UsersCountOutputTypeCountClass_membershipsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attemptsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountExamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: examsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRefresh_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: refresh_tokensWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountClasses_teachingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: classesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountClass_membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: class_studentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model answers
   */

  export type AggregateAnswers = {
    _count: AnswersCountAggregateOutputType | null
    _min: AnswersMinAggregateOutputType | null
    _max: AnswersMaxAggregateOutputType | null
  }

  export type AnswersMinAggregateOutputType = {
    id: string | null
    content: string | null
    is_correct: boolean | null
    question_id: string | null
    created_at: Date | null
  }

  export type AnswersMaxAggregateOutputType = {
    id: string | null
    content: string | null
    is_correct: boolean | null
    question_id: string | null
    created_at: Date | null
  }

  export type AnswersCountAggregateOutputType = {
    id: number
    content: number
    is_correct: number
    question_id: number
    created_at: number
    _all: number
  }


  export type AnswersMinAggregateInputType = {
    id?: true
    content?: true
    is_correct?: true
    question_id?: true
    created_at?: true
  }

  export type AnswersMaxAggregateInputType = {
    id?: true
    content?: true
    is_correct?: true
    question_id?: true
    created_at?: true
  }

  export type AnswersCountAggregateInputType = {
    id?: true
    content?: true
    is_correct?: true
    question_id?: true
    created_at?: true
    _all?: true
  }

  export type AnswersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which answers to aggregate.
     */
    where?: answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned answers
    **/
    _count?: true | AnswersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswersMaxAggregateInputType
  }

  export type GetAnswersAggregateType<T extends AnswersAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswers[P]>
      : GetScalarType<T[P], AggregateAnswers[P]>
  }




  export type answersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: answersWhereInput
    orderBy?: answersOrderByWithAggregationInput | answersOrderByWithAggregationInput[]
    by: AnswersScalarFieldEnum[] | AnswersScalarFieldEnum
    having?: answersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswersCountAggregateInputType | true
    _min?: AnswersMinAggregateInputType
    _max?: AnswersMaxAggregateInputType
  }

  export type AnswersGroupByOutputType = {
    id: string
    content: string
    is_correct: boolean | null
    question_id: string
    created_at: Date | null
    _count: AnswersCountAggregateOutputType | null
    _min: AnswersMinAggregateOutputType | null
    _max: AnswersMaxAggregateOutputType | null
  }

  type GetAnswersGroupByPayload<T extends answersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswersGroupByOutputType[P]>
            : GetScalarType<T[P], AnswersGroupByOutputType[P]>
        }
      >
    >


  export type answersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    is_correct?: boolean
    question_id?: boolean
    created_at?: boolean
    questions?: boolean | questionsDefaultArgs<ExtArgs>
    student_answers?: boolean | answers$student_answersArgs<ExtArgs>
    _count?: boolean | AnswersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answers"]>



  export type answersSelectScalar = {
    id?: boolean
    content?: boolean
    is_correct?: boolean
    question_id?: boolean
    created_at?: boolean
  }

  export type answersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "is_correct" | "question_id" | "created_at", ExtArgs["result"]["answers"]>
  export type answersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | questionsDefaultArgs<ExtArgs>
    student_answers?: boolean | answers$student_answersArgs<ExtArgs>
    _count?: boolean | AnswersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $answersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "answers"
    objects: {
      questions: Prisma.$questionsPayload<ExtArgs>
      student_answers: Prisma.$student_answersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      is_correct: boolean | null
      question_id: string
      created_at: Date | null
    }, ExtArgs["result"]["answers"]>
    composites: {}
  }

  type answersGetPayload<S extends boolean | null | undefined | answersDefaultArgs> = $Result.GetResult<Prisma.$answersPayload, S>

  type answersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<answersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswersCountAggregateInputType | true
    }

  export interface answersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['answers'], meta: { name: 'answers' } }
    /**
     * Find zero or one Answers that matches the filter.
     * @param {answersFindUniqueArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends answersFindUniqueArgs>(args: SelectSubset<T, answersFindUniqueArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {answersFindUniqueOrThrowArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends answersFindUniqueOrThrowArgs>(args: SelectSubset<T, answersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersFindFirstArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends answersFindFirstArgs>(args?: SelectSubset<T, answersFindFirstArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersFindFirstOrThrowArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends answersFindFirstOrThrowArgs>(args?: SelectSubset<T, answersFindFirstOrThrowArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answers.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answersWithIdOnly = await prisma.answers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends answersFindManyArgs>(args?: SelectSubset<T, answersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answers.
     * @param {answersCreateArgs} args - Arguments to create a Answers.
     * @example
     * // Create one Answers
     * const Answers = await prisma.answers.create({
     *   data: {
     *     // ... data to create a Answers
     *   }
     * })
     * 
     */
    create<T extends answersCreateArgs>(args: SelectSubset<T, answersCreateArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {answersCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answers = await prisma.answers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends answersCreateManyArgs>(args?: SelectSubset<T, answersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Answers.
     * @param {answersDeleteArgs} args - Arguments to delete one Answers.
     * @example
     * // Delete one Answers
     * const Answers = await prisma.answers.delete({
     *   where: {
     *     // ... filter to delete one Answers
     *   }
     * })
     * 
     */
    delete<T extends answersDeleteArgs>(args: SelectSubset<T, answersDeleteArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answers.
     * @param {answersUpdateArgs} args - Arguments to update one Answers.
     * @example
     * // Update one Answers
     * const answers = await prisma.answers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends answersUpdateArgs>(args: SelectSubset<T, answersUpdateArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {answersDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends answersDeleteManyArgs>(args?: SelectSubset<T, answersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answers = await prisma.answers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends answersUpdateManyArgs>(args: SelectSubset<T, answersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Answers.
     * @param {answersUpsertArgs} args - Arguments to update or create a Answers.
     * @example
     * // Update or create a Answers
     * const answers = await prisma.answers.upsert({
     *   create: {
     *     // ... data to create a Answers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answers we want to update
     *   }
     * })
     */
    upsert<T extends answersUpsertArgs>(args: SelectSubset<T, answersUpsertArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answers.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends answersCountArgs>(
      args?: Subset<T, answersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnswersAggregateArgs>(args: Subset<T, AnswersAggregateArgs>): Prisma.PrismaPromise<GetAnswersAggregateType<T>>

    /**
     * Group by Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends answersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: answersGroupByArgs['orderBy'] }
        : { orderBy?: answersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, answersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the answers model
   */
  readonly fields: answersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for answers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__answersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends questionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, questionsDefaultArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student_answers<T extends answers$student_answersArgs<ExtArgs> = {}>(args?: Subset<T, answers$student_answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_answersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the answers model
   */
  interface answersFieldRefs {
    readonly id: FieldRef<"answers", 'String'>
    readonly content: FieldRef<"answers", 'String'>
    readonly is_correct: FieldRef<"answers", 'Boolean'>
    readonly question_id: FieldRef<"answers", 'String'>
    readonly created_at: FieldRef<"answers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * answers findUnique
   */
  export type answersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where: answersWhereUniqueInput
  }

  /**
   * answers findUniqueOrThrow
   */
  export type answersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where: answersWhereUniqueInput
  }

  /**
   * answers findFirst
   */
  export type answersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where?: answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for answers.
     */
    cursor?: answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of answers.
     */
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * answers findFirstOrThrow
   */
  export type answersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where?: answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for answers.
     */
    cursor?: answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of answers.
     */
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * answers findMany
   */
  export type answersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where?: answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing answers.
     */
    cursor?: answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * answers create
   */
  export type answersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * The data needed to create a answers.
     */
    data: XOR<answersCreateInput, answersUncheckedCreateInput>
  }

  /**
   * answers createMany
   */
  export type answersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many answers.
     */
    data: answersCreateManyInput | answersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * answers update
   */
  export type answersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * The data needed to update a answers.
     */
    data: XOR<answersUpdateInput, answersUncheckedUpdateInput>
    /**
     * Choose, which answers to update.
     */
    where: answersWhereUniqueInput
  }

  /**
   * answers updateMany
   */
  export type answersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update answers.
     */
    data: XOR<answersUpdateManyMutationInput, answersUncheckedUpdateManyInput>
    /**
     * Filter which answers to update
     */
    where?: answersWhereInput
    /**
     * Limit how many answers to update.
     */
    limit?: number
  }

  /**
   * answers upsert
   */
  export type answersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * The filter to search for the answers to update in case it exists.
     */
    where: answersWhereUniqueInput
    /**
     * In case the answers found by the `where` argument doesn't exist, create a new answers with this data.
     */
    create: XOR<answersCreateInput, answersUncheckedCreateInput>
    /**
     * In case the answers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<answersUpdateInput, answersUncheckedUpdateInput>
  }

  /**
   * answers delete
   */
  export type answersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter which answers to delete.
     */
    where: answersWhereUniqueInput
  }

  /**
   * answers deleteMany
   */
  export type answersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which answers to delete
     */
    where?: answersWhereInput
    /**
     * Limit how many answers to delete.
     */
    limit?: number
  }

  /**
   * answers.student_answers
   */
  export type answers$student_answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_answers
     */
    select?: student_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_answers
     */
    omit?: student_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_answersInclude<ExtArgs> | null
    where?: student_answersWhereInput
    orderBy?: student_answersOrderByWithRelationInput | student_answersOrderByWithRelationInput[]
    cursor?: student_answersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Student_answersScalarFieldEnum | Student_answersScalarFieldEnum[]
  }

  /**
   * answers without action
   */
  export type answersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
  }


  /**
   * Model attempts
   */

  export type AggregateAttempts = {
    _count: AttemptsCountAggregateOutputType | null
    _avg: AttemptsAvgAggregateOutputType | null
    _sum: AttemptsSumAggregateOutputType | null
    _min: AttemptsMinAggregateOutputType | null
    _max: AttemptsMaxAggregateOutputType | null
  }

  export type AttemptsAvgAggregateOutputType = {
    score: number | null
    total_correct: number | null
    total_wrong: number | null
  }

  export type AttemptsSumAggregateOutputType = {
    score: number | null
    total_correct: number | null
    total_wrong: number | null
  }

  export type AttemptsMinAggregateOutputType = {
    id: string | null
    exam_id: string | null
    student_id: string | null
    started_at: Date | null
    submitted_at: Date | null
    status: $Enums.attempt_status_enum | null
    score: number | null
    total_correct: number | null
    total_wrong: number | null
    created_at: Date | null
  }

  export type AttemptsMaxAggregateOutputType = {
    id: string | null
    exam_id: string | null
    student_id: string | null
    started_at: Date | null
    submitted_at: Date | null
    status: $Enums.attempt_status_enum | null
    score: number | null
    total_correct: number | null
    total_wrong: number | null
    created_at: Date | null
  }

  export type AttemptsCountAggregateOutputType = {
    id: number
    exam_id: number
    student_id: number
    started_at: number
    submitted_at: number
    status: number
    score: number
    total_correct: number
    total_wrong: number
    created_at: number
    _all: number
  }


  export type AttemptsAvgAggregateInputType = {
    score?: true
    total_correct?: true
    total_wrong?: true
  }

  export type AttemptsSumAggregateInputType = {
    score?: true
    total_correct?: true
    total_wrong?: true
  }

  export type AttemptsMinAggregateInputType = {
    id?: true
    exam_id?: true
    student_id?: true
    started_at?: true
    submitted_at?: true
    status?: true
    score?: true
    total_correct?: true
    total_wrong?: true
    created_at?: true
  }

  export type AttemptsMaxAggregateInputType = {
    id?: true
    exam_id?: true
    student_id?: true
    started_at?: true
    submitted_at?: true
    status?: true
    score?: true
    total_correct?: true
    total_wrong?: true
    created_at?: true
  }

  export type AttemptsCountAggregateInputType = {
    id?: true
    exam_id?: true
    student_id?: true
    started_at?: true
    submitted_at?: true
    status?: true
    score?: true
    total_correct?: true
    total_wrong?: true
    created_at?: true
    _all?: true
  }

  export type AttemptsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attempts to aggregate.
     */
    where?: attemptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attempts to fetch.
     */
    orderBy?: attemptsOrderByWithRelationInput | attemptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: attemptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned attempts
    **/
    _count?: true | AttemptsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttemptsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttemptsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttemptsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttemptsMaxAggregateInputType
  }

  export type GetAttemptsAggregateType<T extends AttemptsAggregateArgs> = {
        [P in keyof T & keyof AggregateAttempts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttempts[P]>
      : GetScalarType<T[P], AggregateAttempts[P]>
  }




  export type attemptsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attemptsWhereInput
    orderBy?: attemptsOrderByWithAggregationInput | attemptsOrderByWithAggregationInput[]
    by: AttemptsScalarFieldEnum[] | AttemptsScalarFieldEnum
    having?: attemptsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttemptsCountAggregateInputType | true
    _avg?: AttemptsAvgAggregateInputType
    _sum?: AttemptsSumAggregateInputType
    _min?: AttemptsMinAggregateInputType
    _max?: AttemptsMaxAggregateInputType
  }

  export type AttemptsGroupByOutputType = {
    id: string
    exam_id: string
    student_id: string
    started_at: Date | null
    submitted_at: Date | null
    status: $Enums.attempt_status_enum | null
    score: number | null
    total_correct: number | null
    total_wrong: number | null
    created_at: Date | null
    _count: AttemptsCountAggregateOutputType | null
    _avg: AttemptsAvgAggregateOutputType | null
    _sum: AttemptsSumAggregateOutputType | null
    _min: AttemptsMinAggregateOutputType | null
    _max: AttemptsMaxAggregateOutputType | null
  }

  type GetAttemptsGroupByPayload<T extends attemptsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttemptsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttemptsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttemptsGroupByOutputType[P]>
            : GetScalarType<T[P], AttemptsGroupByOutputType[P]>
        }
      >
    >


  export type attemptsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exam_id?: boolean
    student_id?: boolean
    started_at?: boolean
    submitted_at?: boolean
    status?: boolean
    score?: boolean
    total_correct?: boolean
    total_wrong?: boolean
    created_at?: boolean
    exams?: boolean | examsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    student_answers?: boolean | attempts$student_answersArgs<ExtArgs>
    _count?: boolean | AttemptsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attempts"]>



  export type attemptsSelectScalar = {
    id?: boolean
    exam_id?: boolean
    student_id?: boolean
    started_at?: boolean
    submitted_at?: boolean
    status?: boolean
    score?: boolean
    total_correct?: boolean
    total_wrong?: boolean
    created_at?: boolean
  }

  export type attemptsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "exam_id" | "student_id" | "started_at" | "submitted_at" | "status" | "score" | "total_correct" | "total_wrong" | "created_at", ExtArgs["result"]["attempts"]>
  export type attemptsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exams?: boolean | examsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    student_answers?: boolean | attempts$student_answersArgs<ExtArgs>
    _count?: boolean | AttemptsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $attemptsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "attempts"
    objects: {
      exams: Prisma.$examsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
      student_answers: Prisma.$student_answersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      exam_id: string
      student_id: string
      started_at: Date | null
      submitted_at: Date | null
      status: $Enums.attempt_status_enum | null
      score: number | null
      total_correct: number | null
      total_wrong: number | null
      created_at: Date | null
    }, ExtArgs["result"]["attempts"]>
    composites: {}
  }

  type attemptsGetPayload<S extends boolean | null | undefined | attemptsDefaultArgs> = $Result.GetResult<Prisma.$attemptsPayload, S>

  type attemptsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<attemptsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttemptsCountAggregateInputType | true
    }

  export interface attemptsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['attempts'], meta: { name: 'attempts' } }
    /**
     * Find zero or one Attempts that matches the filter.
     * @param {attemptsFindUniqueArgs} args - Arguments to find a Attempts
     * @example
     * // Get one Attempts
     * const attempts = await prisma.attempts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends attemptsFindUniqueArgs>(args: SelectSubset<T, attemptsFindUniqueArgs<ExtArgs>>): Prisma__attemptsClient<$Result.GetResult<Prisma.$attemptsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attempts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {attemptsFindUniqueOrThrowArgs} args - Arguments to find a Attempts
     * @example
     * // Get one Attempts
     * const attempts = await prisma.attempts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends attemptsFindUniqueOrThrowArgs>(args: SelectSubset<T, attemptsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__attemptsClient<$Result.GetResult<Prisma.$attemptsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attemptsFindFirstArgs} args - Arguments to find a Attempts
     * @example
     * // Get one Attempts
     * const attempts = await prisma.attempts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends attemptsFindFirstArgs>(args?: SelectSubset<T, attemptsFindFirstArgs<ExtArgs>>): Prisma__attemptsClient<$Result.GetResult<Prisma.$attemptsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attempts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attemptsFindFirstOrThrowArgs} args - Arguments to find a Attempts
     * @example
     * // Get one Attempts
     * const attempts = await prisma.attempts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends attemptsFindFirstOrThrowArgs>(args?: SelectSubset<T, attemptsFindFirstOrThrowArgs<ExtArgs>>): Prisma__attemptsClient<$Result.GetResult<Prisma.$attemptsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attemptsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attempts
     * const attempts = await prisma.attempts.findMany()
     * 
     * // Get first 10 Attempts
     * const attempts = await prisma.attempts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attemptsWithIdOnly = await prisma.attempts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends attemptsFindManyArgs>(args?: SelectSubset<T, attemptsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attemptsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attempts.
     * @param {attemptsCreateArgs} args - Arguments to create a Attempts.
     * @example
     * // Create one Attempts
     * const Attempts = await prisma.attempts.create({
     *   data: {
     *     // ... data to create a Attempts
     *   }
     * })
     * 
     */
    create<T extends attemptsCreateArgs>(args: SelectSubset<T, attemptsCreateArgs<ExtArgs>>): Prisma__attemptsClient<$Result.GetResult<Prisma.$attemptsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attempts.
     * @param {attemptsCreateManyArgs} args - Arguments to create many Attempts.
     * @example
     * // Create many Attempts
     * const attempts = await prisma.attempts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends attemptsCreateManyArgs>(args?: SelectSubset<T, attemptsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attempts.
     * @param {attemptsDeleteArgs} args - Arguments to delete one Attempts.
     * @example
     * // Delete one Attempts
     * const Attempts = await prisma.attempts.delete({
     *   where: {
     *     // ... filter to delete one Attempts
     *   }
     * })
     * 
     */
    delete<T extends attemptsDeleteArgs>(args: SelectSubset<T, attemptsDeleteArgs<ExtArgs>>): Prisma__attemptsClient<$Result.GetResult<Prisma.$attemptsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attempts.
     * @param {attemptsUpdateArgs} args - Arguments to update one Attempts.
     * @example
     * // Update one Attempts
     * const attempts = await prisma.attempts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends attemptsUpdateArgs>(args: SelectSubset<T, attemptsUpdateArgs<ExtArgs>>): Prisma__attemptsClient<$Result.GetResult<Prisma.$attemptsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attempts.
     * @param {attemptsDeleteManyArgs} args - Arguments to filter Attempts to delete.
     * @example
     * // Delete a few Attempts
     * const { count } = await prisma.attempts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends attemptsDeleteManyArgs>(args?: SelectSubset<T, attemptsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attemptsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attempts
     * const attempts = await prisma.attempts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends attemptsUpdateManyArgs>(args: SelectSubset<T, attemptsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attempts.
     * @param {attemptsUpsertArgs} args - Arguments to update or create a Attempts.
     * @example
     * // Update or create a Attempts
     * const attempts = await prisma.attempts.upsert({
     *   create: {
     *     // ... data to create a Attempts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attempts we want to update
     *   }
     * })
     */
    upsert<T extends attemptsUpsertArgs>(args: SelectSubset<T, attemptsUpsertArgs<ExtArgs>>): Prisma__attemptsClient<$Result.GetResult<Prisma.$attemptsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attemptsCountArgs} args - Arguments to filter Attempts to count.
     * @example
     * // Count the number of Attempts
     * const count = await prisma.attempts.count({
     *   where: {
     *     // ... the filter for the Attempts we want to count
     *   }
     * })
    **/
    count<T extends attemptsCountArgs>(
      args?: Subset<T, attemptsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttemptsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttemptsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttemptsAggregateArgs>(args: Subset<T, AttemptsAggregateArgs>): Prisma.PrismaPromise<GetAttemptsAggregateType<T>>

    /**
     * Group by Attempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attemptsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends attemptsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: attemptsGroupByArgs['orderBy'] }
        : { orderBy?: attemptsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, attemptsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttemptsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the attempts model
   */
  readonly fields: attemptsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for attempts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__attemptsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exams<T extends examsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, examsDefaultArgs<ExtArgs>>): Prisma__examsClient<$Result.GetResult<Prisma.$examsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student_answers<T extends attempts$student_answersArgs<ExtArgs> = {}>(args?: Subset<T, attempts$student_answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_answersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the attempts model
   */
  interface attemptsFieldRefs {
    readonly id: FieldRef<"attempts", 'String'>
    readonly exam_id: FieldRef<"attempts", 'String'>
    readonly student_id: FieldRef<"attempts", 'String'>
    readonly started_at: FieldRef<"attempts", 'DateTime'>
    readonly submitted_at: FieldRef<"attempts", 'DateTime'>
    readonly status: FieldRef<"attempts", 'attempt_status_enum'>
    readonly score: FieldRef<"attempts", 'Float'>
    readonly total_correct: FieldRef<"attempts", 'Int'>
    readonly total_wrong: FieldRef<"attempts", 'Int'>
    readonly created_at: FieldRef<"attempts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * attempts findUnique
   */
  export type attemptsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attempts
     */
    select?: attemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attempts
     */
    omit?: attemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attemptsInclude<ExtArgs> | null
    /**
     * Filter, which attempts to fetch.
     */
    where: attemptsWhereUniqueInput
  }

  /**
   * attempts findUniqueOrThrow
   */
  export type attemptsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attempts
     */
    select?: attemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attempts
     */
    omit?: attemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attemptsInclude<ExtArgs> | null
    /**
     * Filter, which attempts to fetch.
     */
    where: attemptsWhereUniqueInput
  }

  /**
   * attempts findFirst
   */
  export type attemptsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attempts
     */
    select?: attemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attempts
     */
    omit?: attemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attemptsInclude<ExtArgs> | null
    /**
     * Filter, which attempts to fetch.
     */
    where?: attemptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attempts to fetch.
     */
    orderBy?: attemptsOrderByWithRelationInput | attemptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attempts.
     */
    cursor?: attemptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attempts.
     */
    distinct?: AttemptsScalarFieldEnum | AttemptsScalarFieldEnum[]
  }

  /**
   * attempts findFirstOrThrow
   */
  export type attemptsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attempts
     */
    select?: attemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attempts
     */
    omit?: attemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attemptsInclude<ExtArgs> | null
    /**
     * Filter, which attempts to fetch.
     */
    where?: attemptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attempts to fetch.
     */
    orderBy?: attemptsOrderByWithRelationInput | attemptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attempts.
     */
    cursor?: attemptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attempts.
     */
    distinct?: AttemptsScalarFieldEnum | AttemptsScalarFieldEnum[]
  }

  /**
   * attempts findMany
   */
  export type attemptsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attempts
     */
    select?: attemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attempts
     */
    omit?: attemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attemptsInclude<ExtArgs> | null
    /**
     * Filter, which attempts to fetch.
     */
    where?: attemptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attempts to fetch.
     */
    orderBy?: attemptsOrderByWithRelationInput | attemptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing attempts.
     */
    cursor?: attemptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attempts.
     */
    skip?: number
    distinct?: AttemptsScalarFieldEnum | AttemptsScalarFieldEnum[]
  }

  /**
   * attempts create
   */
  export type attemptsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attempts
     */
    select?: attemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attempts
     */
    omit?: attemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attemptsInclude<ExtArgs> | null
    /**
     * The data needed to create a attempts.
     */
    data: XOR<attemptsCreateInput, attemptsUncheckedCreateInput>
  }

  /**
   * attempts createMany
   */
  export type attemptsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many attempts.
     */
    data: attemptsCreateManyInput | attemptsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * attempts update
   */
  export type attemptsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attempts
     */
    select?: attemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attempts
     */
    omit?: attemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attemptsInclude<ExtArgs> | null
    /**
     * The data needed to update a attempts.
     */
    data: XOR<attemptsUpdateInput, attemptsUncheckedUpdateInput>
    /**
     * Choose, which attempts to update.
     */
    where: attemptsWhereUniqueInput
  }

  /**
   * attempts updateMany
   */
  export type attemptsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update attempts.
     */
    data: XOR<attemptsUpdateManyMutationInput, attemptsUncheckedUpdateManyInput>
    /**
     * Filter which attempts to update
     */
    where?: attemptsWhereInput
    /**
     * Limit how many attempts to update.
     */
    limit?: number
  }

  /**
   * attempts upsert
   */
  export type attemptsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attempts
     */
    select?: attemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attempts
     */
    omit?: attemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attemptsInclude<ExtArgs> | null
    /**
     * The filter to search for the attempts to update in case it exists.
     */
    where: attemptsWhereUniqueInput
    /**
     * In case the attempts found by the `where` argument doesn't exist, create a new attempts with this data.
     */
    create: XOR<attemptsCreateInput, attemptsUncheckedCreateInput>
    /**
     * In case the attempts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<attemptsUpdateInput, attemptsUncheckedUpdateInput>
  }

  /**
   * attempts delete
   */
  export type attemptsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attempts
     */
    select?: attemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attempts
     */
    omit?: attemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attemptsInclude<ExtArgs> | null
    /**
     * Filter which attempts to delete.
     */
    where: attemptsWhereUniqueInput
  }

  /**
   * attempts deleteMany
   */
  export type attemptsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attempts to delete
     */
    where?: attemptsWhereInput
    /**
     * Limit how many attempts to delete.
     */
    limit?: number
  }

  /**
   * attempts.student_answers
   */
  export type attempts$student_answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_answers
     */
    select?: student_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_answers
     */
    omit?: student_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_answersInclude<ExtArgs> | null
    where?: student_answersWhereInput
    orderBy?: student_answersOrderByWithRelationInput | student_answersOrderByWithRelationInput[]
    cursor?: student_answersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Student_answersScalarFieldEnum | Student_answersScalarFieldEnum[]
  }

  /**
   * attempts without action
   */
  export type attemptsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attempts
     */
    select?: attemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attempts
     */
    omit?: attemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attemptsInclude<ExtArgs> | null
  }


  /**
   * Model exam_questions
   */

  export type AggregateExam_questions = {
    _count: Exam_questionsCountAggregateOutputType | null
    _avg: Exam_questionsAvgAggregateOutputType | null
    _sum: Exam_questionsSumAggregateOutputType | null
    _min: Exam_questionsMinAggregateOutputType | null
    _max: Exam_questionsMaxAggregateOutputType | null
  }

  export type Exam_questionsAvgAggregateOutputType = {
    order_index: number | null
    score: number | null
  }

  export type Exam_questionsSumAggregateOutputType = {
    order_index: number | null
    score: number | null
  }

  export type Exam_questionsMinAggregateOutputType = {
    exam_id: string | null
    question_id: string | null
    order_index: number | null
    score: number | null
  }

  export type Exam_questionsMaxAggregateOutputType = {
    exam_id: string | null
    question_id: string | null
    order_index: number | null
    score: number | null
  }

  export type Exam_questionsCountAggregateOutputType = {
    exam_id: number
    question_id: number
    order_index: number
    score: number
    _all: number
  }


  export type Exam_questionsAvgAggregateInputType = {
    order_index?: true
    score?: true
  }

  export type Exam_questionsSumAggregateInputType = {
    order_index?: true
    score?: true
  }

  export type Exam_questionsMinAggregateInputType = {
    exam_id?: true
    question_id?: true
    order_index?: true
    score?: true
  }

  export type Exam_questionsMaxAggregateInputType = {
    exam_id?: true
    question_id?: true
    order_index?: true
    score?: true
  }

  export type Exam_questionsCountAggregateInputType = {
    exam_id?: true
    question_id?: true
    order_index?: true
    score?: true
    _all?: true
  }

  export type Exam_questionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exam_questions to aggregate.
     */
    where?: exam_questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exam_questions to fetch.
     */
    orderBy?: exam_questionsOrderByWithRelationInput | exam_questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: exam_questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exam_questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exam_questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned exam_questions
    **/
    _count?: true | Exam_questionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Exam_questionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Exam_questionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Exam_questionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Exam_questionsMaxAggregateInputType
  }

  export type GetExam_questionsAggregateType<T extends Exam_questionsAggregateArgs> = {
        [P in keyof T & keyof AggregateExam_questions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExam_questions[P]>
      : GetScalarType<T[P], AggregateExam_questions[P]>
  }




  export type exam_questionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exam_questionsWhereInput
    orderBy?: exam_questionsOrderByWithAggregationInput | exam_questionsOrderByWithAggregationInput[]
    by: Exam_questionsScalarFieldEnum[] | Exam_questionsScalarFieldEnum
    having?: exam_questionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Exam_questionsCountAggregateInputType | true
    _avg?: Exam_questionsAvgAggregateInputType
    _sum?: Exam_questionsSumAggregateInputType
    _min?: Exam_questionsMinAggregateInputType
    _max?: Exam_questionsMaxAggregateInputType
  }

  export type Exam_questionsGroupByOutputType = {
    exam_id: string
    question_id: string
    order_index: number
    score: number | null
    _count: Exam_questionsCountAggregateOutputType | null
    _avg: Exam_questionsAvgAggregateOutputType | null
    _sum: Exam_questionsSumAggregateOutputType | null
    _min: Exam_questionsMinAggregateOutputType | null
    _max: Exam_questionsMaxAggregateOutputType | null
  }

  type GetExam_questionsGroupByPayload<T extends exam_questionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Exam_questionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Exam_questionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Exam_questionsGroupByOutputType[P]>
            : GetScalarType<T[P], Exam_questionsGroupByOutputType[P]>
        }
      >
    >


  export type exam_questionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    exam_id?: boolean
    question_id?: boolean
    order_index?: boolean
    score?: boolean
    exams?: boolean | examsDefaultArgs<ExtArgs>
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam_questions"]>



  export type exam_questionsSelectScalar = {
    exam_id?: boolean
    question_id?: boolean
    order_index?: boolean
    score?: boolean
  }

  export type exam_questionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"exam_id" | "question_id" | "order_index" | "score", ExtArgs["result"]["exam_questions"]>
  export type exam_questionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exams?: boolean | examsDefaultArgs<ExtArgs>
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }

  export type $exam_questionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "exam_questions"
    objects: {
      exams: Prisma.$examsPayload<ExtArgs>
      questions: Prisma.$questionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      exam_id: string
      question_id: string
      order_index: number
      score: number | null
    }, ExtArgs["result"]["exam_questions"]>
    composites: {}
  }

  type exam_questionsGetPayload<S extends boolean | null | undefined | exam_questionsDefaultArgs> = $Result.GetResult<Prisma.$exam_questionsPayload, S>

  type exam_questionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<exam_questionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Exam_questionsCountAggregateInputType | true
    }

  export interface exam_questionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['exam_questions'], meta: { name: 'exam_questions' } }
    /**
     * Find zero or one Exam_questions that matches the filter.
     * @param {exam_questionsFindUniqueArgs} args - Arguments to find a Exam_questions
     * @example
     * // Get one Exam_questions
     * const exam_questions = await prisma.exam_questions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends exam_questionsFindUniqueArgs>(args: SelectSubset<T, exam_questionsFindUniqueArgs<ExtArgs>>): Prisma__exam_questionsClient<$Result.GetResult<Prisma.$exam_questionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exam_questions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {exam_questionsFindUniqueOrThrowArgs} args - Arguments to find a Exam_questions
     * @example
     * // Get one Exam_questions
     * const exam_questions = await prisma.exam_questions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends exam_questionsFindUniqueOrThrowArgs>(args: SelectSubset<T, exam_questionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__exam_questionsClient<$Result.GetResult<Prisma.$exam_questionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam_questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exam_questionsFindFirstArgs} args - Arguments to find a Exam_questions
     * @example
     * // Get one Exam_questions
     * const exam_questions = await prisma.exam_questions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends exam_questionsFindFirstArgs>(args?: SelectSubset<T, exam_questionsFindFirstArgs<ExtArgs>>): Prisma__exam_questionsClient<$Result.GetResult<Prisma.$exam_questionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam_questions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exam_questionsFindFirstOrThrowArgs} args - Arguments to find a Exam_questions
     * @example
     * // Get one Exam_questions
     * const exam_questions = await prisma.exam_questions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends exam_questionsFindFirstOrThrowArgs>(args?: SelectSubset<T, exam_questionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__exam_questionsClient<$Result.GetResult<Prisma.$exam_questionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exam_questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exam_questionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exam_questions
     * const exam_questions = await prisma.exam_questions.findMany()
     * 
     * // Get first 10 Exam_questions
     * const exam_questions = await prisma.exam_questions.findMany({ take: 10 })
     * 
     * // Only select the `exam_id`
     * const exam_questionsWithExam_idOnly = await prisma.exam_questions.findMany({ select: { exam_id: true } })
     * 
     */
    findMany<T extends exam_questionsFindManyArgs>(args?: SelectSubset<T, exam_questionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exam_questionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exam_questions.
     * @param {exam_questionsCreateArgs} args - Arguments to create a Exam_questions.
     * @example
     * // Create one Exam_questions
     * const Exam_questions = await prisma.exam_questions.create({
     *   data: {
     *     // ... data to create a Exam_questions
     *   }
     * })
     * 
     */
    create<T extends exam_questionsCreateArgs>(args: SelectSubset<T, exam_questionsCreateArgs<ExtArgs>>): Prisma__exam_questionsClient<$Result.GetResult<Prisma.$exam_questionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exam_questions.
     * @param {exam_questionsCreateManyArgs} args - Arguments to create many Exam_questions.
     * @example
     * // Create many Exam_questions
     * const exam_questions = await prisma.exam_questions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends exam_questionsCreateManyArgs>(args?: SelectSubset<T, exam_questionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exam_questions.
     * @param {exam_questionsDeleteArgs} args - Arguments to delete one Exam_questions.
     * @example
     * // Delete one Exam_questions
     * const Exam_questions = await prisma.exam_questions.delete({
     *   where: {
     *     // ... filter to delete one Exam_questions
     *   }
     * })
     * 
     */
    delete<T extends exam_questionsDeleteArgs>(args: SelectSubset<T, exam_questionsDeleteArgs<ExtArgs>>): Prisma__exam_questionsClient<$Result.GetResult<Prisma.$exam_questionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exam_questions.
     * @param {exam_questionsUpdateArgs} args - Arguments to update one Exam_questions.
     * @example
     * // Update one Exam_questions
     * const exam_questions = await prisma.exam_questions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends exam_questionsUpdateArgs>(args: SelectSubset<T, exam_questionsUpdateArgs<ExtArgs>>): Prisma__exam_questionsClient<$Result.GetResult<Prisma.$exam_questionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exam_questions.
     * @param {exam_questionsDeleteManyArgs} args - Arguments to filter Exam_questions to delete.
     * @example
     * // Delete a few Exam_questions
     * const { count } = await prisma.exam_questions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends exam_questionsDeleteManyArgs>(args?: SelectSubset<T, exam_questionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exam_questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exam_questionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exam_questions
     * const exam_questions = await prisma.exam_questions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends exam_questionsUpdateManyArgs>(args: SelectSubset<T, exam_questionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exam_questions.
     * @param {exam_questionsUpsertArgs} args - Arguments to update or create a Exam_questions.
     * @example
     * // Update or create a Exam_questions
     * const exam_questions = await prisma.exam_questions.upsert({
     *   create: {
     *     // ... data to create a Exam_questions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exam_questions we want to update
     *   }
     * })
     */
    upsert<T extends exam_questionsUpsertArgs>(args: SelectSubset<T, exam_questionsUpsertArgs<ExtArgs>>): Prisma__exam_questionsClient<$Result.GetResult<Prisma.$exam_questionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exam_questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exam_questionsCountArgs} args - Arguments to filter Exam_questions to count.
     * @example
     * // Count the number of Exam_questions
     * const count = await prisma.exam_questions.count({
     *   where: {
     *     // ... the filter for the Exam_questions we want to count
     *   }
     * })
    **/
    count<T extends exam_questionsCountArgs>(
      args?: Subset<T, exam_questionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Exam_questionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exam_questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Exam_questionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Exam_questionsAggregateArgs>(args: Subset<T, Exam_questionsAggregateArgs>): Prisma.PrismaPromise<GetExam_questionsAggregateType<T>>

    /**
     * Group by Exam_questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exam_questionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends exam_questionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: exam_questionsGroupByArgs['orderBy'] }
        : { orderBy?: exam_questionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, exam_questionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExam_questionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the exam_questions model
   */
  readonly fields: exam_questionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for exam_questions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__exam_questionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exams<T extends examsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, examsDefaultArgs<ExtArgs>>): Prisma__examsClient<$Result.GetResult<Prisma.$examsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends questionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, questionsDefaultArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the exam_questions model
   */
  interface exam_questionsFieldRefs {
    readonly exam_id: FieldRef<"exam_questions", 'String'>
    readonly question_id: FieldRef<"exam_questions", 'String'>
    readonly order_index: FieldRef<"exam_questions", 'Int'>
    readonly score: FieldRef<"exam_questions", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * exam_questions findUnique
   */
  export type exam_questionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_questions
     */
    select?: exam_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_questions
     */
    omit?: exam_questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_questionsInclude<ExtArgs> | null
    /**
     * Filter, which exam_questions to fetch.
     */
    where: exam_questionsWhereUniqueInput
  }

  /**
   * exam_questions findUniqueOrThrow
   */
  export type exam_questionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_questions
     */
    select?: exam_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_questions
     */
    omit?: exam_questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_questionsInclude<ExtArgs> | null
    /**
     * Filter, which exam_questions to fetch.
     */
    where: exam_questionsWhereUniqueInput
  }

  /**
   * exam_questions findFirst
   */
  export type exam_questionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_questions
     */
    select?: exam_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_questions
     */
    omit?: exam_questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_questionsInclude<ExtArgs> | null
    /**
     * Filter, which exam_questions to fetch.
     */
    where?: exam_questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exam_questions to fetch.
     */
    orderBy?: exam_questionsOrderByWithRelationInput | exam_questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exam_questions.
     */
    cursor?: exam_questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exam_questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exam_questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exam_questions.
     */
    distinct?: Exam_questionsScalarFieldEnum | Exam_questionsScalarFieldEnum[]
  }

  /**
   * exam_questions findFirstOrThrow
   */
  export type exam_questionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_questions
     */
    select?: exam_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_questions
     */
    omit?: exam_questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_questionsInclude<ExtArgs> | null
    /**
     * Filter, which exam_questions to fetch.
     */
    where?: exam_questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exam_questions to fetch.
     */
    orderBy?: exam_questionsOrderByWithRelationInput | exam_questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exam_questions.
     */
    cursor?: exam_questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exam_questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exam_questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exam_questions.
     */
    distinct?: Exam_questionsScalarFieldEnum | Exam_questionsScalarFieldEnum[]
  }

  /**
   * exam_questions findMany
   */
  export type exam_questionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_questions
     */
    select?: exam_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_questions
     */
    omit?: exam_questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_questionsInclude<ExtArgs> | null
    /**
     * Filter, which exam_questions to fetch.
     */
    where?: exam_questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exam_questions to fetch.
     */
    orderBy?: exam_questionsOrderByWithRelationInput | exam_questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing exam_questions.
     */
    cursor?: exam_questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exam_questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exam_questions.
     */
    skip?: number
    distinct?: Exam_questionsScalarFieldEnum | Exam_questionsScalarFieldEnum[]
  }

  /**
   * exam_questions create
   */
  export type exam_questionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_questions
     */
    select?: exam_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_questions
     */
    omit?: exam_questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_questionsInclude<ExtArgs> | null
    /**
     * The data needed to create a exam_questions.
     */
    data: XOR<exam_questionsCreateInput, exam_questionsUncheckedCreateInput>
  }

  /**
   * exam_questions createMany
   */
  export type exam_questionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many exam_questions.
     */
    data: exam_questionsCreateManyInput | exam_questionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * exam_questions update
   */
  export type exam_questionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_questions
     */
    select?: exam_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_questions
     */
    omit?: exam_questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_questionsInclude<ExtArgs> | null
    /**
     * The data needed to update a exam_questions.
     */
    data: XOR<exam_questionsUpdateInput, exam_questionsUncheckedUpdateInput>
    /**
     * Choose, which exam_questions to update.
     */
    where: exam_questionsWhereUniqueInput
  }

  /**
   * exam_questions updateMany
   */
  export type exam_questionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update exam_questions.
     */
    data: XOR<exam_questionsUpdateManyMutationInput, exam_questionsUncheckedUpdateManyInput>
    /**
     * Filter which exam_questions to update
     */
    where?: exam_questionsWhereInput
    /**
     * Limit how many exam_questions to update.
     */
    limit?: number
  }

  /**
   * exam_questions upsert
   */
  export type exam_questionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_questions
     */
    select?: exam_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_questions
     */
    omit?: exam_questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_questionsInclude<ExtArgs> | null
    /**
     * The filter to search for the exam_questions to update in case it exists.
     */
    where: exam_questionsWhereUniqueInput
    /**
     * In case the exam_questions found by the `where` argument doesn't exist, create a new exam_questions with this data.
     */
    create: XOR<exam_questionsCreateInput, exam_questionsUncheckedCreateInput>
    /**
     * In case the exam_questions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<exam_questionsUpdateInput, exam_questionsUncheckedUpdateInput>
  }

  /**
   * exam_questions delete
   */
  export type exam_questionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_questions
     */
    select?: exam_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_questions
     */
    omit?: exam_questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_questionsInclude<ExtArgs> | null
    /**
     * Filter which exam_questions to delete.
     */
    where: exam_questionsWhereUniqueInput
  }

  /**
   * exam_questions deleteMany
   */
  export type exam_questionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exam_questions to delete
     */
    where?: exam_questionsWhereInput
    /**
     * Limit how many exam_questions to delete.
     */
    limit?: number
  }

  /**
   * exam_questions without action
   */
  export type exam_questionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_questions
     */
    select?: exam_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_questions
     */
    omit?: exam_questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_questionsInclude<ExtArgs> | null
  }


  /**
   * Model exams
   */

  export type AggregateExams = {
    _count: ExamsCountAggregateOutputType | null
    _avg: ExamsAvgAggregateOutputType | null
    _sum: ExamsSumAggregateOutputType | null
    _min: ExamsMinAggregateOutputType | null
    _max: ExamsMaxAggregateOutputType | null
  }

  export type ExamsAvgAggregateOutputType = {
    duration: number | null
    total_score: number | null
    max_attempts: number | null
  }

  export type ExamsSumAggregateOutputType = {
    duration: number | null
    total_score: number | null
    max_attempts: number | null
  }

  export type ExamsMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    description: string | null
    duration: number | null
    total_score: number | null
    status: $Enums.exam_status_enum | null
    is_public: boolean | null
    access_code: string | null
    start_time: Date | null
    end_time: Date | null
    shuffle_questions: boolean | null
    shuffle_answers: boolean | null
    show_result_after_submit: boolean | null
    max_attempts: number | null
    subject_id: string | null
    created_by_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ExamsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    description: string | null
    duration: number | null
    total_score: number | null
    status: $Enums.exam_status_enum | null
    is_public: boolean | null
    access_code: string | null
    start_time: Date | null
    end_time: Date | null
    shuffle_questions: boolean | null
    shuffle_answers: boolean | null
    show_result_after_submit: boolean | null
    max_attempts: number | null
    subject_id: string | null
    created_by_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ExamsCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    description: number
    duration: number
    total_score: number
    status: number
    is_public: number
    access_code: number
    start_time: number
    end_time: number
    shuffle_questions: number
    shuffle_answers: number
    show_result_after_submit: number
    max_attempts: number
    subject_id: number
    created_by_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ExamsAvgAggregateInputType = {
    duration?: true
    total_score?: true
    max_attempts?: true
  }

  export type ExamsSumAggregateInputType = {
    duration?: true
    total_score?: true
    max_attempts?: true
  }

  export type ExamsMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    duration?: true
    total_score?: true
    status?: true
    is_public?: true
    access_code?: true
    start_time?: true
    end_time?: true
    shuffle_questions?: true
    shuffle_answers?: true
    show_result_after_submit?: true
    max_attempts?: true
    subject_id?: true
    created_by_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ExamsMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    duration?: true
    total_score?: true
    status?: true
    is_public?: true
    access_code?: true
    start_time?: true
    end_time?: true
    shuffle_questions?: true
    shuffle_answers?: true
    show_result_after_submit?: true
    max_attempts?: true
    subject_id?: true
    created_by_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ExamsCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    duration?: true
    total_score?: true
    status?: true
    is_public?: true
    access_code?: true
    start_time?: true
    end_time?: true
    shuffle_questions?: true
    shuffle_answers?: true
    show_result_after_submit?: true
    max_attempts?: true
    subject_id?: true
    created_by_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ExamsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exams to aggregate.
     */
    where?: examsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exams to fetch.
     */
    orderBy?: examsOrderByWithRelationInput | examsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: examsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned exams
    **/
    _count?: true | ExamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamsMaxAggregateInputType
  }

  export type GetExamsAggregateType<T extends ExamsAggregateArgs> = {
        [P in keyof T & keyof AggregateExams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExams[P]>
      : GetScalarType<T[P], AggregateExams[P]>
  }




  export type examsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: examsWhereInput
    orderBy?: examsOrderByWithAggregationInput | examsOrderByWithAggregationInput[]
    by: ExamsScalarFieldEnum[] | ExamsScalarFieldEnum
    having?: examsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamsCountAggregateInputType | true
    _avg?: ExamsAvgAggregateInputType
    _sum?: ExamsSumAggregateInputType
    _min?: ExamsMinAggregateInputType
    _max?: ExamsMaxAggregateInputType
  }

  export type ExamsGroupByOutputType = {
    id: string
    title: string
    slug: string
    description: string | null
    duration: number
    total_score: number | null
    status: $Enums.exam_status_enum | null
    is_public: boolean | null
    access_code: string | null
    start_time: Date | null
    end_time: Date | null
    shuffle_questions: boolean | null
    shuffle_answers: boolean | null
    show_result_after_submit: boolean | null
    max_attempts: number | null
    subject_id: string
    created_by_id: string
    created_at: Date | null
    updated_at: Date | null
    _count: ExamsCountAggregateOutputType | null
    _avg: ExamsAvgAggregateOutputType | null
    _sum: ExamsSumAggregateOutputType | null
    _min: ExamsMinAggregateOutputType | null
    _max: ExamsMaxAggregateOutputType | null
  }

  type GetExamsGroupByPayload<T extends examsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamsGroupByOutputType[P]>
            : GetScalarType<T[P], ExamsGroupByOutputType[P]>
        }
      >
    >


  export type examsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    duration?: boolean
    total_score?: boolean
    status?: boolean
    is_public?: boolean
    access_code?: boolean
    start_time?: boolean
    end_time?: boolean
    shuffle_questions?: boolean
    shuffle_answers?: boolean
    show_result_after_submit?: boolean
    max_attempts?: boolean
    subject_id?: boolean
    created_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    attempts?: boolean | exams$attemptsArgs<ExtArgs>
    exam_questions?: boolean | exams$exam_questionsArgs<ExtArgs>
    exam_classes?: boolean | exams$exam_classesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    subjects?: boolean | subjectsDefaultArgs<ExtArgs>
    _count?: boolean | ExamsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exams"]>



  export type examsSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    duration?: boolean
    total_score?: boolean
    status?: boolean
    is_public?: boolean
    access_code?: boolean
    start_time?: boolean
    end_time?: boolean
    shuffle_questions?: boolean
    shuffle_answers?: boolean
    show_result_after_submit?: boolean
    max_attempts?: boolean
    subject_id?: boolean
    created_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type examsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "description" | "duration" | "total_score" | "status" | "is_public" | "access_code" | "start_time" | "end_time" | "shuffle_questions" | "shuffle_answers" | "show_result_after_submit" | "max_attempts" | "subject_id" | "created_by_id" | "created_at" | "updated_at", ExtArgs["result"]["exams"]>
  export type examsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempts?: boolean | exams$attemptsArgs<ExtArgs>
    exam_questions?: boolean | exams$exam_questionsArgs<ExtArgs>
    exam_classes?: boolean | exams$exam_classesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    subjects?: boolean | subjectsDefaultArgs<ExtArgs>
    _count?: boolean | ExamsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $examsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "exams"
    objects: {
      attempts: Prisma.$attemptsPayload<ExtArgs>[]
      exam_questions: Prisma.$exam_questionsPayload<ExtArgs>[]
      exam_classes: Prisma.$exam_classesPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
      subjects: Prisma.$subjectsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      description: string | null
      duration: number
      total_score: number | null
      status: $Enums.exam_status_enum | null
      is_public: boolean | null
      access_code: string | null
      start_time: Date | null
      end_time: Date | null
      shuffle_questions: boolean | null
      shuffle_answers: boolean | null
      show_result_after_submit: boolean | null
      max_attempts: number | null
      subject_id: string
      created_by_id: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["exams"]>
    composites: {}
  }

  type examsGetPayload<S extends boolean | null | undefined | examsDefaultArgs> = $Result.GetResult<Prisma.$examsPayload, S>

  type examsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<examsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamsCountAggregateInputType | true
    }

  export interface examsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['exams'], meta: { name: 'exams' } }
    /**
     * Find zero or one Exams that matches the filter.
     * @param {examsFindUniqueArgs} args - Arguments to find a Exams
     * @example
     * // Get one Exams
     * const exams = await prisma.exams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends examsFindUniqueArgs>(args: SelectSubset<T, examsFindUniqueArgs<ExtArgs>>): Prisma__examsClient<$Result.GetResult<Prisma.$examsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exams that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {examsFindUniqueOrThrowArgs} args - Arguments to find a Exams
     * @example
     * // Get one Exams
     * const exams = await prisma.exams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends examsFindUniqueOrThrowArgs>(args: SelectSubset<T, examsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__examsClient<$Result.GetResult<Prisma.$examsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examsFindFirstArgs} args - Arguments to find a Exams
     * @example
     * // Get one Exams
     * const exams = await prisma.exams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends examsFindFirstArgs>(args?: SelectSubset<T, examsFindFirstArgs<ExtArgs>>): Prisma__examsClient<$Result.GetResult<Prisma.$examsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examsFindFirstOrThrowArgs} args - Arguments to find a Exams
     * @example
     * // Get one Exams
     * const exams = await prisma.exams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends examsFindFirstOrThrowArgs>(args?: SelectSubset<T, examsFindFirstOrThrowArgs<ExtArgs>>): Prisma__examsClient<$Result.GetResult<Prisma.$examsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exams
     * const exams = await prisma.exams.findMany()
     * 
     * // Get first 10 Exams
     * const exams = await prisma.exams.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examsWithIdOnly = await prisma.exams.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends examsFindManyArgs>(args?: SelectSubset<T, examsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$examsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exams.
     * @param {examsCreateArgs} args - Arguments to create a Exams.
     * @example
     * // Create one Exams
     * const Exams = await prisma.exams.create({
     *   data: {
     *     // ... data to create a Exams
     *   }
     * })
     * 
     */
    create<T extends examsCreateArgs>(args: SelectSubset<T, examsCreateArgs<ExtArgs>>): Prisma__examsClient<$Result.GetResult<Prisma.$examsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exams.
     * @param {examsCreateManyArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exams = await prisma.exams.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends examsCreateManyArgs>(args?: SelectSubset<T, examsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exams.
     * @param {examsDeleteArgs} args - Arguments to delete one Exams.
     * @example
     * // Delete one Exams
     * const Exams = await prisma.exams.delete({
     *   where: {
     *     // ... filter to delete one Exams
     *   }
     * })
     * 
     */
    delete<T extends examsDeleteArgs>(args: SelectSubset<T, examsDeleteArgs<ExtArgs>>): Prisma__examsClient<$Result.GetResult<Prisma.$examsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exams.
     * @param {examsUpdateArgs} args - Arguments to update one Exams.
     * @example
     * // Update one Exams
     * const exams = await prisma.exams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends examsUpdateArgs>(args: SelectSubset<T, examsUpdateArgs<ExtArgs>>): Prisma__examsClient<$Result.GetResult<Prisma.$examsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exams.
     * @param {examsDeleteManyArgs} args - Arguments to filter Exams to delete.
     * @example
     * // Delete a few Exams
     * const { count } = await prisma.exams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends examsDeleteManyArgs>(args?: SelectSubset<T, examsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exams
     * const exams = await prisma.exams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends examsUpdateManyArgs>(args: SelectSubset<T, examsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exams.
     * @param {examsUpsertArgs} args - Arguments to update or create a Exams.
     * @example
     * // Update or create a Exams
     * const exams = await prisma.exams.upsert({
     *   create: {
     *     // ... data to create a Exams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exams we want to update
     *   }
     * })
     */
    upsert<T extends examsUpsertArgs>(args: SelectSubset<T, examsUpsertArgs<ExtArgs>>): Prisma__examsClient<$Result.GetResult<Prisma.$examsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examsCountArgs} args - Arguments to filter Exams to count.
     * @example
     * // Count the number of Exams
     * const count = await prisma.exams.count({
     *   where: {
     *     // ... the filter for the Exams we want to count
     *   }
     * })
    **/
    count<T extends examsCountArgs>(
      args?: Subset<T, examsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExamsAggregateArgs>(args: Subset<T, ExamsAggregateArgs>): Prisma.PrismaPromise<GetExamsAggregateType<T>>

    /**
     * Group by Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends examsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: examsGroupByArgs['orderBy'] }
        : { orderBy?: examsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, examsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the exams model
   */
  readonly fields: examsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for exams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__examsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attempts<T extends exams$attemptsArgs<ExtArgs> = {}>(args?: Subset<T, exams$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attemptsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exam_questions<T extends exams$exam_questionsArgs<ExtArgs> = {}>(args?: Subset<T, exams$exam_questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exam_questionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exam_classes<T extends exams$exam_classesArgs<ExtArgs> = {}>(args?: Subset<T, exams$exam_classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exam_classesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subjects<T extends subjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, subjectsDefaultArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the exams model
   */
  interface examsFieldRefs {
    readonly id: FieldRef<"exams", 'String'>
    readonly title: FieldRef<"exams", 'String'>
    readonly slug: FieldRef<"exams", 'String'>
    readonly description: FieldRef<"exams", 'String'>
    readonly duration: FieldRef<"exams", 'Int'>
    readonly total_score: FieldRef<"exams", 'Float'>
    readonly status: FieldRef<"exams", 'exam_status_enum'>
    readonly is_public: FieldRef<"exams", 'Boolean'>
    readonly access_code: FieldRef<"exams", 'String'>
    readonly start_time: FieldRef<"exams", 'DateTime'>
    readonly end_time: FieldRef<"exams", 'DateTime'>
    readonly shuffle_questions: FieldRef<"exams", 'Boolean'>
    readonly shuffle_answers: FieldRef<"exams", 'Boolean'>
    readonly show_result_after_submit: FieldRef<"exams", 'Boolean'>
    readonly max_attempts: FieldRef<"exams", 'Int'>
    readonly subject_id: FieldRef<"exams", 'String'>
    readonly created_by_id: FieldRef<"exams", 'String'>
    readonly created_at: FieldRef<"exams", 'DateTime'>
    readonly updated_at: FieldRef<"exams", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * exams findUnique
   */
  export type examsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exams
     */
    select?: examsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exams
     */
    omit?: examsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examsInclude<ExtArgs> | null
    /**
     * Filter, which exams to fetch.
     */
    where: examsWhereUniqueInput
  }

  /**
   * exams findUniqueOrThrow
   */
  export type examsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exams
     */
    select?: examsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exams
     */
    omit?: examsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examsInclude<ExtArgs> | null
    /**
     * Filter, which exams to fetch.
     */
    where: examsWhereUniqueInput
  }

  /**
   * exams findFirst
   */
  export type examsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exams
     */
    select?: examsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exams
     */
    omit?: examsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examsInclude<ExtArgs> | null
    /**
     * Filter, which exams to fetch.
     */
    where?: examsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exams to fetch.
     */
    orderBy?: examsOrderByWithRelationInput | examsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exams.
     */
    cursor?: examsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exams.
     */
    distinct?: ExamsScalarFieldEnum | ExamsScalarFieldEnum[]
  }

  /**
   * exams findFirstOrThrow
   */
  export type examsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exams
     */
    select?: examsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exams
     */
    omit?: examsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examsInclude<ExtArgs> | null
    /**
     * Filter, which exams to fetch.
     */
    where?: examsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exams to fetch.
     */
    orderBy?: examsOrderByWithRelationInput | examsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exams.
     */
    cursor?: examsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exams.
     */
    distinct?: ExamsScalarFieldEnum | ExamsScalarFieldEnum[]
  }

  /**
   * exams findMany
   */
  export type examsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exams
     */
    select?: examsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exams
     */
    omit?: examsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examsInclude<ExtArgs> | null
    /**
     * Filter, which exams to fetch.
     */
    where?: examsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exams to fetch.
     */
    orderBy?: examsOrderByWithRelationInput | examsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing exams.
     */
    cursor?: examsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exams.
     */
    skip?: number
    distinct?: ExamsScalarFieldEnum | ExamsScalarFieldEnum[]
  }

  /**
   * exams create
   */
  export type examsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exams
     */
    select?: examsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exams
     */
    omit?: examsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examsInclude<ExtArgs> | null
    /**
     * The data needed to create a exams.
     */
    data: XOR<examsCreateInput, examsUncheckedCreateInput>
  }

  /**
   * exams createMany
   */
  export type examsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many exams.
     */
    data: examsCreateManyInput | examsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * exams update
   */
  export type examsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exams
     */
    select?: examsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exams
     */
    omit?: examsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examsInclude<ExtArgs> | null
    /**
     * The data needed to update a exams.
     */
    data: XOR<examsUpdateInput, examsUncheckedUpdateInput>
    /**
     * Choose, which exams to update.
     */
    where: examsWhereUniqueInput
  }

  /**
   * exams updateMany
   */
  export type examsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update exams.
     */
    data: XOR<examsUpdateManyMutationInput, examsUncheckedUpdateManyInput>
    /**
     * Filter which exams to update
     */
    where?: examsWhereInput
    /**
     * Limit how many exams to update.
     */
    limit?: number
  }

  /**
   * exams upsert
   */
  export type examsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exams
     */
    select?: examsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exams
     */
    omit?: examsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examsInclude<ExtArgs> | null
    /**
     * The filter to search for the exams to update in case it exists.
     */
    where: examsWhereUniqueInput
    /**
     * In case the exams found by the `where` argument doesn't exist, create a new exams with this data.
     */
    create: XOR<examsCreateInput, examsUncheckedCreateInput>
    /**
     * In case the exams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<examsUpdateInput, examsUncheckedUpdateInput>
  }

  /**
   * exams delete
   */
  export type examsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exams
     */
    select?: examsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exams
     */
    omit?: examsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examsInclude<ExtArgs> | null
    /**
     * Filter which exams to delete.
     */
    where: examsWhereUniqueInput
  }

  /**
   * exams deleteMany
   */
  export type examsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exams to delete
     */
    where?: examsWhereInput
    /**
     * Limit how many exams to delete.
     */
    limit?: number
  }

  /**
   * exams.attempts
   */
  export type exams$attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attempts
     */
    select?: attemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attempts
     */
    omit?: attemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attemptsInclude<ExtArgs> | null
    where?: attemptsWhereInput
    orderBy?: attemptsOrderByWithRelationInput | attemptsOrderByWithRelationInput[]
    cursor?: attemptsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttemptsScalarFieldEnum | AttemptsScalarFieldEnum[]
  }

  /**
   * exams.exam_questions
   */
  export type exams$exam_questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_questions
     */
    select?: exam_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_questions
     */
    omit?: exam_questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_questionsInclude<ExtArgs> | null
    where?: exam_questionsWhereInput
    orderBy?: exam_questionsOrderByWithRelationInput | exam_questionsOrderByWithRelationInput[]
    cursor?: exam_questionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Exam_questionsScalarFieldEnum | Exam_questionsScalarFieldEnum[]
  }

  /**
   * exams.exam_classes
   */
  export type exams$exam_classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_classes
     */
    select?: exam_classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_classes
     */
    omit?: exam_classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_classesInclude<ExtArgs> | null
    where?: exam_classesWhereInput
    orderBy?: exam_classesOrderByWithRelationInput | exam_classesOrderByWithRelationInput[]
    cursor?: exam_classesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Exam_classesScalarFieldEnum | Exam_classesScalarFieldEnum[]
  }

  /**
   * exams without action
   */
  export type examsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exams
     */
    select?: examsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exams
     */
    omit?: examsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examsInclude<ExtArgs> | null
  }


  /**
   * Model exam_classes
   */

  export type AggregateExam_classes = {
    _count: Exam_classesCountAggregateOutputType | null
    _min: Exam_classesMinAggregateOutputType | null
    _max: Exam_classesMaxAggregateOutputType | null
  }

  export type Exam_classesMinAggregateOutputType = {
    exam_id: string | null
    class_id: string | null
    created_at: Date | null
  }

  export type Exam_classesMaxAggregateOutputType = {
    exam_id: string | null
    class_id: string | null
    created_at: Date | null
  }

  export type Exam_classesCountAggregateOutputType = {
    exam_id: number
    class_id: number
    created_at: number
    _all: number
  }


  export type Exam_classesMinAggregateInputType = {
    exam_id?: true
    class_id?: true
    created_at?: true
  }

  export type Exam_classesMaxAggregateInputType = {
    exam_id?: true
    class_id?: true
    created_at?: true
  }

  export type Exam_classesCountAggregateInputType = {
    exam_id?: true
    class_id?: true
    created_at?: true
    _all?: true
  }

  export type Exam_classesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exam_classes to aggregate.
     */
    where?: exam_classesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exam_classes to fetch.
     */
    orderBy?: exam_classesOrderByWithRelationInput | exam_classesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: exam_classesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exam_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exam_classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned exam_classes
    **/
    _count?: true | Exam_classesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Exam_classesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Exam_classesMaxAggregateInputType
  }

  export type GetExam_classesAggregateType<T extends Exam_classesAggregateArgs> = {
        [P in keyof T & keyof AggregateExam_classes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExam_classes[P]>
      : GetScalarType<T[P], AggregateExam_classes[P]>
  }




  export type exam_classesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exam_classesWhereInput
    orderBy?: exam_classesOrderByWithAggregationInput | exam_classesOrderByWithAggregationInput[]
    by: Exam_classesScalarFieldEnum[] | Exam_classesScalarFieldEnum
    having?: exam_classesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Exam_classesCountAggregateInputType | true
    _min?: Exam_classesMinAggregateInputType
    _max?: Exam_classesMaxAggregateInputType
  }

  export type Exam_classesGroupByOutputType = {
    exam_id: string
    class_id: string
    created_at: Date | null
    _count: Exam_classesCountAggregateOutputType | null
    _min: Exam_classesMinAggregateOutputType | null
    _max: Exam_classesMaxAggregateOutputType | null
  }

  type GetExam_classesGroupByPayload<T extends exam_classesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Exam_classesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Exam_classesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Exam_classesGroupByOutputType[P]>
            : GetScalarType<T[P], Exam_classesGroupByOutputType[P]>
        }
      >
    >


  export type exam_classesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    exam_id?: boolean
    class_id?: boolean
    created_at?: boolean
    exams?: boolean | examsDefaultArgs<ExtArgs>
    classes?: boolean | classesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam_classes"]>



  export type exam_classesSelectScalar = {
    exam_id?: boolean
    class_id?: boolean
    created_at?: boolean
  }

  export type exam_classesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"exam_id" | "class_id" | "created_at", ExtArgs["result"]["exam_classes"]>
  export type exam_classesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exams?: boolean | examsDefaultArgs<ExtArgs>
    classes?: boolean | classesDefaultArgs<ExtArgs>
  }

  export type $exam_classesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "exam_classes"
    objects: {
      exams: Prisma.$examsPayload<ExtArgs>
      classes: Prisma.$classesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      exam_id: string
      class_id: string
      created_at: Date | null
    }, ExtArgs["result"]["exam_classes"]>
    composites: {}
  }

  type exam_classesGetPayload<S extends boolean | null | undefined | exam_classesDefaultArgs> = $Result.GetResult<Prisma.$exam_classesPayload, S>

  type exam_classesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<exam_classesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Exam_classesCountAggregateInputType | true
    }

  export interface exam_classesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['exam_classes'], meta: { name: 'exam_classes' } }
    /**
     * Find zero or one Exam_classes that matches the filter.
     * @param {exam_classesFindUniqueArgs} args - Arguments to find a Exam_classes
     * @example
     * // Get one Exam_classes
     * const exam_classes = await prisma.exam_classes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends exam_classesFindUniqueArgs>(args: SelectSubset<T, exam_classesFindUniqueArgs<ExtArgs>>): Prisma__exam_classesClient<$Result.GetResult<Prisma.$exam_classesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exam_classes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {exam_classesFindUniqueOrThrowArgs} args - Arguments to find a Exam_classes
     * @example
     * // Get one Exam_classes
     * const exam_classes = await prisma.exam_classes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends exam_classesFindUniqueOrThrowArgs>(args: SelectSubset<T, exam_classesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__exam_classesClient<$Result.GetResult<Prisma.$exam_classesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam_classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exam_classesFindFirstArgs} args - Arguments to find a Exam_classes
     * @example
     * // Get one Exam_classes
     * const exam_classes = await prisma.exam_classes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends exam_classesFindFirstArgs>(args?: SelectSubset<T, exam_classesFindFirstArgs<ExtArgs>>): Prisma__exam_classesClient<$Result.GetResult<Prisma.$exam_classesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam_classes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exam_classesFindFirstOrThrowArgs} args - Arguments to find a Exam_classes
     * @example
     * // Get one Exam_classes
     * const exam_classes = await prisma.exam_classes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends exam_classesFindFirstOrThrowArgs>(args?: SelectSubset<T, exam_classesFindFirstOrThrowArgs<ExtArgs>>): Prisma__exam_classesClient<$Result.GetResult<Prisma.$exam_classesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exam_classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exam_classesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exam_classes
     * const exam_classes = await prisma.exam_classes.findMany()
     * 
     * // Get first 10 Exam_classes
     * const exam_classes = await prisma.exam_classes.findMany({ take: 10 })
     * 
     * // Only select the `exam_id`
     * const exam_classesWithExam_idOnly = await prisma.exam_classes.findMany({ select: { exam_id: true } })
     * 
     */
    findMany<T extends exam_classesFindManyArgs>(args?: SelectSubset<T, exam_classesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exam_classesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exam_classes.
     * @param {exam_classesCreateArgs} args - Arguments to create a Exam_classes.
     * @example
     * // Create one Exam_classes
     * const Exam_classes = await prisma.exam_classes.create({
     *   data: {
     *     // ... data to create a Exam_classes
     *   }
     * })
     * 
     */
    create<T extends exam_classesCreateArgs>(args: SelectSubset<T, exam_classesCreateArgs<ExtArgs>>): Prisma__exam_classesClient<$Result.GetResult<Prisma.$exam_classesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exam_classes.
     * @param {exam_classesCreateManyArgs} args - Arguments to create many Exam_classes.
     * @example
     * // Create many Exam_classes
     * const exam_classes = await prisma.exam_classes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends exam_classesCreateManyArgs>(args?: SelectSubset<T, exam_classesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exam_classes.
     * @param {exam_classesDeleteArgs} args - Arguments to delete one Exam_classes.
     * @example
     * // Delete one Exam_classes
     * const Exam_classes = await prisma.exam_classes.delete({
     *   where: {
     *     // ... filter to delete one Exam_classes
     *   }
     * })
     * 
     */
    delete<T extends exam_classesDeleteArgs>(args: SelectSubset<T, exam_classesDeleteArgs<ExtArgs>>): Prisma__exam_classesClient<$Result.GetResult<Prisma.$exam_classesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exam_classes.
     * @param {exam_classesUpdateArgs} args - Arguments to update one Exam_classes.
     * @example
     * // Update one Exam_classes
     * const exam_classes = await prisma.exam_classes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends exam_classesUpdateArgs>(args: SelectSubset<T, exam_classesUpdateArgs<ExtArgs>>): Prisma__exam_classesClient<$Result.GetResult<Prisma.$exam_classesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exam_classes.
     * @param {exam_classesDeleteManyArgs} args - Arguments to filter Exam_classes to delete.
     * @example
     * // Delete a few Exam_classes
     * const { count } = await prisma.exam_classes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends exam_classesDeleteManyArgs>(args?: SelectSubset<T, exam_classesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exam_classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exam_classesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exam_classes
     * const exam_classes = await prisma.exam_classes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends exam_classesUpdateManyArgs>(args: SelectSubset<T, exam_classesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exam_classes.
     * @param {exam_classesUpsertArgs} args - Arguments to update or create a Exam_classes.
     * @example
     * // Update or create a Exam_classes
     * const exam_classes = await prisma.exam_classes.upsert({
     *   create: {
     *     // ... data to create a Exam_classes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exam_classes we want to update
     *   }
     * })
     */
    upsert<T extends exam_classesUpsertArgs>(args: SelectSubset<T, exam_classesUpsertArgs<ExtArgs>>): Prisma__exam_classesClient<$Result.GetResult<Prisma.$exam_classesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exam_classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exam_classesCountArgs} args - Arguments to filter Exam_classes to count.
     * @example
     * // Count the number of Exam_classes
     * const count = await prisma.exam_classes.count({
     *   where: {
     *     // ... the filter for the Exam_classes we want to count
     *   }
     * })
    **/
    count<T extends exam_classesCountArgs>(
      args?: Subset<T, exam_classesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Exam_classesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exam_classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Exam_classesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Exam_classesAggregateArgs>(args: Subset<T, Exam_classesAggregateArgs>): Prisma.PrismaPromise<GetExam_classesAggregateType<T>>

    /**
     * Group by Exam_classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exam_classesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends exam_classesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: exam_classesGroupByArgs['orderBy'] }
        : { orderBy?: exam_classesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, exam_classesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExam_classesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the exam_classes model
   */
  readonly fields: exam_classesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for exam_classes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__exam_classesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exams<T extends examsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, examsDefaultArgs<ExtArgs>>): Prisma__examsClient<$Result.GetResult<Prisma.$examsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    classes<T extends classesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, classesDefaultArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the exam_classes model
   */
  interface exam_classesFieldRefs {
    readonly exam_id: FieldRef<"exam_classes", 'String'>
    readonly class_id: FieldRef<"exam_classes", 'String'>
    readonly created_at: FieldRef<"exam_classes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * exam_classes findUnique
   */
  export type exam_classesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_classes
     */
    select?: exam_classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_classes
     */
    omit?: exam_classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_classesInclude<ExtArgs> | null
    /**
     * Filter, which exam_classes to fetch.
     */
    where: exam_classesWhereUniqueInput
  }

  /**
   * exam_classes findUniqueOrThrow
   */
  export type exam_classesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_classes
     */
    select?: exam_classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_classes
     */
    omit?: exam_classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_classesInclude<ExtArgs> | null
    /**
     * Filter, which exam_classes to fetch.
     */
    where: exam_classesWhereUniqueInput
  }

  /**
   * exam_classes findFirst
   */
  export type exam_classesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_classes
     */
    select?: exam_classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_classes
     */
    omit?: exam_classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_classesInclude<ExtArgs> | null
    /**
     * Filter, which exam_classes to fetch.
     */
    where?: exam_classesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exam_classes to fetch.
     */
    orderBy?: exam_classesOrderByWithRelationInput | exam_classesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exam_classes.
     */
    cursor?: exam_classesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exam_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exam_classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exam_classes.
     */
    distinct?: Exam_classesScalarFieldEnum | Exam_classesScalarFieldEnum[]
  }

  /**
   * exam_classes findFirstOrThrow
   */
  export type exam_classesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_classes
     */
    select?: exam_classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_classes
     */
    omit?: exam_classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_classesInclude<ExtArgs> | null
    /**
     * Filter, which exam_classes to fetch.
     */
    where?: exam_classesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exam_classes to fetch.
     */
    orderBy?: exam_classesOrderByWithRelationInput | exam_classesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exam_classes.
     */
    cursor?: exam_classesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exam_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exam_classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exam_classes.
     */
    distinct?: Exam_classesScalarFieldEnum | Exam_classesScalarFieldEnum[]
  }

  /**
   * exam_classes findMany
   */
  export type exam_classesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_classes
     */
    select?: exam_classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_classes
     */
    omit?: exam_classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_classesInclude<ExtArgs> | null
    /**
     * Filter, which exam_classes to fetch.
     */
    where?: exam_classesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exam_classes to fetch.
     */
    orderBy?: exam_classesOrderByWithRelationInput | exam_classesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing exam_classes.
     */
    cursor?: exam_classesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exam_classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exam_classes.
     */
    skip?: number
    distinct?: Exam_classesScalarFieldEnum | Exam_classesScalarFieldEnum[]
  }

  /**
   * exam_classes create
   */
  export type exam_classesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_classes
     */
    select?: exam_classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_classes
     */
    omit?: exam_classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_classesInclude<ExtArgs> | null
    /**
     * The data needed to create a exam_classes.
     */
    data: XOR<exam_classesCreateInput, exam_classesUncheckedCreateInput>
  }

  /**
   * exam_classes createMany
   */
  export type exam_classesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many exam_classes.
     */
    data: exam_classesCreateManyInput | exam_classesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * exam_classes update
   */
  export type exam_classesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_classes
     */
    select?: exam_classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_classes
     */
    omit?: exam_classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_classesInclude<ExtArgs> | null
    /**
     * The data needed to update a exam_classes.
     */
    data: XOR<exam_classesUpdateInput, exam_classesUncheckedUpdateInput>
    /**
     * Choose, which exam_classes to update.
     */
    where: exam_classesWhereUniqueInput
  }

  /**
   * exam_classes updateMany
   */
  export type exam_classesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update exam_classes.
     */
    data: XOR<exam_classesUpdateManyMutationInput, exam_classesUncheckedUpdateManyInput>
    /**
     * Filter which exam_classes to update
     */
    where?: exam_classesWhereInput
    /**
     * Limit how many exam_classes to update.
     */
    limit?: number
  }

  /**
   * exam_classes upsert
   */
  export type exam_classesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_classes
     */
    select?: exam_classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_classes
     */
    omit?: exam_classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_classesInclude<ExtArgs> | null
    /**
     * The filter to search for the exam_classes to update in case it exists.
     */
    where: exam_classesWhereUniqueInput
    /**
     * In case the exam_classes found by the `where` argument doesn't exist, create a new exam_classes with this data.
     */
    create: XOR<exam_classesCreateInput, exam_classesUncheckedCreateInput>
    /**
     * In case the exam_classes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<exam_classesUpdateInput, exam_classesUncheckedUpdateInput>
  }

  /**
   * exam_classes delete
   */
  export type exam_classesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_classes
     */
    select?: exam_classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_classes
     */
    omit?: exam_classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_classesInclude<ExtArgs> | null
    /**
     * Filter which exam_classes to delete.
     */
    where: exam_classesWhereUniqueInput
  }

  /**
   * exam_classes deleteMany
   */
  export type exam_classesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exam_classes to delete
     */
    where?: exam_classesWhereInput
    /**
     * Limit how many exam_classes to delete.
     */
    limit?: number
  }

  /**
   * exam_classes without action
   */
  export type exam_classesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_classes
     */
    select?: exam_classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_classes
     */
    omit?: exam_classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_classesInclude<ExtArgs> | null
  }


  /**
   * Model questions
   */

  export type AggregateQuestions = {
    _count: QuestionsCountAggregateOutputType | null
    _avg: QuestionsAvgAggregateOutputType | null
    _sum: QuestionsSumAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  export type QuestionsAvgAggregateOutputType = {
    level: number | null
  }

  export type QuestionsSumAggregateOutputType = {
    level: number | null
  }

  export type QuestionsMinAggregateOutputType = {
    id: string | null
    content: string | null
    explanation: string | null
    image_url: string | null
    level: number | null
    type: $Enums.question_type_enum | null
    subject_id: string | null
    created_by_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type QuestionsMaxAggregateOutputType = {
    id: string | null
    content: string | null
    explanation: string | null
    image_url: string | null
    level: number | null
    type: $Enums.question_type_enum | null
    subject_id: string | null
    created_by_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type QuestionsCountAggregateOutputType = {
    id: number
    content: number
    explanation: number
    image_url: number
    level: number
    type: number
    subject_id: number
    created_by_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type QuestionsAvgAggregateInputType = {
    level?: true
  }

  export type QuestionsSumAggregateInputType = {
    level?: true
  }

  export type QuestionsMinAggregateInputType = {
    id?: true
    content?: true
    explanation?: true
    image_url?: true
    level?: true
    type?: true
    subject_id?: true
    created_by_id?: true
    created_at?: true
    updated_at?: true
  }

  export type QuestionsMaxAggregateInputType = {
    id?: true
    content?: true
    explanation?: true
    image_url?: true
    level?: true
    type?: true
    subject_id?: true
    created_by_id?: true
    created_at?: true
    updated_at?: true
  }

  export type QuestionsCountAggregateInputType = {
    id?: true
    content?: true
    explanation?: true
    image_url?: true
    level?: true
    type?: true
    subject_id?: true
    created_by_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type QuestionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which questions to aggregate.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned questions
    **/
    _count?: true | QuestionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionsMaxAggregateInputType
  }

  export type GetQuestionsAggregateType<T extends QuestionsAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestions[P]>
      : GetScalarType<T[P], AggregateQuestions[P]>
  }




  export type questionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionsWhereInput
    orderBy?: questionsOrderByWithAggregationInput | questionsOrderByWithAggregationInput[]
    by: QuestionsScalarFieldEnum[] | QuestionsScalarFieldEnum
    having?: questionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionsCountAggregateInputType | true
    _avg?: QuestionsAvgAggregateInputType
    _sum?: QuestionsSumAggregateInputType
    _min?: QuestionsMinAggregateInputType
    _max?: QuestionsMaxAggregateInputType
  }

  export type QuestionsGroupByOutputType = {
    id: string
    content: string
    explanation: string | null
    image_url: string | null
    level: number | null
    type: $Enums.question_type_enum | null
    subject_id: string
    created_by_id: string
    created_at: Date | null
    updated_at: Date | null
    _count: QuestionsCountAggregateOutputType | null
    _avg: QuestionsAvgAggregateOutputType | null
    _sum: QuestionsSumAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  type GetQuestionsGroupByPayload<T extends questionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
        }
      >
    >


  export type questionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    explanation?: boolean
    image_url?: boolean
    level?: boolean
    type?: boolean
    subject_id?: boolean
    created_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    answers?: boolean | questions$answersArgs<ExtArgs>
    exam_questions?: boolean | questions$exam_questionsArgs<ExtArgs>
    student_answers?: boolean | questions$student_answersArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    subjects?: boolean | subjectsDefaultArgs<ExtArgs>
    _count?: boolean | QuestionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questions"]>



  export type questionsSelectScalar = {
    id?: boolean
    content?: boolean
    explanation?: boolean
    image_url?: boolean
    level?: boolean
    type?: boolean
    subject_id?: boolean
    created_by_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type questionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "explanation" | "image_url" | "level" | "type" | "subject_id" | "created_by_id" | "created_at" | "updated_at", ExtArgs["result"]["questions"]>
  export type questionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | questions$answersArgs<ExtArgs>
    exam_questions?: boolean | questions$exam_questionsArgs<ExtArgs>
    student_answers?: boolean | questions$student_answersArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    subjects?: boolean | subjectsDefaultArgs<ExtArgs>
    _count?: boolean | QuestionsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $questionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "questions"
    objects: {
      answers: Prisma.$answersPayload<ExtArgs>[]
      exam_questions: Prisma.$exam_questionsPayload<ExtArgs>[]
      student_answers: Prisma.$student_answersPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
      subjects: Prisma.$subjectsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      explanation: string | null
      image_url: string | null
      level: number | null
      type: $Enums.question_type_enum | null
      subject_id: string
      created_by_id: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["questions"]>
    composites: {}
  }

  type questionsGetPayload<S extends boolean | null | undefined | questionsDefaultArgs> = $Result.GetResult<Prisma.$questionsPayload, S>

  type questionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<questionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionsCountAggregateInputType | true
    }

  export interface questionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['questions'], meta: { name: 'questions' } }
    /**
     * Find zero or one Questions that matches the filter.
     * @param {questionsFindUniqueArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends questionsFindUniqueArgs>(args: SelectSubset<T, questionsFindUniqueArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Questions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {questionsFindUniqueOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends questionsFindUniqueOrThrowArgs>(args: SelectSubset<T, questionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsFindFirstArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends questionsFindFirstArgs>(args?: SelectSubset<T, questionsFindFirstArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsFindFirstOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends questionsFindFirstOrThrowArgs>(args?: SelectSubset<T, questionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.questions.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.questions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionsWithIdOnly = await prisma.questions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends questionsFindManyArgs>(args?: SelectSubset<T, questionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Questions.
     * @param {questionsCreateArgs} args - Arguments to create a Questions.
     * @example
     * // Create one Questions
     * const Questions = await prisma.questions.create({
     *   data: {
     *     // ... data to create a Questions
     *   }
     * })
     * 
     */
    create<T extends questionsCreateArgs>(args: SelectSubset<T, questionsCreateArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {questionsCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const questions = await prisma.questions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends questionsCreateManyArgs>(args?: SelectSubset<T, questionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Questions.
     * @param {questionsDeleteArgs} args - Arguments to delete one Questions.
     * @example
     * // Delete one Questions
     * const Questions = await prisma.questions.delete({
     *   where: {
     *     // ... filter to delete one Questions
     *   }
     * })
     * 
     */
    delete<T extends questionsDeleteArgs>(args: SelectSubset<T, questionsDeleteArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Questions.
     * @param {questionsUpdateArgs} args - Arguments to update one Questions.
     * @example
     * // Update one Questions
     * const questions = await prisma.questions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends questionsUpdateArgs>(args: SelectSubset<T, questionsUpdateArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {questionsDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.questions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends questionsDeleteManyArgs>(args?: SelectSubset<T, questionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const questions = await prisma.questions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends questionsUpdateManyArgs>(args: SelectSubset<T, questionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Questions.
     * @param {questionsUpsertArgs} args - Arguments to update or create a Questions.
     * @example
     * // Update or create a Questions
     * const questions = await prisma.questions.upsert({
     *   create: {
     *     // ... data to create a Questions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Questions we want to update
     *   }
     * })
     */
    upsert<T extends questionsUpsertArgs>(args: SelectSubset<T, questionsUpsertArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.questions.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends questionsCountArgs>(
      args?: Subset<T, questionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionsAggregateArgs>(args: Subset<T, QuestionsAggregateArgs>): Prisma.PrismaPromise<GetQuestionsAggregateType<T>>

    /**
     * Group by Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends questionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: questionsGroupByArgs['orderBy'] }
        : { orderBy?: questionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, questionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the questions model
   */
  readonly fields: questionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for questions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__questionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answers<T extends questions$answersArgs<ExtArgs> = {}>(args?: Subset<T, questions$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exam_questions<T extends questions$exam_questionsArgs<ExtArgs> = {}>(args?: Subset<T, questions$exam_questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exam_questionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    student_answers<T extends questions$student_answersArgs<ExtArgs> = {}>(args?: Subset<T, questions$student_answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_answersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subjects<T extends subjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, subjectsDefaultArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the questions model
   */
  interface questionsFieldRefs {
    readonly id: FieldRef<"questions", 'String'>
    readonly content: FieldRef<"questions", 'String'>
    readonly explanation: FieldRef<"questions", 'String'>
    readonly image_url: FieldRef<"questions", 'String'>
    readonly level: FieldRef<"questions", 'Int'>
    readonly type: FieldRef<"questions", 'question_type_enum'>
    readonly subject_id: FieldRef<"questions", 'String'>
    readonly created_by_id: FieldRef<"questions", 'String'>
    readonly created_at: FieldRef<"questions", 'DateTime'>
    readonly updated_at: FieldRef<"questions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * questions findUnique
   */
  export type questionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions findUniqueOrThrow
   */
  export type questionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions findFirst
   */
  export type questionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questions.
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * questions findFirstOrThrow
   */
  export type questionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questions.
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * questions findMany
   */
  export type questionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing questions.
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * questions create
   */
  export type questionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * The data needed to create a questions.
     */
    data: XOR<questionsCreateInput, questionsUncheckedCreateInput>
  }

  /**
   * questions createMany
   */
  export type questionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many questions.
     */
    data: questionsCreateManyInput | questionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * questions update
   */
  export type questionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * The data needed to update a questions.
     */
    data: XOR<questionsUpdateInput, questionsUncheckedUpdateInput>
    /**
     * Choose, which questions to update.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions updateMany
   */
  export type questionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update questions.
     */
    data: XOR<questionsUpdateManyMutationInput, questionsUncheckedUpdateManyInput>
    /**
     * Filter which questions to update
     */
    where?: questionsWhereInput
    /**
     * Limit how many questions to update.
     */
    limit?: number
  }

  /**
   * questions upsert
   */
  export type questionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * The filter to search for the questions to update in case it exists.
     */
    where: questionsWhereUniqueInput
    /**
     * In case the questions found by the `where` argument doesn't exist, create a new questions with this data.
     */
    create: XOR<questionsCreateInput, questionsUncheckedCreateInput>
    /**
     * In case the questions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<questionsUpdateInput, questionsUncheckedUpdateInput>
  }

  /**
   * questions delete
   */
  export type questionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    /**
     * Filter which questions to delete.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions deleteMany
   */
  export type questionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which questions to delete
     */
    where?: questionsWhereInput
    /**
     * Limit how many questions to delete.
     */
    limit?: number
  }

  /**
   * questions.answers
   */
  export type questions$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    where?: answersWhereInput
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    cursor?: answersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * questions.exam_questions
   */
  export type questions$exam_questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_questions
     */
    select?: exam_questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_questions
     */
    omit?: exam_questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_questionsInclude<ExtArgs> | null
    where?: exam_questionsWhereInput
    orderBy?: exam_questionsOrderByWithRelationInput | exam_questionsOrderByWithRelationInput[]
    cursor?: exam_questionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Exam_questionsScalarFieldEnum | Exam_questionsScalarFieldEnum[]
  }

  /**
   * questions.student_answers
   */
  export type questions$student_answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_answers
     */
    select?: student_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_answers
     */
    omit?: student_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_answersInclude<ExtArgs> | null
    where?: student_answersWhereInput
    orderBy?: student_answersOrderByWithRelationInput | student_answersOrderByWithRelationInput[]
    cursor?: student_answersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Student_answersScalarFieldEnum | Student_answersScalarFieldEnum[]
  }

  /**
   * questions without action
   */
  export type questionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
  }


  /**
   * Model student_answers
   */

  export type AggregateStudent_answers = {
    _count: Student_answersCountAggregateOutputType | null
    _min: Student_answersMinAggregateOutputType | null
    _max: Student_answersMaxAggregateOutputType | null
  }

  export type Student_answersMinAggregateOutputType = {
    id: string | null
    attempt_id: string | null
    question_id: string | null
    answer_id: string | null
    created_at: Date | null
  }

  export type Student_answersMaxAggregateOutputType = {
    id: string | null
    attempt_id: string | null
    question_id: string | null
    answer_id: string | null
    created_at: Date | null
  }

  export type Student_answersCountAggregateOutputType = {
    id: number
    attempt_id: number
    question_id: number
    answer_id: number
    created_at: number
    _all: number
  }


  export type Student_answersMinAggregateInputType = {
    id?: true
    attempt_id?: true
    question_id?: true
    answer_id?: true
    created_at?: true
  }

  export type Student_answersMaxAggregateInputType = {
    id?: true
    attempt_id?: true
    question_id?: true
    answer_id?: true
    created_at?: true
  }

  export type Student_answersCountAggregateInputType = {
    id?: true
    attempt_id?: true
    question_id?: true
    answer_id?: true
    created_at?: true
    _all?: true
  }

  export type Student_answersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student_answers to aggregate.
     */
    where?: student_answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_answers to fetch.
     */
    orderBy?: student_answersOrderByWithRelationInput | student_answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: student_answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned student_answers
    **/
    _count?: true | Student_answersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Student_answersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Student_answersMaxAggregateInputType
  }

  export type GetStudent_answersAggregateType<T extends Student_answersAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent_answers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent_answers[P]>
      : GetScalarType<T[P], AggregateStudent_answers[P]>
  }




  export type student_answersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: student_answersWhereInput
    orderBy?: student_answersOrderByWithAggregationInput | student_answersOrderByWithAggregationInput[]
    by: Student_answersScalarFieldEnum[] | Student_answersScalarFieldEnum
    having?: student_answersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Student_answersCountAggregateInputType | true
    _min?: Student_answersMinAggregateInputType
    _max?: Student_answersMaxAggregateInputType
  }

  export type Student_answersGroupByOutputType = {
    id: string
    attempt_id: string
    question_id: string
    answer_id: string
    created_at: Date | null
    _count: Student_answersCountAggregateOutputType | null
    _min: Student_answersMinAggregateOutputType | null
    _max: Student_answersMaxAggregateOutputType | null
  }

  type GetStudent_answersGroupByPayload<T extends student_answersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Student_answersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Student_answersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Student_answersGroupByOutputType[P]>
            : GetScalarType<T[P], Student_answersGroupByOutputType[P]>
        }
      >
    >


  export type student_answersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attempt_id?: boolean
    question_id?: boolean
    answer_id?: boolean
    created_at?: boolean
    answers?: boolean | answersDefaultArgs<ExtArgs>
    attempts?: boolean | attemptsDefaultArgs<ExtArgs>
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student_answers"]>



  export type student_answersSelectScalar = {
    id?: boolean
    attempt_id?: boolean
    question_id?: boolean
    answer_id?: boolean
    created_at?: boolean
  }

  export type student_answersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "attempt_id" | "question_id" | "answer_id" | "created_at", ExtArgs["result"]["student_answers"]>
  export type student_answersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | answersDefaultArgs<ExtArgs>
    attempts?: boolean | attemptsDefaultArgs<ExtArgs>
    questions?: boolean | questionsDefaultArgs<ExtArgs>
  }

  export type $student_answersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "student_answers"
    objects: {
      answers: Prisma.$answersPayload<ExtArgs>
      attempts: Prisma.$attemptsPayload<ExtArgs>
      questions: Prisma.$questionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      attempt_id: string
      question_id: string
      answer_id: string
      created_at: Date | null
    }, ExtArgs["result"]["student_answers"]>
    composites: {}
  }

  type student_answersGetPayload<S extends boolean | null | undefined | student_answersDefaultArgs> = $Result.GetResult<Prisma.$student_answersPayload, S>

  type student_answersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<student_answersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Student_answersCountAggregateInputType | true
    }

  export interface student_answersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['student_answers'], meta: { name: 'student_answers' } }
    /**
     * Find zero or one Student_answers that matches the filter.
     * @param {student_answersFindUniqueArgs} args - Arguments to find a Student_answers
     * @example
     * // Get one Student_answers
     * const student_answers = await prisma.student_answers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends student_answersFindUniqueArgs>(args: SelectSubset<T, student_answersFindUniqueArgs<ExtArgs>>): Prisma__student_answersClient<$Result.GetResult<Prisma.$student_answersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student_answers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {student_answersFindUniqueOrThrowArgs} args - Arguments to find a Student_answers
     * @example
     * // Get one Student_answers
     * const student_answers = await prisma.student_answers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends student_answersFindUniqueOrThrowArgs>(args: SelectSubset<T, student_answersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__student_answersClient<$Result.GetResult<Prisma.$student_answersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student_answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_answersFindFirstArgs} args - Arguments to find a Student_answers
     * @example
     * // Get one Student_answers
     * const student_answers = await prisma.student_answers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends student_answersFindFirstArgs>(args?: SelectSubset<T, student_answersFindFirstArgs<ExtArgs>>): Prisma__student_answersClient<$Result.GetResult<Prisma.$student_answersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student_answers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_answersFindFirstOrThrowArgs} args - Arguments to find a Student_answers
     * @example
     * // Get one Student_answers
     * const student_answers = await prisma.student_answers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends student_answersFindFirstOrThrowArgs>(args?: SelectSubset<T, student_answersFindFirstOrThrowArgs<ExtArgs>>): Prisma__student_answersClient<$Result.GetResult<Prisma.$student_answersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Student_answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_answersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Student_answers
     * const student_answers = await prisma.student_answers.findMany()
     * 
     * // Get first 10 Student_answers
     * const student_answers = await prisma.student_answers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const student_answersWithIdOnly = await prisma.student_answers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends student_answersFindManyArgs>(args?: SelectSubset<T, student_answersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_answersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student_answers.
     * @param {student_answersCreateArgs} args - Arguments to create a Student_answers.
     * @example
     * // Create one Student_answers
     * const Student_answers = await prisma.student_answers.create({
     *   data: {
     *     // ... data to create a Student_answers
     *   }
     * })
     * 
     */
    create<T extends student_answersCreateArgs>(args: SelectSubset<T, student_answersCreateArgs<ExtArgs>>): Prisma__student_answersClient<$Result.GetResult<Prisma.$student_answersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Student_answers.
     * @param {student_answersCreateManyArgs} args - Arguments to create many Student_answers.
     * @example
     * // Create many Student_answers
     * const student_answers = await prisma.student_answers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends student_answersCreateManyArgs>(args?: SelectSubset<T, student_answersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student_answers.
     * @param {student_answersDeleteArgs} args - Arguments to delete one Student_answers.
     * @example
     * // Delete one Student_answers
     * const Student_answers = await prisma.student_answers.delete({
     *   where: {
     *     // ... filter to delete one Student_answers
     *   }
     * })
     * 
     */
    delete<T extends student_answersDeleteArgs>(args: SelectSubset<T, student_answersDeleteArgs<ExtArgs>>): Prisma__student_answersClient<$Result.GetResult<Prisma.$student_answersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student_answers.
     * @param {student_answersUpdateArgs} args - Arguments to update one Student_answers.
     * @example
     * // Update one Student_answers
     * const student_answers = await prisma.student_answers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends student_answersUpdateArgs>(args: SelectSubset<T, student_answersUpdateArgs<ExtArgs>>): Prisma__student_answersClient<$Result.GetResult<Prisma.$student_answersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Student_answers.
     * @param {student_answersDeleteManyArgs} args - Arguments to filter Student_answers to delete.
     * @example
     * // Delete a few Student_answers
     * const { count } = await prisma.student_answers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends student_answersDeleteManyArgs>(args?: SelectSubset<T, student_answersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Student_answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_answersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Student_answers
     * const student_answers = await prisma.student_answers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends student_answersUpdateManyArgs>(args: SelectSubset<T, student_answersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student_answers.
     * @param {student_answersUpsertArgs} args - Arguments to update or create a Student_answers.
     * @example
     * // Update or create a Student_answers
     * const student_answers = await prisma.student_answers.upsert({
     *   create: {
     *     // ... data to create a Student_answers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student_answers we want to update
     *   }
     * })
     */
    upsert<T extends student_answersUpsertArgs>(args: SelectSubset<T, student_answersUpsertArgs<ExtArgs>>): Prisma__student_answersClient<$Result.GetResult<Prisma.$student_answersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Student_answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_answersCountArgs} args - Arguments to filter Student_answers to count.
     * @example
     * // Count the number of Student_answers
     * const count = await prisma.student_answers.count({
     *   where: {
     *     // ... the filter for the Student_answers we want to count
     *   }
     * })
    **/
    count<T extends student_answersCountArgs>(
      args?: Subset<T, student_answersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Student_answersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student_answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_answersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Student_answersAggregateArgs>(args: Subset<T, Student_answersAggregateArgs>): Prisma.PrismaPromise<GetStudent_answersAggregateType<T>>

    /**
     * Group by Student_answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_answersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends student_answersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: student_answersGroupByArgs['orderBy'] }
        : { orderBy?: student_answersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, student_answersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudent_answersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the student_answers model
   */
  readonly fields: student_answersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for student_answers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__student_answersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answers<T extends answersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, answersDefaultArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attempts<T extends attemptsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, attemptsDefaultArgs<ExtArgs>>): Prisma__attemptsClient<$Result.GetResult<Prisma.$attemptsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends questionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, questionsDefaultArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the student_answers model
   */
  interface student_answersFieldRefs {
    readonly id: FieldRef<"student_answers", 'String'>
    readonly attempt_id: FieldRef<"student_answers", 'String'>
    readonly question_id: FieldRef<"student_answers", 'String'>
    readonly answer_id: FieldRef<"student_answers", 'String'>
    readonly created_at: FieldRef<"student_answers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * student_answers findUnique
   */
  export type student_answersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_answers
     */
    select?: student_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_answers
     */
    omit?: student_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_answersInclude<ExtArgs> | null
    /**
     * Filter, which student_answers to fetch.
     */
    where: student_answersWhereUniqueInput
  }

  /**
   * student_answers findUniqueOrThrow
   */
  export type student_answersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_answers
     */
    select?: student_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_answers
     */
    omit?: student_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_answersInclude<ExtArgs> | null
    /**
     * Filter, which student_answers to fetch.
     */
    where: student_answersWhereUniqueInput
  }

  /**
   * student_answers findFirst
   */
  export type student_answersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_answers
     */
    select?: student_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_answers
     */
    omit?: student_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_answersInclude<ExtArgs> | null
    /**
     * Filter, which student_answers to fetch.
     */
    where?: student_answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_answers to fetch.
     */
    orderBy?: student_answersOrderByWithRelationInput | student_answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for student_answers.
     */
    cursor?: student_answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of student_answers.
     */
    distinct?: Student_answersScalarFieldEnum | Student_answersScalarFieldEnum[]
  }

  /**
   * student_answers findFirstOrThrow
   */
  export type student_answersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_answers
     */
    select?: student_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_answers
     */
    omit?: student_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_answersInclude<ExtArgs> | null
    /**
     * Filter, which student_answers to fetch.
     */
    where?: student_answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_answers to fetch.
     */
    orderBy?: student_answersOrderByWithRelationInput | student_answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for student_answers.
     */
    cursor?: student_answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of student_answers.
     */
    distinct?: Student_answersScalarFieldEnum | Student_answersScalarFieldEnum[]
  }

  /**
   * student_answers findMany
   */
  export type student_answersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_answers
     */
    select?: student_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_answers
     */
    omit?: student_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_answersInclude<ExtArgs> | null
    /**
     * Filter, which student_answers to fetch.
     */
    where?: student_answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_answers to fetch.
     */
    orderBy?: student_answersOrderByWithRelationInput | student_answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing student_answers.
     */
    cursor?: student_answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_answers.
     */
    skip?: number
    distinct?: Student_answersScalarFieldEnum | Student_answersScalarFieldEnum[]
  }

  /**
   * student_answers create
   */
  export type student_answersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_answers
     */
    select?: student_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_answers
     */
    omit?: student_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_answersInclude<ExtArgs> | null
    /**
     * The data needed to create a student_answers.
     */
    data: XOR<student_answersCreateInput, student_answersUncheckedCreateInput>
  }

  /**
   * student_answers createMany
   */
  export type student_answersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many student_answers.
     */
    data: student_answersCreateManyInput | student_answersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * student_answers update
   */
  export type student_answersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_answers
     */
    select?: student_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_answers
     */
    omit?: student_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_answersInclude<ExtArgs> | null
    /**
     * The data needed to update a student_answers.
     */
    data: XOR<student_answersUpdateInput, student_answersUncheckedUpdateInput>
    /**
     * Choose, which student_answers to update.
     */
    where: student_answersWhereUniqueInput
  }

  /**
   * student_answers updateMany
   */
  export type student_answersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update student_answers.
     */
    data: XOR<student_answersUpdateManyMutationInput, student_answersUncheckedUpdateManyInput>
    /**
     * Filter which student_answers to update
     */
    where?: student_answersWhereInput
    /**
     * Limit how many student_answers to update.
     */
    limit?: number
  }

  /**
   * student_answers upsert
   */
  export type student_answersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_answers
     */
    select?: student_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_answers
     */
    omit?: student_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_answersInclude<ExtArgs> | null
    /**
     * The filter to search for the student_answers to update in case it exists.
     */
    where: student_answersWhereUniqueInput
    /**
     * In case the student_answers found by the `where` argument doesn't exist, create a new student_answers with this data.
     */
    create: XOR<student_answersCreateInput, student_answersUncheckedCreateInput>
    /**
     * In case the student_answers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<student_answersUpdateInput, student_answersUncheckedUpdateInput>
  }

  /**
   * student_answers delete
   */
  export type student_answersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_answers
     */
    select?: student_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_answers
     */
    omit?: student_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_answersInclude<ExtArgs> | null
    /**
     * Filter which student_answers to delete.
     */
    where: student_answersWhereUniqueInput
  }

  /**
   * student_answers deleteMany
   */
  export type student_answersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student_answers to delete
     */
    where?: student_answersWhereInput
    /**
     * Limit how many student_answers to delete.
     */
    limit?: number
  }

  /**
   * student_answers without action
   */
  export type student_answersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_answers
     */
    select?: student_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_answers
     */
    omit?: student_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_answersInclude<ExtArgs> | null
  }


  /**
   * Model subjects
   */

  export type AggregateSubjects = {
    _count: SubjectsCountAggregateOutputType | null
    _min: SubjectsMinAggregateOutputType | null
    _max: SubjectsMaxAggregateOutputType | null
  }

  export type SubjectsMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    created_at: Date | null
  }

  export type SubjectsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    created_at: Date | null
  }

  export type SubjectsCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    created_at: number
    _all: number
  }


  export type SubjectsMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    created_at?: true
  }

  export type SubjectsMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    created_at?: true
  }

  export type SubjectsCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    created_at?: true
    _all?: true
  }

  export type SubjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subjects to aggregate.
     */
    where?: subjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectsOrderByWithRelationInput | subjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subjects
    **/
    _count?: true | SubjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectsMaxAggregateInputType
  }

  export type GetSubjectsAggregateType<T extends SubjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubjects[P]>
      : GetScalarType<T[P], AggregateSubjects[P]>
  }




  export type subjectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subjectsWhereInput
    orderBy?: subjectsOrderByWithAggregationInput | subjectsOrderByWithAggregationInput[]
    by: SubjectsScalarFieldEnum[] | SubjectsScalarFieldEnum
    having?: subjectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectsCountAggregateInputType | true
    _min?: SubjectsMinAggregateInputType
    _max?: SubjectsMaxAggregateInputType
  }

  export type SubjectsGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    created_at: Date | null
    _count: SubjectsCountAggregateOutputType | null
    _min: SubjectsMinAggregateOutputType | null
    _max: SubjectsMaxAggregateOutputType | null
  }

  type GetSubjectsGroupByPayload<T extends subjectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectsGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectsGroupByOutputType[P]>
        }
      >
    >


  export type subjectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    created_at?: boolean
    exams?: boolean | subjects$examsArgs<ExtArgs>
    questions?: boolean | subjects$questionsArgs<ExtArgs>
    _count?: boolean | SubjectsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subjects"]>



  export type subjectsSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    created_at?: boolean
  }

  export type subjectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "created_at", ExtArgs["result"]["subjects"]>
  export type subjectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exams?: boolean | subjects$examsArgs<ExtArgs>
    questions?: boolean | subjects$questionsArgs<ExtArgs>
    _count?: boolean | SubjectsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $subjectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subjects"
    objects: {
      exams: Prisma.$examsPayload<ExtArgs>[]
      questions: Prisma.$questionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      created_at: Date | null
    }, ExtArgs["result"]["subjects"]>
    composites: {}
  }

  type subjectsGetPayload<S extends boolean | null | undefined | subjectsDefaultArgs> = $Result.GetResult<Prisma.$subjectsPayload, S>

  type subjectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<subjectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectsCountAggregateInputType | true
    }

  export interface subjectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subjects'], meta: { name: 'subjects' } }
    /**
     * Find zero or one Subjects that matches the filter.
     * @param {subjectsFindUniqueArgs} args - Arguments to find a Subjects
     * @example
     * // Get one Subjects
     * const subjects = await prisma.subjects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subjectsFindUniqueArgs>(args: SelectSubset<T, subjectsFindUniqueArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subjects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subjectsFindUniqueOrThrowArgs} args - Arguments to find a Subjects
     * @example
     * // Get one Subjects
     * const subjects = await prisma.subjects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subjectsFindUniqueOrThrowArgs>(args: SelectSubset<T, subjectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectsFindFirstArgs} args - Arguments to find a Subjects
     * @example
     * // Get one Subjects
     * const subjects = await prisma.subjects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subjectsFindFirstArgs>(args?: SelectSubset<T, subjectsFindFirstArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subjects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectsFindFirstOrThrowArgs} args - Arguments to find a Subjects
     * @example
     * // Get one Subjects
     * const subjects = await prisma.subjects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subjectsFindFirstOrThrowArgs>(args?: SelectSubset<T, subjectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subjects.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subjects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectsWithIdOnly = await prisma.subjects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends subjectsFindManyArgs>(args?: SelectSubset<T, subjectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subjects.
     * @param {subjectsCreateArgs} args - Arguments to create a Subjects.
     * @example
     * // Create one Subjects
     * const Subjects = await prisma.subjects.create({
     *   data: {
     *     // ... data to create a Subjects
     *   }
     * })
     * 
     */
    create<T extends subjectsCreateArgs>(args: SelectSubset<T, subjectsCreateArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {subjectsCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subjects = await prisma.subjects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends subjectsCreateManyArgs>(args?: SelectSubset<T, subjectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subjects.
     * @param {subjectsDeleteArgs} args - Arguments to delete one Subjects.
     * @example
     * // Delete one Subjects
     * const Subjects = await prisma.subjects.delete({
     *   where: {
     *     // ... filter to delete one Subjects
     *   }
     * })
     * 
     */
    delete<T extends subjectsDeleteArgs>(args: SelectSubset<T, subjectsDeleteArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subjects.
     * @param {subjectsUpdateArgs} args - Arguments to update one Subjects.
     * @example
     * // Update one Subjects
     * const subjects = await prisma.subjects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends subjectsUpdateArgs>(args: SelectSubset<T, subjectsUpdateArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {subjectsDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subjects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends subjectsDeleteManyArgs>(args?: SelectSubset<T, subjectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subjects = await prisma.subjects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends subjectsUpdateManyArgs>(args: SelectSubset<T, subjectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subjects.
     * @param {subjectsUpsertArgs} args - Arguments to update or create a Subjects.
     * @example
     * // Update or create a Subjects
     * const subjects = await prisma.subjects.upsert({
     *   create: {
     *     // ... data to create a Subjects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subjects we want to update
     *   }
     * })
     */
    upsert<T extends subjectsUpsertArgs>(args: SelectSubset<T, subjectsUpsertArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectsCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subjects.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends subjectsCountArgs>(
      args?: Subset<T, subjectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubjectsAggregateArgs>(args: Subset<T, SubjectsAggregateArgs>): Prisma.PrismaPromise<GetSubjectsAggregateType<T>>

    /**
     * Group by Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends subjectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subjectsGroupByArgs['orderBy'] }
        : { orderBy?: subjectsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, subjectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subjects model
   */
  readonly fields: subjectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subjects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subjectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exams<T extends subjects$examsArgs<ExtArgs> = {}>(args?: Subset<T, subjects$examsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$examsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questions<T extends subjects$questionsArgs<ExtArgs> = {}>(args?: Subset<T, subjects$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the subjects model
   */
  interface subjectsFieldRefs {
    readonly id: FieldRef<"subjects", 'String'>
    readonly name: FieldRef<"subjects", 'String'>
    readonly slug: FieldRef<"subjects", 'String'>
    readonly description: FieldRef<"subjects", 'String'>
    readonly created_at: FieldRef<"subjects", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * subjects findUnique
   */
  export type subjectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * Filter, which subjects to fetch.
     */
    where: subjectsWhereUniqueInput
  }

  /**
   * subjects findUniqueOrThrow
   */
  export type subjectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * Filter, which subjects to fetch.
     */
    where: subjectsWhereUniqueInput
  }

  /**
   * subjects findFirst
   */
  export type subjectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * Filter, which subjects to fetch.
     */
    where?: subjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectsOrderByWithRelationInput | subjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subjects.
     */
    cursor?: subjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subjects.
     */
    distinct?: SubjectsScalarFieldEnum | SubjectsScalarFieldEnum[]
  }

  /**
   * subjects findFirstOrThrow
   */
  export type subjectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * Filter, which subjects to fetch.
     */
    where?: subjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectsOrderByWithRelationInput | subjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subjects.
     */
    cursor?: subjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subjects.
     */
    distinct?: SubjectsScalarFieldEnum | SubjectsScalarFieldEnum[]
  }

  /**
   * subjects findMany
   */
  export type subjectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * Filter, which subjects to fetch.
     */
    where?: subjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectsOrderByWithRelationInput | subjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subjects.
     */
    cursor?: subjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    distinct?: SubjectsScalarFieldEnum | SubjectsScalarFieldEnum[]
  }

  /**
   * subjects create
   */
  export type subjectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * The data needed to create a subjects.
     */
    data: XOR<subjectsCreateInput, subjectsUncheckedCreateInput>
  }

  /**
   * subjects createMany
   */
  export type subjectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subjects.
     */
    data: subjectsCreateManyInput | subjectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subjects update
   */
  export type subjectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * The data needed to update a subjects.
     */
    data: XOR<subjectsUpdateInput, subjectsUncheckedUpdateInput>
    /**
     * Choose, which subjects to update.
     */
    where: subjectsWhereUniqueInput
  }

  /**
   * subjects updateMany
   */
  export type subjectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subjects.
     */
    data: XOR<subjectsUpdateManyMutationInput, subjectsUncheckedUpdateManyInput>
    /**
     * Filter which subjects to update
     */
    where?: subjectsWhereInput
    /**
     * Limit how many subjects to update.
     */
    limit?: number
  }

  /**
   * subjects upsert
   */
  export type subjectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * The filter to search for the subjects to update in case it exists.
     */
    where: subjectsWhereUniqueInput
    /**
     * In case the subjects found by the `where` argument doesn't exist, create a new subjects with this data.
     */
    create: XOR<subjectsCreateInput, subjectsUncheckedCreateInput>
    /**
     * In case the subjects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subjectsUpdateInput, subjectsUncheckedUpdateInput>
  }

  /**
   * subjects delete
   */
  export type subjectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * Filter which subjects to delete.
     */
    where: subjectsWhereUniqueInput
  }

  /**
   * subjects deleteMany
   */
  export type subjectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subjects to delete
     */
    where?: subjectsWhereInput
    /**
     * Limit how many subjects to delete.
     */
    limit?: number
  }

  /**
   * subjects.exams
   */
  export type subjects$examsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exams
     */
    select?: examsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exams
     */
    omit?: examsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examsInclude<ExtArgs> | null
    where?: examsWhereInput
    orderBy?: examsOrderByWithRelationInput | examsOrderByWithRelationInput[]
    cursor?: examsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamsScalarFieldEnum | ExamsScalarFieldEnum[]
  }

  /**
   * subjects.questions
   */
  export type subjects$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    where?: questionsWhereInput
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    cursor?: questionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * subjects without action
   */
  export type subjectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
  }


  /**
   * Model classes
   */

  export type AggregateClasses = {
    _count: ClassesCountAggregateOutputType | null
    _min: ClassesMinAggregateOutputType | null
    _max: ClassesMaxAggregateOutputType | null
  }

  export type ClassesMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    description: string | null
    school_year: string | null
    teacher_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClassesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    description: string | null
    school_year: string | null
    teacher_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClassesCountAggregateOutputType = {
    id: number
    name: number
    code: number
    description: number
    school_year: number
    teacher_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ClassesMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    description?: true
    school_year?: true
    teacher_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ClassesMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    description?: true
    school_year?: true
    teacher_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ClassesCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    description?: true
    school_year?: true
    teacher_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ClassesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which classes to aggregate.
     */
    where?: classesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classes to fetch.
     */
    orderBy?: classesOrderByWithRelationInput | classesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: classesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned classes
    **/
    _count?: true | ClassesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassesMaxAggregateInputType
  }

  export type GetClassesAggregateType<T extends ClassesAggregateArgs> = {
        [P in keyof T & keyof AggregateClasses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClasses[P]>
      : GetScalarType<T[P], AggregateClasses[P]>
  }




  export type classesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: classesWhereInput
    orderBy?: classesOrderByWithAggregationInput | classesOrderByWithAggregationInput[]
    by: ClassesScalarFieldEnum[] | ClassesScalarFieldEnum
    having?: classesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassesCountAggregateInputType | true
    _min?: ClassesMinAggregateInputType
    _max?: ClassesMaxAggregateInputType
  }

  export type ClassesGroupByOutputType = {
    id: string
    name: string
    code: string | null
    description: string | null
    school_year: string | null
    teacher_id: string
    created_at: Date | null
    updated_at: Date | null
    _count: ClassesCountAggregateOutputType | null
    _min: ClassesMinAggregateOutputType | null
    _max: ClassesMaxAggregateOutputType | null
  }

  type GetClassesGroupByPayload<T extends classesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassesGroupByOutputType[P]>
            : GetScalarType<T[P], ClassesGroupByOutputType[P]>
        }
      >
    >


  export type classesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    description?: boolean
    school_year?: boolean
    teacher_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    teacher?: boolean | usersDefaultArgs<ExtArgs>
    class_students?: boolean | classes$class_studentsArgs<ExtArgs>
    exam_classes?: boolean | classes$exam_classesArgs<ExtArgs>
    _count?: boolean | ClassesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classes"]>



  export type classesSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    description?: boolean
    school_year?: boolean
    teacher_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type classesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "description" | "school_year" | "teacher_id" | "created_at" | "updated_at", ExtArgs["result"]["classes"]>
  export type classesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | usersDefaultArgs<ExtArgs>
    class_students?: boolean | classes$class_studentsArgs<ExtArgs>
    exam_classes?: boolean | classes$exam_classesArgs<ExtArgs>
    _count?: boolean | ClassesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $classesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "classes"
    objects: {
      teacher: Prisma.$usersPayload<ExtArgs>
      class_students: Prisma.$class_studentsPayload<ExtArgs>[]
      exam_classes: Prisma.$exam_classesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string | null
      description: string | null
      school_year: string | null
      teacher_id: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["classes"]>
    composites: {}
  }

  type classesGetPayload<S extends boolean | null | undefined | classesDefaultArgs> = $Result.GetResult<Prisma.$classesPayload, S>

  type classesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<classesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassesCountAggregateInputType | true
    }

  export interface classesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['classes'], meta: { name: 'classes' } }
    /**
     * Find zero or one Classes that matches the filter.
     * @param {classesFindUniqueArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends classesFindUniqueArgs>(args: SelectSubset<T, classesFindUniqueArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {classesFindUniqueOrThrowArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends classesFindUniqueOrThrowArgs>(args: SelectSubset<T, classesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesFindFirstArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends classesFindFirstArgs>(args?: SelectSubset<T, classesFindFirstArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesFindFirstOrThrowArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends classesFindFirstOrThrowArgs>(args?: SelectSubset<T, classesFindFirstOrThrowArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.classes.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.classes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classesWithIdOnly = await prisma.classes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends classesFindManyArgs>(args?: SelectSubset<T, classesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classes.
     * @param {classesCreateArgs} args - Arguments to create a Classes.
     * @example
     * // Create one Classes
     * const Classes = await prisma.classes.create({
     *   data: {
     *     // ... data to create a Classes
     *   }
     * })
     * 
     */
    create<T extends classesCreateArgs>(args: SelectSubset<T, classesCreateArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {classesCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const classes = await prisma.classes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends classesCreateManyArgs>(args?: SelectSubset<T, classesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Classes.
     * @param {classesDeleteArgs} args - Arguments to delete one Classes.
     * @example
     * // Delete one Classes
     * const Classes = await prisma.classes.delete({
     *   where: {
     *     // ... filter to delete one Classes
     *   }
     * })
     * 
     */
    delete<T extends classesDeleteArgs>(args: SelectSubset<T, classesDeleteArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classes.
     * @param {classesUpdateArgs} args - Arguments to update one Classes.
     * @example
     * // Update one Classes
     * const classes = await prisma.classes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends classesUpdateArgs>(args: SelectSubset<T, classesUpdateArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {classesDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.classes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends classesDeleteManyArgs>(args?: SelectSubset<T, classesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const classes = await prisma.classes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends classesUpdateManyArgs>(args: SelectSubset<T, classesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Classes.
     * @param {classesUpsertArgs} args - Arguments to update or create a Classes.
     * @example
     * // Update or create a Classes
     * const classes = await prisma.classes.upsert({
     *   create: {
     *     // ... data to create a Classes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classes we want to update
     *   }
     * })
     */
    upsert<T extends classesUpsertArgs>(args: SelectSubset<T, classesUpsertArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.classes.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends classesCountArgs>(
      args?: Subset<T, classesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassesAggregateArgs>(args: Subset<T, ClassesAggregateArgs>): Prisma.PrismaPromise<GetClassesAggregateType<T>>

    /**
     * Group by Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends classesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: classesGroupByArgs['orderBy'] }
        : { orderBy?: classesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, classesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the classes model
   */
  readonly fields: classesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for classes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__classesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    class_students<T extends classes$class_studentsArgs<ExtArgs> = {}>(args?: Subset<T, classes$class_studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$class_studentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exam_classes<T extends classes$exam_classesArgs<ExtArgs> = {}>(args?: Subset<T, classes$exam_classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exam_classesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the classes model
   */
  interface classesFieldRefs {
    readonly id: FieldRef<"classes", 'String'>
    readonly name: FieldRef<"classes", 'String'>
    readonly code: FieldRef<"classes", 'String'>
    readonly description: FieldRef<"classes", 'String'>
    readonly school_year: FieldRef<"classes", 'String'>
    readonly teacher_id: FieldRef<"classes", 'String'>
    readonly created_at: FieldRef<"classes", 'DateTime'>
    readonly updated_at: FieldRef<"classes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * classes findUnique
   */
  export type classesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * Filter, which classes to fetch.
     */
    where: classesWhereUniqueInput
  }

  /**
   * classes findUniqueOrThrow
   */
  export type classesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * Filter, which classes to fetch.
     */
    where: classesWhereUniqueInput
  }

  /**
   * classes findFirst
   */
  export type classesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * Filter, which classes to fetch.
     */
    where?: classesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classes to fetch.
     */
    orderBy?: classesOrderByWithRelationInput | classesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for classes.
     */
    cursor?: classesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of classes.
     */
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * classes findFirstOrThrow
   */
  export type classesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * Filter, which classes to fetch.
     */
    where?: classesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classes to fetch.
     */
    orderBy?: classesOrderByWithRelationInput | classesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for classes.
     */
    cursor?: classesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of classes.
     */
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * classes findMany
   */
  export type classesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * Filter, which classes to fetch.
     */
    where?: classesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classes to fetch.
     */
    orderBy?: classesOrderByWithRelationInput | classesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing classes.
     */
    cursor?: classesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classes.
     */
    skip?: number
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * classes create
   */
  export type classesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * The data needed to create a classes.
     */
    data: XOR<classesCreateInput, classesUncheckedCreateInput>
  }

  /**
   * classes createMany
   */
  export type classesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many classes.
     */
    data: classesCreateManyInput | classesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * classes update
   */
  export type classesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * The data needed to update a classes.
     */
    data: XOR<classesUpdateInput, classesUncheckedUpdateInput>
    /**
     * Choose, which classes to update.
     */
    where: classesWhereUniqueInput
  }

  /**
   * classes updateMany
   */
  export type classesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update classes.
     */
    data: XOR<classesUpdateManyMutationInput, classesUncheckedUpdateManyInput>
    /**
     * Filter which classes to update
     */
    where?: classesWhereInput
    /**
     * Limit how many classes to update.
     */
    limit?: number
  }

  /**
   * classes upsert
   */
  export type classesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * The filter to search for the classes to update in case it exists.
     */
    where: classesWhereUniqueInput
    /**
     * In case the classes found by the `where` argument doesn't exist, create a new classes with this data.
     */
    create: XOR<classesCreateInput, classesUncheckedCreateInput>
    /**
     * In case the classes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<classesUpdateInput, classesUncheckedUpdateInput>
  }

  /**
   * classes delete
   */
  export type classesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    /**
     * Filter which classes to delete.
     */
    where: classesWhereUniqueInput
  }

  /**
   * classes deleteMany
   */
  export type classesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which classes to delete
     */
    where?: classesWhereInput
    /**
     * Limit how many classes to delete.
     */
    limit?: number
  }

  /**
   * classes.class_students
   */
  export type classes$class_studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_students
     */
    select?: class_studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the class_students
     */
    omit?: class_studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_studentsInclude<ExtArgs> | null
    where?: class_studentsWhereInput
    orderBy?: class_studentsOrderByWithRelationInput | class_studentsOrderByWithRelationInput[]
    cursor?: class_studentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Class_studentsScalarFieldEnum | Class_studentsScalarFieldEnum[]
  }

  /**
   * classes.exam_classes
   */
  export type classes$exam_classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_classes
     */
    select?: exam_classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_classes
     */
    omit?: exam_classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_classesInclude<ExtArgs> | null
    where?: exam_classesWhereInput
    orderBy?: exam_classesOrderByWithRelationInput | exam_classesOrderByWithRelationInput[]
    cursor?: exam_classesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Exam_classesScalarFieldEnum | Exam_classesScalarFieldEnum[]
  }

  /**
   * classes without action
   */
  export type classesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
  }


  /**
   * Model class_students
   */

  export type AggregateClass_students = {
    _count: Class_studentsCountAggregateOutputType | null
    _min: Class_studentsMinAggregateOutputType | null
    _max: Class_studentsMaxAggregateOutputType | null
  }

  export type Class_studentsMinAggregateOutputType = {
    class_id: string | null
    student_id: string | null
    joined_at: Date | null
  }

  export type Class_studentsMaxAggregateOutputType = {
    class_id: string | null
    student_id: string | null
    joined_at: Date | null
  }

  export type Class_studentsCountAggregateOutputType = {
    class_id: number
    student_id: number
    joined_at: number
    _all: number
  }


  export type Class_studentsMinAggregateInputType = {
    class_id?: true
    student_id?: true
    joined_at?: true
  }

  export type Class_studentsMaxAggregateInputType = {
    class_id?: true
    student_id?: true
    joined_at?: true
  }

  export type Class_studentsCountAggregateInputType = {
    class_id?: true
    student_id?: true
    joined_at?: true
    _all?: true
  }

  export type Class_studentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which class_students to aggregate.
     */
    where?: class_studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of class_students to fetch.
     */
    orderBy?: class_studentsOrderByWithRelationInput | class_studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: class_studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` class_students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` class_students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned class_students
    **/
    _count?: true | Class_studentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Class_studentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Class_studentsMaxAggregateInputType
  }

  export type GetClass_studentsAggregateType<T extends Class_studentsAggregateArgs> = {
        [P in keyof T & keyof AggregateClass_students]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass_students[P]>
      : GetScalarType<T[P], AggregateClass_students[P]>
  }




  export type class_studentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: class_studentsWhereInput
    orderBy?: class_studentsOrderByWithAggregationInput | class_studentsOrderByWithAggregationInput[]
    by: Class_studentsScalarFieldEnum[] | Class_studentsScalarFieldEnum
    having?: class_studentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Class_studentsCountAggregateInputType | true
    _min?: Class_studentsMinAggregateInputType
    _max?: Class_studentsMaxAggregateInputType
  }

  export type Class_studentsGroupByOutputType = {
    class_id: string
    student_id: string
    joined_at: Date | null
    _count: Class_studentsCountAggregateOutputType | null
    _min: Class_studentsMinAggregateOutputType | null
    _max: Class_studentsMaxAggregateOutputType | null
  }

  type GetClass_studentsGroupByPayload<T extends class_studentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Class_studentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Class_studentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Class_studentsGroupByOutputType[P]>
            : GetScalarType<T[P], Class_studentsGroupByOutputType[P]>
        }
      >
    >


  export type class_studentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    class_id?: boolean
    student_id?: boolean
    joined_at?: boolean
    classes?: boolean | classesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class_students"]>



  export type class_studentsSelectScalar = {
    class_id?: boolean
    student_id?: boolean
    joined_at?: boolean
  }

  export type class_studentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"class_id" | "student_id" | "joined_at", ExtArgs["result"]["class_students"]>
  export type class_studentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | classesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $class_studentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "class_students"
    objects: {
      classes: Prisma.$classesPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      class_id: string
      student_id: string
      joined_at: Date | null
    }, ExtArgs["result"]["class_students"]>
    composites: {}
  }

  type class_studentsGetPayload<S extends boolean | null | undefined | class_studentsDefaultArgs> = $Result.GetResult<Prisma.$class_studentsPayload, S>

  type class_studentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<class_studentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Class_studentsCountAggregateInputType | true
    }

  export interface class_studentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['class_students'], meta: { name: 'class_students' } }
    /**
     * Find zero or one Class_students that matches the filter.
     * @param {class_studentsFindUniqueArgs} args - Arguments to find a Class_students
     * @example
     * // Get one Class_students
     * const class_students = await prisma.class_students.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends class_studentsFindUniqueArgs>(args: SelectSubset<T, class_studentsFindUniqueArgs<ExtArgs>>): Prisma__class_studentsClient<$Result.GetResult<Prisma.$class_studentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class_students that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {class_studentsFindUniqueOrThrowArgs} args - Arguments to find a Class_students
     * @example
     * // Get one Class_students
     * const class_students = await prisma.class_students.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends class_studentsFindUniqueOrThrowArgs>(args: SelectSubset<T, class_studentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__class_studentsClient<$Result.GetResult<Prisma.$class_studentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class_students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {class_studentsFindFirstArgs} args - Arguments to find a Class_students
     * @example
     * // Get one Class_students
     * const class_students = await prisma.class_students.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends class_studentsFindFirstArgs>(args?: SelectSubset<T, class_studentsFindFirstArgs<ExtArgs>>): Prisma__class_studentsClient<$Result.GetResult<Prisma.$class_studentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class_students that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {class_studentsFindFirstOrThrowArgs} args - Arguments to find a Class_students
     * @example
     * // Get one Class_students
     * const class_students = await prisma.class_students.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends class_studentsFindFirstOrThrowArgs>(args?: SelectSubset<T, class_studentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__class_studentsClient<$Result.GetResult<Prisma.$class_studentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Class_students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {class_studentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Class_students
     * const class_students = await prisma.class_students.findMany()
     * 
     * // Get first 10 Class_students
     * const class_students = await prisma.class_students.findMany({ take: 10 })
     * 
     * // Only select the `class_id`
     * const class_studentsWithClass_idOnly = await prisma.class_students.findMany({ select: { class_id: true } })
     * 
     */
    findMany<T extends class_studentsFindManyArgs>(args?: SelectSubset<T, class_studentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$class_studentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class_students.
     * @param {class_studentsCreateArgs} args - Arguments to create a Class_students.
     * @example
     * // Create one Class_students
     * const Class_students = await prisma.class_students.create({
     *   data: {
     *     // ... data to create a Class_students
     *   }
     * })
     * 
     */
    create<T extends class_studentsCreateArgs>(args: SelectSubset<T, class_studentsCreateArgs<ExtArgs>>): Prisma__class_studentsClient<$Result.GetResult<Prisma.$class_studentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Class_students.
     * @param {class_studentsCreateManyArgs} args - Arguments to create many Class_students.
     * @example
     * // Create many Class_students
     * const class_students = await prisma.class_students.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends class_studentsCreateManyArgs>(args?: SelectSubset<T, class_studentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Class_students.
     * @param {class_studentsDeleteArgs} args - Arguments to delete one Class_students.
     * @example
     * // Delete one Class_students
     * const Class_students = await prisma.class_students.delete({
     *   where: {
     *     // ... filter to delete one Class_students
     *   }
     * })
     * 
     */
    delete<T extends class_studentsDeleteArgs>(args: SelectSubset<T, class_studentsDeleteArgs<ExtArgs>>): Prisma__class_studentsClient<$Result.GetResult<Prisma.$class_studentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class_students.
     * @param {class_studentsUpdateArgs} args - Arguments to update one Class_students.
     * @example
     * // Update one Class_students
     * const class_students = await prisma.class_students.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends class_studentsUpdateArgs>(args: SelectSubset<T, class_studentsUpdateArgs<ExtArgs>>): Prisma__class_studentsClient<$Result.GetResult<Prisma.$class_studentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Class_students.
     * @param {class_studentsDeleteManyArgs} args - Arguments to filter Class_students to delete.
     * @example
     * // Delete a few Class_students
     * const { count } = await prisma.class_students.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends class_studentsDeleteManyArgs>(args?: SelectSubset<T, class_studentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Class_students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {class_studentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Class_students
     * const class_students = await prisma.class_students.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends class_studentsUpdateManyArgs>(args: SelectSubset<T, class_studentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Class_students.
     * @param {class_studentsUpsertArgs} args - Arguments to update or create a Class_students.
     * @example
     * // Update or create a Class_students
     * const class_students = await prisma.class_students.upsert({
     *   create: {
     *     // ... data to create a Class_students
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class_students we want to update
     *   }
     * })
     */
    upsert<T extends class_studentsUpsertArgs>(args: SelectSubset<T, class_studentsUpsertArgs<ExtArgs>>): Prisma__class_studentsClient<$Result.GetResult<Prisma.$class_studentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Class_students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {class_studentsCountArgs} args - Arguments to filter Class_students to count.
     * @example
     * // Count the number of Class_students
     * const count = await prisma.class_students.count({
     *   where: {
     *     // ... the filter for the Class_students we want to count
     *   }
     * })
    **/
    count<T extends class_studentsCountArgs>(
      args?: Subset<T, class_studentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Class_studentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class_students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Class_studentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Class_studentsAggregateArgs>(args: Subset<T, Class_studentsAggregateArgs>): Prisma.PrismaPromise<GetClass_studentsAggregateType<T>>

    /**
     * Group by Class_students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {class_studentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends class_studentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: class_studentsGroupByArgs['orderBy'] }
        : { orderBy?: class_studentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, class_studentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClass_studentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the class_students model
   */
  readonly fields: class_studentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for class_students.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__class_studentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classes<T extends classesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, classesDefaultArgs<ExtArgs>>): Prisma__classesClient<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the class_students model
   */
  interface class_studentsFieldRefs {
    readonly class_id: FieldRef<"class_students", 'String'>
    readonly student_id: FieldRef<"class_students", 'String'>
    readonly joined_at: FieldRef<"class_students", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * class_students findUnique
   */
  export type class_studentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_students
     */
    select?: class_studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the class_students
     */
    omit?: class_studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_studentsInclude<ExtArgs> | null
    /**
     * Filter, which class_students to fetch.
     */
    where: class_studentsWhereUniqueInput
  }

  /**
   * class_students findUniqueOrThrow
   */
  export type class_studentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_students
     */
    select?: class_studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the class_students
     */
    omit?: class_studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_studentsInclude<ExtArgs> | null
    /**
     * Filter, which class_students to fetch.
     */
    where: class_studentsWhereUniqueInput
  }

  /**
   * class_students findFirst
   */
  export type class_studentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_students
     */
    select?: class_studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the class_students
     */
    omit?: class_studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_studentsInclude<ExtArgs> | null
    /**
     * Filter, which class_students to fetch.
     */
    where?: class_studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of class_students to fetch.
     */
    orderBy?: class_studentsOrderByWithRelationInput | class_studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for class_students.
     */
    cursor?: class_studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` class_students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` class_students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of class_students.
     */
    distinct?: Class_studentsScalarFieldEnum | Class_studentsScalarFieldEnum[]
  }

  /**
   * class_students findFirstOrThrow
   */
  export type class_studentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_students
     */
    select?: class_studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the class_students
     */
    omit?: class_studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_studentsInclude<ExtArgs> | null
    /**
     * Filter, which class_students to fetch.
     */
    where?: class_studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of class_students to fetch.
     */
    orderBy?: class_studentsOrderByWithRelationInput | class_studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for class_students.
     */
    cursor?: class_studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` class_students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` class_students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of class_students.
     */
    distinct?: Class_studentsScalarFieldEnum | Class_studentsScalarFieldEnum[]
  }

  /**
   * class_students findMany
   */
  export type class_studentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_students
     */
    select?: class_studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the class_students
     */
    omit?: class_studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_studentsInclude<ExtArgs> | null
    /**
     * Filter, which class_students to fetch.
     */
    where?: class_studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of class_students to fetch.
     */
    orderBy?: class_studentsOrderByWithRelationInput | class_studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing class_students.
     */
    cursor?: class_studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` class_students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` class_students.
     */
    skip?: number
    distinct?: Class_studentsScalarFieldEnum | Class_studentsScalarFieldEnum[]
  }

  /**
   * class_students create
   */
  export type class_studentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_students
     */
    select?: class_studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the class_students
     */
    omit?: class_studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_studentsInclude<ExtArgs> | null
    /**
     * The data needed to create a class_students.
     */
    data: XOR<class_studentsCreateInput, class_studentsUncheckedCreateInput>
  }

  /**
   * class_students createMany
   */
  export type class_studentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many class_students.
     */
    data: class_studentsCreateManyInput | class_studentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * class_students update
   */
  export type class_studentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_students
     */
    select?: class_studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the class_students
     */
    omit?: class_studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_studentsInclude<ExtArgs> | null
    /**
     * The data needed to update a class_students.
     */
    data: XOR<class_studentsUpdateInput, class_studentsUncheckedUpdateInput>
    /**
     * Choose, which class_students to update.
     */
    where: class_studentsWhereUniqueInput
  }

  /**
   * class_students updateMany
   */
  export type class_studentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update class_students.
     */
    data: XOR<class_studentsUpdateManyMutationInput, class_studentsUncheckedUpdateManyInput>
    /**
     * Filter which class_students to update
     */
    where?: class_studentsWhereInput
    /**
     * Limit how many class_students to update.
     */
    limit?: number
  }

  /**
   * class_students upsert
   */
  export type class_studentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_students
     */
    select?: class_studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the class_students
     */
    omit?: class_studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_studentsInclude<ExtArgs> | null
    /**
     * The filter to search for the class_students to update in case it exists.
     */
    where: class_studentsWhereUniqueInput
    /**
     * In case the class_students found by the `where` argument doesn't exist, create a new class_students with this data.
     */
    create: XOR<class_studentsCreateInput, class_studentsUncheckedCreateInput>
    /**
     * In case the class_students was found with the provided `where` argument, update it with this data.
     */
    update: XOR<class_studentsUpdateInput, class_studentsUncheckedUpdateInput>
  }

  /**
   * class_students delete
   */
  export type class_studentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_students
     */
    select?: class_studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the class_students
     */
    omit?: class_studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_studentsInclude<ExtArgs> | null
    /**
     * Filter which class_students to delete.
     */
    where: class_studentsWhereUniqueInput
  }

  /**
   * class_students deleteMany
   */
  export type class_studentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which class_students to delete
     */
    where?: class_studentsWhereInput
    /**
     * Limit how many class_students to delete.
     */
    limit?: number
  }

  /**
   * class_students without action
   */
  export type class_studentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_students
     */
    select?: class_studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the class_students
     */
    omit?: class_studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_studentsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    full_name: string | null
    email: string | null
    phone: string | null
    password: string | null
    avatar: string | null
    role: $Enums.role_enum | null
    is_active: boolean | null
    email_verified: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    full_name: string | null
    email: string | null
    phone: string | null
    password: string | null
    avatar: string | null
    role: $Enums.role_enum | null
    is_active: boolean | null
    email_verified: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    full_name: number
    email: number
    phone: number
    password: number
    avatar: number
    role: number
    is_active: number
    email_verified: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    phone?: true
    password?: true
    avatar?: true
    role?: true
    is_active?: true
    email_verified?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    phone?: true
    password?: true
    avatar?: true
    role?: true
    is_active?: true
    email_verified?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    phone?: true
    password?: true
    avatar?: true
    role?: true
    is_active?: true
    email_verified?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    full_name: string
    email: string
    phone: string | null
    password: string
    avatar: string | null
    role: $Enums.role_enum
    is_active: boolean | null
    email_verified: boolean
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    avatar?: boolean
    role?: boolean
    is_active?: boolean
    email_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
    attempts?: boolean | users$attemptsArgs<ExtArgs>
    exams?: boolean | users$examsArgs<ExtArgs>
    questions?: boolean | users$questionsArgs<ExtArgs>
    refresh_tokens?: boolean | users$refresh_tokensArgs<ExtArgs>
    classes_teaching?: boolean | users$classes_teachingArgs<ExtArgs>
    class_memberships?: boolean | users$class_membershipsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    full_name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    avatar?: boolean
    role?: boolean
    is_active?: boolean
    email_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "email" | "phone" | "password" | "avatar" | "role" | "is_active" | "email_verified" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempts?: boolean | users$attemptsArgs<ExtArgs>
    exams?: boolean | users$examsArgs<ExtArgs>
    questions?: boolean | users$questionsArgs<ExtArgs>
    refresh_tokens?: boolean | users$refresh_tokensArgs<ExtArgs>
    classes_teaching?: boolean | users$classes_teachingArgs<ExtArgs>
    class_memberships?: boolean | users$class_membershipsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      attempts: Prisma.$attemptsPayload<ExtArgs>[]
      exams: Prisma.$examsPayload<ExtArgs>[]
      questions: Prisma.$questionsPayload<ExtArgs>[]
      refresh_tokens: Prisma.$refresh_tokensPayload<ExtArgs>[]
      classes_teaching: Prisma.$classesPayload<ExtArgs>[]
      class_memberships: Prisma.$class_studentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      full_name: string
      email: string
      phone: string | null
      password: string
      avatar: string | null
      role: $Enums.role_enum
      is_active: boolean | null
      email_verified: boolean
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attempts<T extends users$attemptsArgs<ExtArgs> = {}>(args?: Subset<T, users$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attemptsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exams<T extends users$examsArgs<ExtArgs> = {}>(args?: Subset<T, users$examsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$examsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questions<T extends users$questionsArgs<ExtArgs> = {}>(args?: Subset<T, users$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refresh_tokens<T extends users$refresh_tokensArgs<ExtArgs> = {}>(args?: Subset<T, users$refresh_tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classes_teaching<T extends users$classes_teachingArgs<ExtArgs> = {}>(args?: Subset<T, users$classes_teachingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    class_memberships<T extends users$class_membershipsArgs<ExtArgs> = {}>(args?: Subset<T, users$class_membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$class_studentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly full_name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly phone: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly avatar: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'role_enum'>
    readonly is_active: FieldRef<"users", 'Boolean'>
    readonly email_verified: FieldRef<"users", 'Boolean'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.attempts
   */
  export type users$attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attempts
     */
    select?: attemptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attempts
     */
    omit?: attemptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attemptsInclude<ExtArgs> | null
    where?: attemptsWhereInput
    orderBy?: attemptsOrderByWithRelationInput | attemptsOrderByWithRelationInput[]
    cursor?: attemptsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttemptsScalarFieldEnum | AttemptsScalarFieldEnum[]
  }

  /**
   * users.exams
   */
  export type users$examsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exams
     */
    select?: examsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exams
     */
    omit?: examsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examsInclude<ExtArgs> | null
    where?: examsWhereInput
    orderBy?: examsOrderByWithRelationInput | examsOrderByWithRelationInput[]
    cursor?: examsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamsScalarFieldEnum | ExamsScalarFieldEnum[]
  }

  /**
   * users.questions
   */
  export type users$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questions
     */
    omit?: questionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionsInclude<ExtArgs> | null
    where?: questionsWhereInput
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    cursor?: questionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * users.refresh_tokens
   */
  export type users$refresh_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_tokens
     */
    omit?: refresh_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    where?: refresh_tokensWhereInput
    orderBy?: refresh_tokensOrderByWithRelationInput | refresh_tokensOrderByWithRelationInput[]
    cursor?: refresh_tokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Refresh_tokensScalarFieldEnum | Refresh_tokensScalarFieldEnum[]
  }

  /**
   * users.classes_teaching
   */
  export type users$classes_teachingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: classesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classes
     */
    omit?: classesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classesInclude<ExtArgs> | null
    where?: classesWhereInput
    orderBy?: classesOrderByWithRelationInput | classesOrderByWithRelationInput[]
    cursor?: classesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassesScalarFieldEnum | ClassesScalarFieldEnum[]
  }

  /**
   * users.class_memberships
   */
  export type users$class_membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the class_students
     */
    select?: class_studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the class_students
     */
    omit?: class_studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: class_studentsInclude<ExtArgs> | null
    where?: class_studentsWhereInput
    orderBy?: class_studentsOrderByWithRelationInput | class_studentsOrderByWithRelationInput[]
    cursor?: class_studentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Class_studentsScalarFieldEnum | Class_studentsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model refresh_tokens
   */

  export type AggregateRefresh_tokens = {
    _count: Refresh_tokensCountAggregateOutputType | null
    _min: Refresh_tokensMinAggregateOutputType | null
    _max: Refresh_tokensMaxAggregateOutputType | null
  }

  export type Refresh_tokensMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    token_hash: string | null
    expires_at: Date | null
    revoked_at: Date | null
    created_at: Date | null
  }

  export type Refresh_tokensMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    token_hash: string | null
    expires_at: Date | null
    revoked_at: Date | null
    created_at: Date | null
  }

  export type Refresh_tokensCountAggregateOutputType = {
    id: number
    user_id: number
    token_hash: number
    expires_at: number
    revoked_at: number
    created_at: number
    _all: number
  }


  export type Refresh_tokensMinAggregateInputType = {
    id?: true
    user_id?: true
    token_hash?: true
    expires_at?: true
    revoked_at?: true
    created_at?: true
  }

  export type Refresh_tokensMaxAggregateInputType = {
    id?: true
    user_id?: true
    token_hash?: true
    expires_at?: true
    revoked_at?: true
    created_at?: true
  }

  export type Refresh_tokensCountAggregateInputType = {
    id?: true
    user_id?: true
    token_hash?: true
    expires_at?: true
    revoked_at?: true
    created_at?: true
    _all?: true
  }

  export type Refresh_tokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which refresh_tokens to aggregate.
     */
    where?: refresh_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refresh_tokens to fetch.
     */
    orderBy?: refresh_tokensOrderByWithRelationInput | refresh_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: refresh_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refresh_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned refresh_tokens
    **/
    _count?: true | Refresh_tokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Refresh_tokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Refresh_tokensMaxAggregateInputType
  }

  export type GetRefresh_tokensAggregateType<T extends Refresh_tokensAggregateArgs> = {
        [P in keyof T & keyof AggregateRefresh_tokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefresh_tokens[P]>
      : GetScalarType<T[P], AggregateRefresh_tokens[P]>
  }




  export type refresh_tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: refresh_tokensWhereInput
    orderBy?: refresh_tokensOrderByWithAggregationInput | refresh_tokensOrderByWithAggregationInput[]
    by: Refresh_tokensScalarFieldEnum[] | Refresh_tokensScalarFieldEnum
    having?: refresh_tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Refresh_tokensCountAggregateInputType | true
    _min?: Refresh_tokensMinAggregateInputType
    _max?: Refresh_tokensMaxAggregateInputType
  }

  export type Refresh_tokensGroupByOutputType = {
    id: string
    user_id: string
    token_hash: string
    expires_at: Date
    revoked_at: Date | null
    created_at: Date | null
    _count: Refresh_tokensCountAggregateOutputType | null
    _min: Refresh_tokensMinAggregateOutputType | null
    _max: Refresh_tokensMaxAggregateOutputType | null
  }

  type GetRefresh_tokensGroupByPayload<T extends refresh_tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Refresh_tokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Refresh_tokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Refresh_tokensGroupByOutputType[P]>
            : GetScalarType<T[P], Refresh_tokensGroupByOutputType[P]>
        }
      >
    >


  export type refresh_tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token_hash?: boolean
    expires_at?: boolean
    revoked_at?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refresh_tokens"]>



  export type refresh_tokensSelectScalar = {
    id?: boolean
    user_id?: boolean
    token_hash?: boolean
    expires_at?: boolean
    revoked_at?: boolean
    created_at?: boolean
  }

  export type refresh_tokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "token_hash" | "expires_at" | "revoked_at" | "created_at", ExtArgs["result"]["refresh_tokens"]>
  export type refresh_tokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $refresh_tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "refresh_tokens"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      token_hash: string
      expires_at: Date
      revoked_at: Date | null
      created_at: Date | null
    }, ExtArgs["result"]["refresh_tokens"]>
    composites: {}
  }

  type refresh_tokensGetPayload<S extends boolean | null | undefined | refresh_tokensDefaultArgs> = $Result.GetResult<Prisma.$refresh_tokensPayload, S>

  type refresh_tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<refresh_tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Refresh_tokensCountAggregateInputType | true
    }

  export interface refresh_tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['refresh_tokens'], meta: { name: 'refresh_tokens' } }
    /**
     * Find zero or one Refresh_tokens that matches the filter.
     * @param {refresh_tokensFindUniqueArgs} args - Arguments to find a Refresh_tokens
     * @example
     * // Get one Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends refresh_tokensFindUniqueArgs>(args: SelectSubset<T, refresh_tokensFindUniqueArgs<ExtArgs>>): Prisma__refresh_tokensClient<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Refresh_tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {refresh_tokensFindUniqueOrThrowArgs} args - Arguments to find a Refresh_tokens
     * @example
     * // Get one Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends refresh_tokensFindUniqueOrThrowArgs>(args: SelectSubset<T, refresh_tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__refresh_tokensClient<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refresh_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokensFindFirstArgs} args - Arguments to find a Refresh_tokens
     * @example
     * // Get one Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends refresh_tokensFindFirstArgs>(args?: SelectSubset<T, refresh_tokensFindFirstArgs<ExtArgs>>): Prisma__refresh_tokensClient<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refresh_tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokensFindFirstOrThrowArgs} args - Arguments to find a Refresh_tokens
     * @example
     * // Get one Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends refresh_tokensFindFirstOrThrowArgs>(args?: SelectSubset<T, refresh_tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__refresh_tokensClient<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Refresh_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.findMany()
     * 
     * // Get first 10 Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refresh_tokensWithIdOnly = await prisma.refresh_tokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends refresh_tokensFindManyArgs>(args?: SelectSubset<T, refresh_tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Refresh_tokens.
     * @param {refresh_tokensCreateArgs} args - Arguments to create a Refresh_tokens.
     * @example
     * // Create one Refresh_tokens
     * const Refresh_tokens = await prisma.refresh_tokens.create({
     *   data: {
     *     // ... data to create a Refresh_tokens
     *   }
     * })
     * 
     */
    create<T extends refresh_tokensCreateArgs>(args: SelectSubset<T, refresh_tokensCreateArgs<ExtArgs>>): Prisma__refresh_tokensClient<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Refresh_tokens.
     * @param {refresh_tokensCreateManyArgs} args - Arguments to create many Refresh_tokens.
     * @example
     * // Create many Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends refresh_tokensCreateManyArgs>(args?: SelectSubset<T, refresh_tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Refresh_tokens.
     * @param {refresh_tokensDeleteArgs} args - Arguments to delete one Refresh_tokens.
     * @example
     * // Delete one Refresh_tokens
     * const Refresh_tokens = await prisma.refresh_tokens.delete({
     *   where: {
     *     // ... filter to delete one Refresh_tokens
     *   }
     * })
     * 
     */
    delete<T extends refresh_tokensDeleteArgs>(args: SelectSubset<T, refresh_tokensDeleteArgs<ExtArgs>>): Prisma__refresh_tokensClient<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Refresh_tokens.
     * @param {refresh_tokensUpdateArgs} args - Arguments to update one Refresh_tokens.
     * @example
     * // Update one Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends refresh_tokensUpdateArgs>(args: SelectSubset<T, refresh_tokensUpdateArgs<ExtArgs>>): Prisma__refresh_tokensClient<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Refresh_tokens.
     * @param {refresh_tokensDeleteManyArgs} args - Arguments to filter Refresh_tokens to delete.
     * @example
     * // Delete a few Refresh_tokens
     * const { count } = await prisma.refresh_tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends refresh_tokensDeleteManyArgs>(args?: SelectSubset<T, refresh_tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refresh_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends refresh_tokensUpdateManyArgs>(args: SelectSubset<T, refresh_tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Refresh_tokens.
     * @param {refresh_tokensUpsertArgs} args - Arguments to update or create a Refresh_tokens.
     * @example
     * // Update or create a Refresh_tokens
     * const refresh_tokens = await prisma.refresh_tokens.upsert({
     *   create: {
     *     // ... data to create a Refresh_tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Refresh_tokens we want to update
     *   }
     * })
     */
    upsert<T extends refresh_tokensUpsertArgs>(args: SelectSubset<T, refresh_tokensUpsertArgs<ExtArgs>>): Prisma__refresh_tokensClient<$Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Refresh_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokensCountArgs} args - Arguments to filter Refresh_tokens to count.
     * @example
     * // Count the number of Refresh_tokens
     * const count = await prisma.refresh_tokens.count({
     *   where: {
     *     // ... the filter for the Refresh_tokens we want to count
     *   }
     * })
    **/
    count<T extends refresh_tokensCountArgs>(
      args?: Subset<T, refresh_tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Refresh_tokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Refresh_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Refresh_tokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Refresh_tokensAggregateArgs>(args: Subset<T, Refresh_tokensAggregateArgs>): Prisma.PrismaPromise<GetRefresh_tokensAggregateType<T>>

    /**
     * Group by Refresh_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {refresh_tokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends refresh_tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: refresh_tokensGroupByArgs['orderBy'] }
        : { orderBy?: refresh_tokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, refresh_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefresh_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the refresh_tokens model
   */
  readonly fields: refresh_tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for refresh_tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__refresh_tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the refresh_tokens model
   */
  interface refresh_tokensFieldRefs {
    readonly id: FieldRef<"refresh_tokens", 'String'>
    readonly user_id: FieldRef<"refresh_tokens", 'String'>
    readonly token_hash: FieldRef<"refresh_tokens", 'String'>
    readonly expires_at: FieldRef<"refresh_tokens", 'DateTime'>
    readonly revoked_at: FieldRef<"refresh_tokens", 'DateTime'>
    readonly created_at: FieldRef<"refresh_tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * refresh_tokens findUnique
   */
  export type refresh_tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_tokens
     */
    omit?: refresh_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * Filter, which refresh_tokens to fetch.
     */
    where: refresh_tokensWhereUniqueInput
  }

  /**
   * refresh_tokens findUniqueOrThrow
   */
  export type refresh_tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_tokens
     */
    omit?: refresh_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * Filter, which refresh_tokens to fetch.
     */
    where: refresh_tokensWhereUniqueInput
  }

  /**
   * refresh_tokens findFirst
   */
  export type refresh_tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_tokens
     */
    omit?: refresh_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * Filter, which refresh_tokens to fetch.
     */
    where?: refresh_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refresh_tokens to fetch.
     */
    orderBy?: refresh_tokensOrderByWithRelationInput | refresh_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for refresh_tokens.
     */
    cursor?: refresh_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refresh_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of refresh_tokens.
     */
    distinct?: Refresh_tokensScalarFieldEnum | Refresh_tokensScalarFieldEnum[]
  }

  /**
   * refresh_tokens findFirstOrThrow
   */
  export type refresh_tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_tokens
     */
    omit?: refresh_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * Filter, which refresh_tokens to fetch.
     */
    where?: refresh_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refresh_tokens to fetch.
     */
    orderBy?: refresh_tokensOrderByWithRelationInput | refresh_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for refresh_tokens.
     */
    cursor?: refresh_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refresh_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of refresh_tokens.
     */
    distinct?: Refresh_tokensScalarFieldEnum | Refresh_tokensScalarFieldEnum[]
  }

  /**
   * refresh_tokens findMany
   */
  export type refresh_tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_tokens
     */
    omit?: refresh_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * Filter, which refresh_tokens to fetch.
     */
    where?: refresh_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of refresh_tokens to fetch.
     */
    orderBy?: refresh_tokensOrderByWithRelationInput | refresh_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing refresh_tokens.
     */
    cursor?: refresh_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` refresh_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` refresh_tokens.
     */
    skip?: number
    distinct?: Refresh_tokensScalarFieldEnum | Refresh_tokensScalarFieldEnum[]
  }

  /**
   * refresh_tokens create
   */
  export type refresh_tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_tokens
     */
    omit?: refresh_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * The data needed to create a refresh_tokens.
     */
    data: XOR<refresh_tokensCreateInput, refresh_tokensUncheckedCreateInput>
  }

  /**
   * refresh_tokens createMany
   */
  export type refresh_tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many refresh_tokens.
     */
    data: refresh_tokensCreateManyInput | refresh_tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * refresh_tokens update
   */
  export type refresh_tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_tokens
     */
    omit?: refresh_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * The data needed to update a refresh_tokens.
     */
    data: XOR<refresh_tokensUpdateInput, refresh_tokensUncheckedUpdateInput>
    /**
     * Choose, which refresh_tokens to update.
     */
    where: refresh_tokensWhereUniqueInput
  }

  /**
   * refresh_tokens updateMany
   */
  export type refresh_tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update refresh_tokens.
     */
    data: XOR<refresh_tokensUpdateManyMutationInput, refresh_tokensUncheckedUpdateManyInput>
    /**
     * Filter which refresh_tokens to update
     */
    where?: refresh_tokensWhereInput
    /**
     * Limit how many refresh_tokens to update.
     */
    limit?: number
  }

  /**
   * refresh_tokens upsert
   */
  export type refresh_tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_tokens
     */
    omit?: refresh_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * The filter to search for the refresh_tokens to update in case it exists.
     */
    where: refresh_tokensWhereUniqueInput
    /**
     * In case the refresh_tokens found by the `where` argument doesn't exist, create a new refresh_tokens with this data.
     */
    create: XOR<refresh_tokensCreateInput, refresh_tokensUncheckedCreateInput>
    /**
     * In case the refresh_tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<refresh_tokensUpdateInput, refresh_tokensUncheckedUpdateInput>
  }

  /**
   * refresh_tokens delete
   */
  export type refresh_tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_tokens
     */
    omit?: refresh_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
    /**
     * Filter which refresh_tokens to delete.
     */
    where: refresh_tokensWhereUniqueInput
  }

  /**
   * refresh_tokens deleteMany
   */
  export type refresh_tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which refresh_tokens to delete
     */
    where?: refresh_tokensWhereInput
    /**
     * Limit how many refresh_tokens to delete.
     */
    limit?: number
  }

  /**
   * refresh_tokens without action
   */
  export type refresh_tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the refresh_tokens
     */
    select?: refresh_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the refresh_tokens
     */
    omit?: refresh_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: refresh_tokensInclude<ExtArgs> | null
  }


  /**
   * Model email_otps
   */

  export type AggregateEmail_otps = {
    _count: Email_otpsCountAggregateOutputType | null
    _min: Email_otpsMinAggregateOutputType | null
    _max: Email_otpsMaxAggregateOutputType | null
  }

  export type Email_otpsMinAggregateOutputType = {
    id: string | null
    email: string | null
    otp: string | null
    expired_at: Date | null
    is_used: boolean | null
    created_at: Date | null
  }

  export type Email_otpsMaxAggregateOutputType = {
    id: string | null
    email: string | null
    otp: string | null
    expired_at: Date | null
    is_used: boolean | null
    created_at: Date | null
  }

  export type Email_otpsCountAggregateOutputType = {
    id: number
    email: number
    otp: number
    expired_at: number
    is_used: number
    created_at: number
    _all: number
  }


  export type Email_otpsMinAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expired_at?: true
    is_used?: true
    created_at?: true
  }

  export type Email_otpsMaxAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expired_at?: true
    is_used?: true
    created_at?: true
  }

  export type Email_otpsCountAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expired_at?: true
    is_used?: true
    created_at?: true
    _all?: true
  }

  export type Email_otpsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which email_otps to aggregate.
     */
    where?: email_otpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_otps to fetch.
     */
    orderBy?: email_otpsOrderByWithRelationInput | email_otpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: email_otpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned email_otps
    **/
    _count?: true | Email_otpsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Email_otpsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Email_otpsMaxAggregateInputType
  }

  export type GetEmail_otpsAggregateType<T extends Email_otpsAggregateArgs> = {
        [P in keyof T & keyof AggregateEmail_otps]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmail_otps[P]>
      : GetScalarType<T[P], AggregateEmail_otps[P]>
  }




  export type email_otpsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: email_otpsWhereInput
    orderBy?: email_otpsOrderByWithAggregationInput | email_otpsOrderByWithAggregationInput[]
    by: Email_otpsScalarFieldEnum[] | Email_otpsScalarFieldEnum
    having?: email_otpsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Email_otpsCountAggregateInputType | true
    _min?: Email_otpsMinAggregateInputType
    _max?: Email_otpsMaxAggregateInputType
  }

  export type Email_otpsGroupByOutputType = {
    id: string
    email: string
    otp: string
    expired_at: Date
    is_used: boolean | null
    created_at: Date | null
    _count: Email_otpsCountAggregateOutputType | null
    _min: Email_otpsMinAggregateOutputType | null
    _max: Email_otpsMaxAggregateOutputType | null
  }

  type GetEmail_otpsGroupByPayload<T extends email_otpsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Email_otpsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Email_otpsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Email_otpsGroupByOutputType[P]>
            : GetScalarType<T[P], Email_otpsGroupByOutputType[P]>
        }
      >
    >


  export type email_otpsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    expired_at?: boolean
    is_used?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["email_otps"]>



  export type email_otpsSelectScalar = {
    id?: boolean
    email?: boolean
    otp?: boolean
    expired_at?: boolean
    is_used?: boolean
    created_at?: boolean
  }

  export type email_otpsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "otp" | "expired_at" | "is_used" | "created_at", ExtArgs["result"]["email_otps"]>

  export type $email_otpsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "email_otps"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      otp: string
      expired_at: Date
      is_used: boolean | null
      created_at: Date | null
    }, ExtArgs["result"]["email_otps"]>
    composites: {}
  }

  type email_otpsGetPayload<S extends boolean | null | undefined | email_otpsDefaultArgs> = $Result.GetResult<Prisma.$email_otpsPayload, S>

  type email_otpsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<email_otpsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Email_otpsCountAggregateInputType | true
    }

  export interface email_otpsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['email_otps'], meta: { name: 'email_otps' } }
    /**
     * Find zero or one Email_otps that matches the filter.
     * @param {email_otpsFindUniqueArgs} args - Arguments to find a Email_otps
     * @example
     * // Get one Email_otps
     * const email_otps = await prisma.email_otps.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends email_otpsFindUniqueArgs>(args: SelectSubset<T, email_otpsFindUniqueArgs<ExtArgs>>): Prisma__email_otpsClient<$Result.GetResult<Prisma.$email_otpsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Email_otps that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {email_otpsFindUniqueOrThrowArgs} args - Arguments to find a Email_otps
     * @example
     * // Get one Email_otps
     * const email_otps = await prisma.email_otps.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends email_otpsFindUniqueOrThrowArgs>(args: SelectSubset<T, email_otpsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__email_otpsClient<$Result.GetResult<Prisma.$email_otpsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email_otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_otpsFindFirstArgs} args - Arguments to find a Email_otps
     * @example
     * // Get one Email_otps
     * const email_otps = await prisma.email_otps.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends email_otpsFindFirstArgs>(args?: SelectSubset<T, email_otpsFindFirstArgs<ExtArgs>>): Prisma__email_otpsClient<$Result.GetResult<Prisma.$email_otpsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email_otps that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_otpsFindFirstOrThrowArgs} args - Arguments to find a Email_otps
     * @example
     * // Get one Email_otps
     * const email_otps = await prisma.email_otps.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends email_otpsFindFirstOrThrowArgs>(args?: SelectSubset<T, email_otpsFindFirstOrThrowArgs<ExtArgs>>): Prisma__email_otpsClient<$Result.GetResult<Prisma.$email_otpsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Email_otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_otpsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Email_otps
     * const email_otps = await prisma.email_otps.findMany()
     * 
     * // Get first 10 Email_otps
     * const email_otps = await prisma.email_otps.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const email_otpsWithIdOnly = await prisma.email_otps.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends email_otpsFindManyArgs>(args?: SelectSubset<T, email_otpsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_otpsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Email_otps.
     * @param {email_otpsCreateArgs} args - Arguments to create a Email_otps.
     * @example
     * // Create one Email_otps
     * const Email_otps = await prisma.email_otps.create({
     *   data: {
     *     // ... data to create a Email_otps
     *   }
     * })
     * 
     */
    create<T extends email_otpsCreateArgs>(args: SelectSubset<T, email_otpsCreateArgs<ExtArgs>>): Prisma__email_otpsClient<$Result.GetResult<Prisma.$email_otpsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Email_otps.
     * @param {email_otpsCreateManyArgs} args - Arguments to create many Email_otps.
     * @example
     * // Create many Email_otps
     * const email_otps = await prisma.email_otps.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends email_otpsCreateManyArgs>(args?: SelectSubset<T, email_otpsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Email_otps.
     * @param {email_otpsDeleteArgs} args - Arguments to delete one Email_otps.
     * @example
     * // Delete one Email_otps
     * const Email_otps = await prisma.email_otps.delete({
     *   where: {
     *     // ... filter to delete one Email_otps
     *   }
     * })
     * 
     */
    delete<T extends email_otpsDeleteArgs>(args: SelectSubset<T, email_otpsDeleteArgs<ExtArgs>>): Prisma__email_otpsClient<$Result.GetResult<Prisma.$email_otpsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Email_otps.
     * @param {email_otpsUpdateArgs} args - Arguments to update one Email_otps.
     * @example
     * // Update one Email_otps
     * const email_otps = await prisma.email_otps.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends email_otpsUpdateArgs>(args: SelectSubset<T, email_otpsUpdateArgs<ExtArgs>>): Prisma__email_otpsClient<$Result.GetResult<Prisma.$email_otpsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Email_otps.
     * @param {email_otpsDeleteManyArgs} args - Arguments to filter Email_otps to delete.
     * @example
     * // Delete a few Email_otps
     * const { count } = await prisma.email_otps.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends email_otpsDeleteManyArgs>(args?: SelectSubset<T, email_otpsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Email_otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_otpsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Email_otps
     * const email_otps = await prisma.email_otps.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends email_otpsUpdateManyArgs>(args: SelectSubset<T, email_otpsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Email_otps.
     * @param {email_otpsUpsertArgs} args - Arguments to update or create a Email_otps.
     * @example
     * // Update or create a Email_otps
     * const email_otps = await prisma.email_otps.upsert({
     *   create: {
     *     // ... data to create a Email_otps
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Email_otps we want to update
     *   }
     * })
     */
    upsert<T extends email_otpsUpsertArgs>(args: SelectSubset<T, email_otpsUpsertArgs<ExtArgs>>): Prisma__email_otpsClient<$Result.GetResult<Prisma.$email_otpsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Email_otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_otpsCountArgs} args - Arguments to filter Email_otps to count.
     * @example
     * // Count the number of Email_otps
     * const count = await prisma.email_otps.count({
     *   where: {
     *     // ... the filter for the Email_otps we want to count
     *   }
     * })
    **/
    count<T extends email_otpsCountArgs>(
      args?: Subset<T, email_otpsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Email_otpsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Email_otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Email_otpsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Email_otpsAggregateArgs>(args: Subset<T, Email_otpsAggregateArgs>): Prisma.PrismaPromise<GetEmail_otpsAggregateType<T>>

    /**
     * Group by Email_otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_otpsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends email_otpsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: email_otpsGroupByArgs['orderBy'] }
        : { orderBy?: email_otpsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, email_otpsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmail_otpsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the email_otps model
   */
  readonly fields: email_otpsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for email_otps.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__email_otpsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the email_otps model
   */
  interface email_otpsFieldRefs {
    readonly id: FieldRef<"email_otps", 'String'>
    readonly email: FieldRef<"email_otps", 'String'>
    readonly otp: FieldRef<"email_otps", 'String'>
    readonly expired_at: FieldRef<"email_otps", 'DateTime'>
    readonly is_used: FieldRef<"email_otps", 'Boolean'>
    readonly created_at: FieldRef<"email_otps", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * email_otps findUnique
   */
  export type email_otpsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_otps
     */
    select?: email_otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_otps
     */
    omit?: email_otpsOmit<ExtArgs> | null
    /**
     * Filter, which email_otps to fetch.
     */
    where: email_otpsWhereUniqueInput
  }

  /**
   * email_otps findUniqueOrThrow
   */
  export type email_otpsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_otps
     */
    select?: email_otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_otps
     */
    omit?: email_otpsOmit<ExtArgs> | null
    /**
     * Filter, which email_otps to fetch.
     */
    where: email_otpsWhereUniqueInput
  }

  /**
   * email_otps findFirst
   */
  export type email_otpsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_otps
     */
    select?: email_otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_otps
     */
    omit?: email_otpsOmit<ExtArgs> | null
    /**
     * Filter, which email_otps to fetch.
     */
    where?: email_otpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_otps to fetch.
     */
    orderBy?: email_otpsOrderByWithRelationInput | email_otpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for email_otps.
     */
    cursor?: email_otpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of email_otps.
     */
    distinct?: Email_otpsScalarFieldEnum | Email_otpsScalarFieldEnum[]
  }

  /**
   * email_otps findFirstOrThrow
   */
  export type email_otpsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_otps
     */
    select?: email_otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_otps
     */
    omit?: email_otpsOmit<ExtArgs> | null
    /**
     * Filter, which email_otps to fetch.
     */
    where?: email_otpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_otps to fetch.
     */
    orderBy?: email_otpsOrderByWithRelationInput | email_otpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for email_otps.
     */
    cursor?: email_otpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of email_otps.
     */
    distinct?: Email_otpsScalarFieldEnum | Email_otpsScalarFieldEnum[]
  }

  /**
   * email_otps findMany
   */
  export type email_otpsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_otps
     */
    select?: email_otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_otps
     */
    omit?: email_otpsOmit<ExtArgs> | null
    /**
     * Filter, which email_otps to fetch.
     */
    where?: email_otpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of email_otps to fetch.
     */
    orderBy?: email_otpsOrderByWithRelationInput | email_otpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing email_otps.
     */
    cursor?: email_otpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` email_otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` email_otps.
     */
    skip?: number
    distinct?: Email_otpsScalarFieldEnum | Email_otpsScalarFieldEnum[]
  }

  /**
   * email_otps create
   */
  export type email_otpsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_otps
     */
    select?: email_otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_otps
     */
    omit?: email_otpsOmit<ExtArgs> | null
    /**
     * The data needed to create a email_otps.
     */
    data: XOR<email_otpsCreateInput, email_otpsUncheckedCreateInput>
  }

  /**
   * email_otps createMany
   */
  export type email_otpsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many email_otps.
     */
    data: email_otpsCreateManyInput | email_otpsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * email_otps update
   */
  export type email_otpsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_otps
     */
    select?: email_otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_otps
     */
    omit?: email_otpsOmit<ExtArgs> | null
    /**
     * The data needed to update a email_otps.
     */
    data: XOR<email_otpsUpdateInput, email_otpsUncheckedUpdateInput>
    /**
     * Choose, which email_otps to update.
     */
    where: email_otpsWhereUniqueInput
  }

  /**
   * email_otps updateMany
   */
  export type email_otpsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update email_otps.
     */
    data: XOR<email_otpsUpdateManyMutationInput, email_otpsUncheckedUpdateManyInput>
    /**
     * Filter which email_otps to update
     */
    where?: email_otpsWhereInput
    /**
     * Limit how many email_otps to update.
     */
    limit?: number
  }

  /**
   * email_otps upsert
   */
  export type email_otpsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_otps
     */
    select?: email_otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_otps
     */
    omit?: email_otpsOmit<ExtArgs> | null
    /**
     * The filter to search for the email_otps to update in case it exists.
     */
    where: email_otpsWhereUniqueInput
    /**
     * In case the email_otps found by the `where` argument doesn't exist, create a new email_otps with this data.
     */
    create: XOR<email_otpsCreateInput, email_otpsUncheckedCreateInput>
    /**
     * In case the email_otps was found with the provided `where` argument, update it with this data.
     */
    update: XOR<email_otpsUpdateInput, email_otpsUncheckedUpdateInput>
  }

  /**
   * email_otps delete
   */
  export type email_otpsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_otps
     */
    select?: email_otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_otps
     */
    omit?: email_otpsOmit<ExtArgs> | null
    /**
     * Filter which email_otps to delete.
     */
    where: email_otpsWhereUniqueInput
  }

  /**
   * email_otps deleteMany
   */
  export type email_otpsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which email_otps to delete
     */
    where?: email_otpsWhereInput
    /**
     * Limit how many email_otps to delete.
     */
    limit?: number
  }

  /**
   * email_otps without action
   */
  export type email_otpsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_otps
     */
    select?: email_otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the email_otps
     */
    omit?: email_otpsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AnswersScalarFieldEnum: {
    id: 'id',
    content: 'content',
    is_correct: 'is_correct',
    question_id: 'question_id',
    created_at: 'created_at'
  };

  export type AnswersScalarFieldEnum = (typeof AnswersScalarFieldEnum)[keyof typeof AnswersScalarFieldEnum]


  export const AttemptsScalarFieldEnum: {
    id: 'id',
    exam_id: 'exam_id',
    student_id: 'student_id',
    started_at: 'started_at',
    submitted_at: 'submitted_at',
    status: 'status',
    score: 'score',
    total_correct: 'total_correct',
    total_wrong: 'total_wrong',
    created_at: 'created_at'
  };

  export type AttemptsScalarFieldEnum = (typeof AttemptsScalarFieldEnum)[keyof typeof AttemptsScalarFieldEnum]


  export const Exam_questionsScalarFieldEnum: {
    exam_id: 'exam_id',
    question_id: 'question_id',
    order_index: 'order_index',
    score: 'score'
  };

  export type Exam_questionsScalarFieldEnum = (typeof Exam_questionsScalarFieldEnum)[keyof typeof Exam_questionsScalarFieldEnum]


  export const ExamsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    description: 'description',
    duration: 'duration',
    total_score: 'total_score',
    status: 'status',
    is_public: 'is_public',
    access_code: 'access_code',
    start_time: 'start_time',
    end_time: 'end_time',
    shuffle_questions: 'shuffle_questions',
    shuffle_answers: 'shuffle_answers',
    show_result_after_submit: 'show_result_after_submit',
    max_attempts: 'max_attempts',
    subject_id: 'subject_id',
    created_by_id: 'created_by_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ExamsScalarFieldEnum = (typeof ExamsScalarFieldEnum)[keyof typeof ExamsScalarFieldEnum]


  export const Exam_classesScalarFieldEnum: {
    exam_id: 'exam_id',
    class_id: 'class_id',
    created_at: 'created_at'
  };

  export type Exam_classesScalarFieldEnum = (typeof Exam_classesScalarFieldEnum)[keyof typeof Exam_classesScalarFieldEnum]


  export const QuestionsScalarFieldEnum: {
    id: 'id',
    content: 'content',
    explanation: 'explanation',
    image_url: 'image_url',
    level: 'level',
    type: 'type',
    subject_id: 'subject_id',
    created_by_id: 'created_by_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type QuestionsScalarFieldEnum = (typeof QuestionsScalarFieldEnum)[keyof typeof QuestionsScalarFieldEnum]


  export const Student_answersScalarFieldEnum: {
    id: 'id',
    attempt_id: 'attempt_id',
    question_id: 'question_id',
    answer_id: 'answer_id',
    created_at: 'created_at'
  };

  export type Student_answersScalarFieldEnum = (typeof Student_answersScalarFieldEnum)[keyof typeof Student_answersScalarFieldEnum]


  export const SubjectsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    created_at: 'created_at'
  };

  export type SubjectsScalarFieldEnum = (typeof SubjectsScalarFieldEnum)[keyof typeof SubjectsScalarFieldEnum]


  export const ClassesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    description: 'description',
    school_year: 'school_year',
    teacher_id: 'teacher_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ClassesScalarFieldEnum = (typeof ClassesScalarFieldEnum)[keyof typeof ClassesScalarFieldEnum]


  export const Class_studentsScalarFieldEnum: {
    class_id: 'class_id',
    student_id: 'student_id',
    joined_at: 'joined_at'
  };

  export type Class_studentsScalarFieldEnum = (typeof Class_studentsScalarFieldEnum)[keyof typeof Class_studentsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    avatar: 'avatar',
    role: 'role',
    is_active: 'is_active',
    email_verified: 'email_verified',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Refresh_tokensScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    token_hash: 'token_hash',
    expires_at: 'expires_at',
    revoked_at: 'revoked_at',
    created_at: 'created_at'
  };

  export type Refresh_tokensScalarFieldEnum = (typeof Refresh_tokensScalarFieldEnum)[keyof typeof Refresh_tokensScalarFieldEnum]


  export const Email_otpsScalarFieldEnum: {
    id: 'id',
    email: 'email',
    otp: 'otp',
    expired_at: 'expired_at',
    is_used: 'is_used',
    created_at: 'created_at'
  };

  export type Email_otpsScalarFieldEnum = (typeof Email_otpsScalarFieldEnum)[keyof typeof Email_otpsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const answersOrderByRelevanceFieldEnum: {
    id: 'id',
    content: 'content',
    question_id: 'question_id'
  };

  export type answersOrderByRelevanceFieldEnum = (typeof answersOrderByRelevanceFieldEnum)[keyof typeof answersOrderByRelevanceFieldEnum]


  export const attemptsOrderByRelevanceFieldEnum: {
    id: 'id',
    exam_id: 'exam_id',
    student_id: 'student_id'
  };

  export type attemptsOrderByRelevanceFieldEnum = (typeof attemptsOrderByRelevanceFieldEnum)[keyof typeof attemptsOrderByRelevanceFieldEnum]


  export const exam_questionsOrderByRelevanceFieldEnum: {
    exam_id: 'exam_id',
    question_id: 'question_id'
  };

  export type exam_questionsOrderByRelevanceFieldEnum = (typeof exam_questionsOrderByRelevanceFieldEnum)[keyof typeof exam_questionsOrderByRelevanceFieldEnum]


  export const examsOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    description: 'description',
    access_code: 'access_code',
    subject_id: 'subject_id',
    created_by_id: 'created_by_id'
  };

  export type examsOrderByRelevanceFieldEnum = (typeof examsOrderByRelevanceFieldEnum)[keyof typeof examsOrderByRelevanceFieldEnum]


  export const exam_classesOrderByRelevanceFieldEnum: {
    exam_id: 'exam_id',
    class_id: 'class_id'
  };

  export type exam_classesOrderByRelevanceFieldEnum = (typeof exam_classesOrderByRelevanceFieldEnum)[keyof typeof exam_classesOrderByRelevanceFieldEnum]


  export const questionsOrderByRelevanceFieldEnum: {
    id: 'id',
    content: 'content',
    explanation: 'explanation',
    image_url: 'image_url',
    subject_id: 'subject_id',
    created_by_id: 'created_by_id'
  };

  export type questionsOrderByRelevanceFieldEnum = (typeof questionsOrderByRelevanceFieldEnum)[keyof typeof questionsOrderByRelevanceFieldEnum]


  export const student_answersOrderByRelevanceFieldEnum: {
    id: 'id',
    attempt_id: 'attempt_id',
    question_id: 'question_id',
    answer_id: 'answer_id'
  };

  export type student_answersOrderByRelevanceFieldEnum = (typeof student_answersOrderByRelevanceFieldEnum)[keyof typeof student_answersOrderByRelevanceFieldEnum]


  export const subjectsOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description'
  };

  export type subjectsOrderByRelevanceFieldEnum = (typeof subjectsOrderByRelevanceFieldEnum)[keyof typeof subjectsOrderByRelevanceFieldEnum]


  export const classesOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    description: 'description',
    school_year: 'school_year',
    teacher_id: 'teacher_id'
  };

  export type classesOrderByRelevanceFieldEnum = (typeof classesOrderByRelevanceFieldEnum)[keyof typeof classesOrderByRelevanceFieldEnum]


  export const class_studentsOrderByRelevanceFieldEnum: {
    class_id: 'class_id',
    student_id: 'student_id'
  };

  export type class_studentsOrderByRelevanceFieldEnum = (typeof class_studentsOrderByRelevanceFieldEnum)[keyof typeof class_studentsOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    avatar: 'avatar'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const refresh_tokensOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    token_hash: 'token_hash'
  };

  export type refresh_tokensOrderByRelevanceFieldEnum = (typeof refresh_tokensOrderByRelevanceFieldEnum)[keyof typeof refresh_tokensOrderByRelevanceFieldEnum]


  export const email_otpsOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    otp: 'otp'
  };

  export type email_otpsOrderByRelevanceFieldEnum = (typeof email_otpsOrderByRelevanceFieldEnum)[keyof typeof email_otpsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'attempt_status_enum'
   */
  export type Enumattempt_status_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'attempt_status_enum'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'exam_status_enum'
   */
  export type Enumexam_status_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'exam_status_enum'>
    


  /**
   * Reference to a field of type 'question_type_enum'
   */
  export type Enumquestion_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'question_type_enum'>
    


  /**
   * Reference to a field of type 'role_enum'
   */
  export type Enumrole_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role_enum'>
    
  /**
   * Deep Input Types
   */


  export type answersWhereInput = {
    AND?: answersWhereInput | answersWhereInput[]
    OR?: answersWhereInput[]
    NOT?: answersWhereInput | answersWhereInput[]
    id?: StringFilter<"answers"> | string
    content?: StringFilter<"answers"> | string
    is_correct?: BoolNullableFilter<"answers"> | boolean | null
    question_id?: StringFilter<"answers"> | string
    created_at?: DateTimeNullableFilter<"answers"> | Date | string | null
    questions?: XOR<QuestionsScalarRelationFilter, questionsWhereInput>
    student_answers?: Student_answersListRelationFilter
  }

  export type answersOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    is_correct?: SortOrderInput | SortOrder
    question_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    questions?: questionsOrderByWithRelationInput
    student_answers?: student_answersOrderByRelationAggregateInput
    _relevance?: answersOrderByRelevanceInput
  }

  export type answersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: answersWhereInput | answersWhereInput[]
    OR?: answersWhereInput[]
    NOT?: answersWhereInput | answersWhereInput[]
    content?: StringFilter<"answers"> | string
    is_correct?: BoolNullableFilter<"answers"> | boolean | null
    question_id?: StringFilter<"answers"> | string
    created_at?: DateTimeNullableFilter<"answers"> | Date | string | null
    questions?: XOR<QuestionsScalarRelationFilter, questionsWhereInput>
    student_answers?: Student_answersListRelationFilter
  }, "id">

  export type answersOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    is_correct?: SortOrderInput | SortOrder
    question_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: answersCountOrderByAggregateInput
    _max?: answersMaxOrderByAggregateInput
    _min?: answersMinOrderByAggregateInput
  }

  export type answersScalarWhereWithAggregatesInput = {
    AND?: answersScalarWhereWithAggregatesInput | answersScalarWhereWithAggregatesInput[]
    OR?: answersScalarWhereWithAggregatesInput[]
    NOT?: answersScalarWhereWithAggregatesInput | answersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"answers"> | string
    content?: StringWithAggregatesFilter<"answers"> | string
    is_correct?: BoolNullableWithAggregatesFilter<"answers"> | boolean | null
    question_id?: StringWithAggregatesFilter<"answers"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"answers"> | Date | string | null
  }

  export type attemptsWhereInput = {
    AND?: attemptsWhereInput | attemptsWhereInput[]
    OR?: attemptsWhereInput[]
    NOT?: attemptsWhereInput | attemptsWhereInput[]
    id?: StringFilter<"attempts"> | string
    exam_id?: StringFilter<"attempts"> | string
    student_id?: StringFilter<"attempts"> | string
    started_at?: DateTimeNullableFilter<"attempts"> | Date | string | null
    submitted_at?: DateTimeNullableFilter<"attempts"> | Date | string | null
    status?: Enumattempt_status_enumNullableFilter<"attempts"> | $Enums.attempt_status_enum | null
    score?: FloatNullableFilter<"attempts"> | number | null
    total_correct?: IntNullableFilter<"attempts"> | number | null
    total_wrong?: IntNullableFilter<"attempts"> | number | null
    created_at?: DateTimeNullableFilter<"attempts"> | Date | string | null
    exams?: XOR<ExamsScalarRelationFilter, examsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    student_answers?: Student_answersListRelationFilter
  }

  export type attemptsOrderByWithRelationInput = {
    id?: SortOrder
    exam_id?: SortOrder
    student_id?: SortOrder
    started_at?: SortOrderInput | SortOrder
    submitted_at?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    total_correct?: SortOrderInput | SortOrder
    total_wrong?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    exams?: examsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    student_answers?: student_answersOrderByRelationAggregateInput
    _relevance?: attemptsOrderByRelevanceInput
  }

  export type attemptsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: attemptsWhereInput | attemptsWhereInput[]
    OR?: attemptsWhereInput[]
    NOT?: attemptsWhereInput | attemptsWhereInput[]
    exam_id?: StringFilter<"attempts"> | string
    student_id?: StringFilter<"attempts"> | string
    started_at?: DateTimeNullableFilter<"attempts"> | Date | string | null
    submitted_at?: DateTimeNullableFilter<"attempts"> | Date | string | null
    status?: Enumattempt_status_enumNullableFilter<"attempts"> | $Enums.attempt_status_enum | null
    score?: FloatNullableFilter<"attempts"> | number | null
    total_correct?: IntNullableFilter<"attempts"> | number | null
    total_wrong?: IntNullableFilter<"attempts"> | number | null
    created_at?: DateTimeNullableFilter<"attempts"> | Date | string | null
    exams?: XOR<ExamsScalarRelationFilter, examsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    student_answers?: Student_answersListRelationFilter
  }, "id">

  export type attemptsOrderByWithAggregationInput = {
    id?: SortOrder
    exam_id?: SortOrder
    student_id?: SortOrder
    started_at?: SortOrderInput | SortOrder
    submitted_at?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    total_correct?: SortOrderInput | SortOrder
    total_wrong?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: attemptsCountOrderByAggregateInput
    _avg?: attemptsAvgOrderByAggregateInput
    _max?: attemptsMaxOrderByAggregateInput
    _min?: attemptsMinOrderByAggregateInput
    _sum?: attemptsSumOrderByAggregateInput
  }

  export type attemptsScalarWhereWithAggregatesInput = {
    AND?: attemptsScalarWhereWithAggregatesInput | attemptsScalarWhereWithAggregatesInput[]
    OR?: attemptsScalarWhereWithAggregatesInput[]
    NOT?: attemptsScalarWhereWithAggregatesInput | attemptsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"attempts"> | string
    exam_id?: StringWithAggregatesFilter<"attempts"> | string
    student_id?: StringWithAggregatesFilter<"attempts"> | string
    started_at?: DateTimeNullableWithAggregatesFilter<"attempts"> | Date | string | null
    submitted_at?: DateTimeNullableWithAggregatesFilter<"attempts"> | Date | string | null
    status?: Enumattempt_status_enumNullableWithAggregatesFilter<"attempts"> | $Enums.attempt_status_enum | null
    score?: FloatNullableWithAggregatesFilter<"attempts"> | number | null
    total_correct?: IntNullableWithAggregatesFilter<"attempts"> | number | null
    total_wrong?: IntNullableWithAggregatesFilter<"attempts"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"attempts"> | Date | string | null
  }

  export type exam_questionsWhereInput = {
    AND?: exam_questionsWhereInput | exam_questionsWhereInput[]
    OR?: exam_questionsWhereInput[]
    NOT?: exam_questionsWhereInput | exam_questionsWhereInput[]
    exam_id?: StringFilter<"exam_questions"> | string
    question_id?: StringFilter<"exam_questions"> | string
    order_index?: IntFilter<"exam_questions"> | number
    score?: FloatNullableFilter<"exam_questions"> | number | null
    exams?: XOR<ExamsScalarRelationFilter, examsWhereInput>
    questions?: XOR<QuestionsScalarRelationFilter, questionsWhereInput>
  }

  export type exam_questionsOrderByWithRelationInput = {
    exam_id?: SortOrder
    question_id?: SortOrder
    order_index?: SortOrder
    score?: SortOrderInput | SortOrder
    exams?: examsOrderByWithRelationInput
    questions?: questionsOrderByWithRelationInput
    _relevance?: exam_questionsOrderByRelevanceInput
  }

  export type exam_questionsWhereUniqueInput = Prisma.AtLeast<{
    exam_id_question_id?: exam_questionsExam_idQuestion_idCompoundUniqueInput
    AND?: exam_questionsWhereInput | exam_questionsWhereInput[]
    OR?: exam_questionsWhereInput[]
    NOT?: exam_questionsWhereInput | exam_questionsWhereInput[]
    exam_id?: StringFilter<"exam_questions"> | string
    question_id?: StringFilter<"exam_questions"> | string
    order_index?: IntFilter<"exam_questions"> | number
    score?: FloatNullableFilter<"exam_questions"> | number | null
    exams?: XOR<ExamsScalarRelationFilter, examsWhereInput>
    questions?: XOR<QuestionsScalarRelationFilter, questionsWhereInput>
  }, "exam_id_question_id">

  export type exam_questionsOrderByWithAggregationInput = {
    exam_id?: SortOrder
    question_id?: SortOrder
    order_index?: SortOrder
    score?: SortOrderInput | SortOrder
    _count?: exam_questionsCountOrderByAggregateInput
    _avg?: exam_questionsAvgOrderByAggregateInput
    _max?: exam_questionsMaxOrderByAggregateInput
    _min?: exam_questionsMinOrderByAggregateInput
    _sum?: exam_questionsSumOrderByAggregateInput
  }

  export type exam_questionsScalarWhereWithAggregatesInput = {
    AND?: exam_questionsScalarWhereWithAggregatesInput | exam_questionsScalarWhereWithAggregatesInput[]
    OR?: exam_questionsScalarWhereWithAggregatesInput[]
    NOT?: exam_questionsScalarWhereWithAggregatesInput | exam_questionsScalarWhereWithAggregatesInput[]
    exam_id?: StringWithAggregatesFilter<"exam_questions"> | string
    question_id?: StringWithAggregatesFilter<"exam_questions"> | string
    order_index?: IntWithAggregatesFilter<"exam_questions"> | number
    score?: FloatNullableWithAggregatesFilter<"exam_questions"> | number | null
  }

  export type examsWhereInput = {
    AND?: examsWhereInput | examsWhereInput[]
    OR?: examsWhereInput[]
    NOT?: examsWhereInput | examsWhereInput[]
    id?: StringFilter<"exams"> | string
    title?: StringFilter<"exams"> | string
    slug?: StringFilter<"exams"> | string
    description?: StringNullableFilter<"exams"> | string | null
    duration?: IntFilter<"exams"> | number
    total_score?: FloatNullableFilter<"exams"> | number | null
    status?: Enumexam_status_enumNullableFilter<"exams"> | $Enums.exam_status_enum | null
    is_public?: BoolNullableFilter<"exams"> | boolean | null
    access_code?: StringNullableFilter<"exams"> | string | null
    start_time?: DateTimeNullableFilter<"exams"> | Date | string | null
    end_time?: DateTimeNullableFilter<"exams"> | Date | string | null
    shuffle_questions?: BoolNullableFilter<"exams"> | boolean | null
    shuffle_answers?: BoolNullableFilter<"exams"> | boolean | null
    show_result_after_submit?: BoolNullableFilter<"exams"> | boolean | null
    max_attempts?: IntNullableFilter<"exams"> | number | null
    subject_id?: StringFilter<"exams"> | string
    created_by_id?: StringFilter<"exams"> | string
    created_at?: DateTimeNullableFilter<"exams"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"exams"> | Date | string | null
    attempts?: AttemptsListRelationFilter
    exam_questions?: Exam_questionsListRelationFilter
    exam_classes?: Exam_classesListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    subjects?: XOR<SubjectsScalarRelationFilter, subjectsWhereInput>
  }

  export type examsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    duration?: SortOrder
    total_score?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    is_public?: SortOrderInput | SortOrder
    access_code?: SortOrderInput | SortOrder
    start_time?: SortOrderInput | SortOrder
    end_time?: SortOrderInput | SortOrder
    shuffle_questions?: SortOrderInput | SortOrder
    shuffle_answers?: SortOrderInput | SortOrder
    show_result_after_submit?: SortOrderInput | SortOrder
    max_attempts?: SortOrderInput | SortOrder
    subject_id?: SortOrder
    created_by_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    attempts?: attemptsOrderByRelationAggregateInput
    exam_questions?: exam_questionsOrderByRelationAggregateInput
    exam_classes?: exam_classesOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    subjects?: subjectsOrderByWithRelationInput
    _relevance?: examsOrderByRelevanceInput
  }

  export type examsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: examsWhereInput | examsWhereInput[]
    OR?: examsWhereInput[]
    NOT?: examsWhereInput | examsWhereInput[]
    title?: StringFilter<"exams"> | string
    description?: StringNullableFilter<"exams"> | string | null
    duration?: IntFilter<"exams"> | number
    total_score?: FloatNullableFilter<"exams"> | number | null
    status?: Enumexam_status_enumNullableFilter<"exams"> | $Enums.exam_status_enum | null
    is_public?: BoolNullableFilter<"exams"> | boolean | null
    access_code?: StringNullableFilter<"exams"> | string | null
    start_time?: DateTimeNullableFilter<"exams"> | Date | string | null
    end_time?: DateTimeNullableFilter<"exams"> | Date | string | null
    shuffle_questions?: BoolNullableFilter<"exams"> | boolean | null
    shuffle_answers?: BoolNullableFilter<"exams"> | boolean | null
    show_result_after_submit?: BoolNullableFilter<"exams"> | boolean | null
    max_attempts?: IntNullableFilter<"exams"> | number | null
    subject_id?: StringFilter<"exams"> | string
    created_by_id?: StringFilter<"exams"> | string
    created_at?: DateTimeNullableFilter<"exams"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"exams"> | Date | string | null
    attempts?: AttemptsListRelationFilter
    exam_questions?: Exam_questionsListRelationFilter
    exam_classes?: Exam_classesListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    subjects?: XOR<SubjectsScalarRelationFilter, subjectsWhereInput>
  }, "id" | "slug">

  export type examsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    duration?: SortOrder
    total_score?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    is_public?: SortOrderInput | SortOrder
    access_code?: SortOrderInput | SortOrder
    start_time?: SortOrderInput | SortOrder
    end_time?: SortOrderInput | SortOrder
    shuffle_questions?: SortOrderInput | SortOrder
    shuffle_answers?: SortOrderInput | SortOrder
    show_result_after_submit?: SortOrderInput | SortOrder
    max_attempts?: SortOrderInput | SortOrder
    subject_id?: SortOrder
    created_by_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: examsCountOrderByAggregateInput
    _avg?: examsAvgOrderByAggregateInput
    _max?: examsMaxOrderByAggregateInput
    _min?: examsMinOrderByAggregateInput
    _sum?: examsSumOrderByAggregateInput
  }

  export type examsScalarWhereWithAggregatesInput = {
    AND?: examsScalarWhereWithAggregatesInput | examsScalarWhereWithAggregatesInput[]
    OR?: examsScalarWhereWithAggregatesInput[]
    NOT?: examsScalarWhereWithAggregatesInput | examsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"exams"> | string
    title?: StringWithAggregatesFilter<"exams"> | string
    slug?: StringWithAggregatesFilter<"exams"> | string
    description?: StringNullableWithAggregatesFilter<"exams"> | string | null
    duration?: IntWithAggregatesFilter<"exams"> | number
    total_score?: FloatNullableWithAggregatesFilter<"exams"> | number | null
    status?: Enumexam_status_enumNullableWithAggregatesFilter<"exams"> | $Enums.exam_status_enum | null
    is_public?: BoolNullableWithAggregatesFilter<"exams"> | boolean | null
    access_code?: StringNullableWithAggregatesFilter<"exams"> | string | null
    start_time?: DateTimeNullableWithAggregatesFilter<"exams"> | Date | string | null
    end_time?: DateTimeNullableWithAggregatesFilter<"exams"> | Date | string | null
    shuffle_questions?: BoolNullableWithAggregatesFilter<"exams"> | boolean | null
    shuffle_answers?: BoolNullableWithAggregatesFilter<"exams"> | boolean | null
    show_result_after_submit?: BoolNullableWithAggregatesFilter<"exams"> | boolean | null
    max_attempts?: IntNullableWithAggregatesFilter<"exams"> | number | null
    subject_id?: StringWithAggregatesFilter<"exams"> | string
    created_by_id?: StringWithAggregatesFilter<"exams"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"exams"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"exams"> | Date | string | null
  }

  export type exam_classesWhereInput = {
    AND?: exam_classesWhereInput | exam_classesWhereInput[]
    OR?: exam_classesWhereInput[]
    NOT?: exam_classesWhereInput | exam_classesWhereInput[]
    exam_id?: StringFilter<"exam_classes"> | string
    class_id?: StringFilter<"exam_classes"> | string
    created_at?: DateTimeNullableFilter<"exam_classes"> | Date | string | null
    exams?: XOR<ExamsScalarRelationFilter, examsWhereInput>
    classes?: XOR<ClassesScalarRelationFilter, classesWhereInput>
  }

  export type exam_classesOrderByWithRelationInput = {
    exam_id?: SortOrder
    class_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    exams?: examsOrderByWithRelationInput
    classes?: classesOrderByWithRelationInput
    _relevance?: exam_classesOrderByRelevanceInput
  }

  export type exam_classesWhereUniqueInput = Prisma.AtLeast<{
    exam_id_class_id?: exam_classesExam_idClass_idCompoundUniqueInput
    AND?: exam_classesWhereInput | exam_classesWhereInput[]
    OR?: exam_classesWhereInput[]
    NOT?: exam_classesWhereInput | exam_classesWhereInput[]
    exam_id?: StringFilter<"exam_classes"> | string
    class_id?: StringFilter<"exam_classes"> | string
    created_at?: DateTimeNullableFilter<"exam_classes"> | Date | string | null
    exams?: XOR<ExamsScalarRelationFilter, examsWhereInput>
    classes?: XOR<ClassesScalarRelationFilter, classesWhereInput>
  }, "exam_id_class_id">

  export type exam_classesOrderByWithAggregationInput = {
    exam_id?: SortOrder
    class_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: exam_classesCountOrderByAggregateInput
    _max?: exam_classesMaxOrderByAggregateInput
    _min?: exam_classesMinOrderByAggregateInput
  }

  export type exam_classesScalarWhereWithAggregatesInput = {
    AND?: exam_classesScalarWhereWithAggregatesInput | exam_classesScalarWhereWithAggregatesInput[]
    OR?: exam_classesScalarWhereWithAggregatesInput[]
    NOT?: exam_classesScalarWhereWithAggregatesInput | exam_classesScalarWhereWithAggregatesInput[]
    exam_id?: StringWithAggregatesFilter<"exam_classes"> | string
    class_id?: StringWithAggregatesFilter<"exam_classes"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"exam_classes"> | Date | string | null
  }

  export type questionsWhereInput = {
    AND?: questionsWhereInput | questionsWhereInput[]
    OR?: questionsWhereInput[]
    NOT?: questionsWhereInput | questionsWhereInput[]
    id?: StringFilter<"questions"> | string
    content?: StringFilter<"questions"> | string
    explanation?: StringNullableFilter<"questions"> | string | null
    image_url?: StringNullableFilter<"questions"> | string | null
    level?: IntNullableFilter<"questions"> | number | null
    type?: Enumquestion_type_enumNullableFilter<"questions"> | $Enums.question_type_enum | null
    subject_id?: StringFilter<"questions"> | string
    created_by_id?: StringFilter<"questions"> | string
    created_at?: DateTimeNullableFilter<"questions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"questions"> | Date | string | null
    answers?: AnswersListRelationFilter
    exam_questions?: Exam_questionsListRelationFilter
    student_answers?: Student_answersListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    subjects?: XOR<SubjectsScalarRelationFilter, subjectsWhereInput>
  }

  export type questionsOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    explanation?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    subject_id?: SortOrder
    created_by_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    answers?: answersOrderByRelationAggregateInput
    exam_questions?: exam_questionsOrderByRelationAggregateInput
    student_answers?: student_answersOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    subjects?: subjectsOrderByWithRelationInput
    _relevance?: questionsOrderByRelevanceInput
  }

  export type questionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: questionsWhereInput | questionsWhereInput[]
    OR?: questionsWhereInput[]
    NOT?: questionsWhereInput | questionsWhereInput[]
    content?: StringFilter<"questions"> | string
    explanation?: StringNullableFilter<"questions"> | string | null
    image_url?: StringNullableFilter<"questions"> | string | null
    level?: IntNullableFilter<"questions"> | number | null
    type?: Enumquestion_type_enumNullableFilter<"questions"> | $Enums.question_type_enum | null
    subject_id?: StringFilter<"questions"> | string
    created_by_id?: StringFilter<"questions"> | string
    created_at?: DateTimeNullableFilter<"questions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"questions"> | Date | string | null
    answers?: AnswersListRelationFilter
    exam_questions?: Exam_questionsListRelationFilter
    student_answers?: Student_answersListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    subjects?: XOR<SubjectsScalarRelationFilter, subjectsWhereInput>
  }, "id">

  export type questionsOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    explanation?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    subject_id?: SortOrder
    created_by_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: questionsCountOrderByAggregateInput
    _avg?: questionsAvgOrderByAggregateInput
    _max?: questionsMaxOrderByAggregateInput
    _min?: questionsMinOrderByAggregateInput
    _sum?: questionsSumOrderByAggregateInput
  }

  export type questionsScalarWhereWithAggregatesInput = {
    AND?: questionsScalarWhereWithAggregatesInput | questionsScalarWhereWithAggregatesInput[]
    OR?: questionsScalarWhereWithAggregatesInput[]
    NOT?: questionsScalarWhereWithAggregatesInput | questionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"questions"> | string
    content?: StringWithAggregatesFilter<"questions"> | string
    explanation?: StringNullableWithAggregatesFilter<"questions"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"questions"> | string | null
    level?: IntNullableWithAggregatesFilter<"questions"> | number | null
    type?: Enumquestion_type_enumNullableWithAggregatesFilter<"questions"> | $Enums.question_type_enum | null
    subject_id?: StringWithAggregatesFilter<"questions"> | string
    created_by_id?: StringWithAggregatesFilter<"questions"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"questions"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"questions"> | Date | string | null
  }

  export type student_answersWhereInput = {
    AND?: student_answersWhereInput | student_answersWhereInput[]
    OR?: student_answersWhereInput[]
    NOT?: student_answersWhereInput | student_answersWhereInput[]
    id?: StringFilter<"student_answers"> | string
    attempt_id?: StringFilter<"student_answers"> | string
    question_id?: StringFilter<"student_answers"> | string
    answer_id?: StringFilter<"student_answers"> | string
    created_at?: DateTimeNullableFilter<"student_answers"> | Date | string | null
    answers?: XOR<AnswersScalarRelationFilter, answersWhereInput>
    attempts?: XOR<AttemptsScalarRelationFilter, attemptsWhereInput>
    questions?: XOR<QuestionsScalarRelationFilter, questionsWhereInput>
  }

  export type student_answersOrderByWithRelationInput = {
    id?: SortOrder
    attempt_id?: SortOrder
    question_id?: SortOrder
    answer_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    answers?: answersOrderByWithRelationInput
    attempts?: attemptsOrderByWithRelationInput
    questions?: questionsOrderByWithRelationInput
    _relevance?: student_answersOrderByRelevanceInput
  }

  export type student_answersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: student_answersWhereInput | student_answersWhereInput[]
    OR?: student_answersWhereInput[]
    NOT?: student_answersWhereInput | student_answersWhereInput[]
    attempt_id?: StringFilter<"student_answers"> | string
    question_id?: StringFilter<"student_answers"> | string
    answer_id?: StringFilter<"student_answers"> | string
    created_at?: DateTimeNullableFilter<"student_answers"> | Date | string | null
    answers?: XOR<AnswersScalarRelationFilter, answersWhereInput>
    attempts?: XOR<AttemptsScalarRelationFilter, attemptsWhereInput>
    questions?: XOR<QuestionsScalarRelationFilter, questionsWhereInput>
  }, "id">

  export type student_answersOrderByWithAggregationInput = {
    id?: SortOrder
    attempt_id?: SortOrder
    question_id?: SortOrder
    answer_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: student_answersCountOrderByAggregateInput
    _max?: student_answersMaxOrderByAggregateInput
    _min?: student_answersMinOrderByAggregateInput
  }

  export type student_answersScalarWhereWithAggregatesInput = {
    AND?: student_answersScalarWhereWithAggregatesInput | student_answersScalarWhereWithAggregatesInput[]
    OR?: student_answersScalarWhereWithAggregatesInput[]
    NOT?: student_answersScalarWhereWithAggregatesInput | student_answersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"student_answers"> | string
    attempt_id?: StringWithAggregatesFilter<"student_answers"> | string
    question_id?: StringWithAggregatesFilter<"student_answers"> | string
    answer_id?: StringWithAggregatesFilter<"student_answers"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"student_answers"> | Date | string | null
  }

  export type subjectsWhereInput = {
    AND?: subjectsWhereInput | subjectsWhereInput[]
    OR?: subjectsWhereInput[]
    NOT?: subjectsWhereInput | subjectsWhereInput[]
    id?: StringFilter<"subjects"> | string
    name?: StringFilter<"subjects"> | string
    slug?: StringFilter<"subjects"> | string
    description?: StringNullableFilter<"subjects"> | string | null
    created_at?: DateTimeNullableFilter<"subjects"> | Date | string | null
    exams?: ExamsListRelationFilter
    questions?: QuestionsListRelationFilter
  }

  export type subjectsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    exams?: examsOrderByRelationAggregateInput
    questions?: questionsOrderByRelationAggregateInput
    _relevance?: subjectsOrderByRelevanceInput
  }

  export type subjectsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: subjectsWhereInput | subjectsWhereInput[]
    OR?: subjectsWhereInput[]
    NOT?: subjectsWhereInput | subjectsWhereInput[]
    name?: StringFilter<"subjects"> | string
    description?: StringNullableFilter<"subjects"> | string | null
    created_at?: DateTimeNullableFilter<"subjects"> | Date | string | null
    exams?: ExamsListRelationFilter
    questions?: QuestionsListRelationFilter
  }, "id" | "slug">

  export type subjectsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: subjectsCountOrderByAggregateInput
    _max?: subjectsMaxOrderByAggregateInput
    _min?: subjectsMinOrderByAggregateInput
  }

  export type subjectsScalarWhereWithAggregatesInput = {
    AND?: subjectsScalarWhereWithAggregatesInput | subjectsScalarWhereWithAggregatesInput[]
    OR?: subjectsScalarWhereWithAggregatesInput[]
    NOT?: subjectsScalarWhereWithAggregatesInput | subjectsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"subjects"> | string
    name?: StringWithAggregatesFilter<"subjects"> | string
    slug?: StringWithAggregatesFilter<"subjects"> | string
    description?: StringNullableWithAggregatesFilter<"subjects"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"subjects"> | Date | string | null
  }

  export type classesWhereInput = {
    AND?: classesWhereInput | classesWhereInput[]
    OR?: classesWhereInput[]
    NOT?: classesWhereInput | classesWhereInput[]
    id?: StringFilter<"classes"> | string
    name?: StringFilter<"classes"> | string
    code?: StringNullableFilter<"classes"> | string | null
    description?: StringNullableFilter<"classes"> | string | null
    school_year?: StringNullableFilter<"classes"> | string | null
    teacher_id?: StringFilter<"classes"> | string
    created_at?: DateTimeNullableFilter<"classes"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"classes"> | Date | string | null
    teacher?: XOR<UsersScalarRelationFilter, usersWhereInput>
    class_students?: Class_studentsListRelationFilter
    exam_classes?: Exam_classesListRelationFilter
  }

  export type classesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    school_year?: SortOrderInput | SortOrder
    teacher_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    teacher?: usersOrderByWithRelationInput
    class_students?: class_studentsOrderByRelationAggregateInput
    exam_classes?: exam_classesOrderByRelationAggregateInput
    _relevance?: classesOrderByRelevanceInput
  }

  export type classesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    teacher_id_code?: classesTeacher_idCodeCompoundUniqueInput
    AND?: classesWhereInput | classesWhereInput[]
    OR?: classesWhereInput[]
    NOT?: classesWhereInput | classesWhereInput[]
    name?: StringFilter<"classes"> | string
    code?: StringNullableFilter<"classes"> | string | null
    description?: StringNullableFilter<"classes"> | string | null
    school_year?: StringNullableFilter<"classes"> | string | null
    teacher_id?: StringFilter<"classes"> | string
    created_at?: DateTimeNullableFilter<"classes"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"classes"> | Date | string | null
    teacher?: XOR<UsersScalarRelationFilter, usersWhereInput>
    class_students?: Class_studentsListRelationFilter
    exam_classes?: Exam_classesListRelationFilter
  }, "id" | "teacher_id_code">

  export type classesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    school_year?: SortOrderInput | SortOrder
    teacher_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: classesCountOrderByAggregateInput
    _max?: classesMaxOrderByAggregateInput
    _min?: classesMinOrderByAggregateInput
  }

  export type classesScalarWhereWithAggregatesInput = {
    AND?: classesScalarWhereWithAggregatesInput | classesScalarWhereWithAggregatesInput[]
    OR?: classesScalarWhereWithAggregatesInput[]
    NOT?: classesScalarWhereWithAggregatesInput | classesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"classes"> | string
    name?: StringWithAggregatesFilter<"classes"> | string
    code?: StringNullableWithAggregatesFilter<"classes"> | string | null
    description?: StringNullableWithAggregatesFilter<"classes"> | string | null
    school_year?: StringNullableWithAggregatesFilter<"classes"> | string | null
    teacher_id?: StringWithAggregatesFilter<"classes"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"classes"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"classes"> | Date | string | null
  }

  export type class_studentsWhereInput = {
    AND?: class_studentsWhereInput | class_studentsWhereInput[]
    OR?: class_studentsWhereInput[]
    NOT?: class_studentsWhereInput | class_studentsWhereInput[]
    class_id?: StringFilter<"class_students"> | string
    student_id?: StringFilter<"class_students"> | string
    joined_at?: DateTimeNullableFilter<"class_students"> | Date | string | null
    classes?: XOR<ClassesScalarRelationFilter, classesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type class_studentsOrderByWithRelationInput = {
    class_id?: SortOrder
    student_id?: SortOrder
    joined_at?: SortOrderInput | SortOrder
    classes?: classesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    _relevance?: class_studentsOrderByRelevanceInput
  }

  export type class_studentsWhereUniqueInput = Prisma.AtLeast<{
    class_id_student_id?: class_studentsClass_idStudent_idCompoundUniqueInput
    AND?: class_studentsWhereInput | class_studentsWhereInput[]
    OR?: class_studentsWhereInput[]
    NOT?: class_studentsWhereInput | class_studentsWhereInput[]
    class_id?: StringFilter<"class_students"> | string
    student_id?: StringFilter<"class_students"> | string
    joined_at?: DateTimeNullableFilter<"class_students"> | Date | string | null
    classes?: XOR<ClassesScalarRelationFilter, classesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "class_id_student_id">

  export type class_studentsOrderByWithAggregationInput = {
    class_id?: SortOrder
    student_id?: SortOrder
    joined_at?: SortOrderInput | SortOrder
    _count?: class_studentsCountOrderByAggregateInput
    _max?: class_studentsMaxOrderByAggregateInput
    _min?: class_studentsMinOrderByAggregateInput
  }

  export type class_studentsScalarWhereWithAggregatesInput = {
    AND?: class_studentsScalarWhereWithAggregatesInput | class_studentsScalarWhereWithAggregatesInput[]
    OR?: class_studentsScalarWhereWithAggregatesInput[]
    NOT?: class_studentsScalarWhereWithAggregatesInput | class_studentsScalarWhereWithAggregatesInput[]
    class_id?: StringWithAggregatesFilter<"class_students"> | string
    student_id?: StringWithAggregatesFilter<"class_students"> | string
    joined_at?: DateTimeNullableWithAggregatesFilter<"class_students"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    full_name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    phone?: StringNullableFilter<"users"> | string | null
    password?: StringFilter<"users"> | string
    avatar?: StringNullableFilter<"users"> | string | null
    role?: Enumrole_enumFilter<"users"> | $Enums.role_enum
    is_active?: BoolNullableFilter<"users"> | boolean | null
    email_verified?: BoolFilter<"users"> | boolean
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    attempts?: AttemptsListRelationFilter
    exams?: ExamsListRelationFilter
    questions?: QuestionsListRelationFilter
    refresh_tokens?: Refresh_tokensListRelationFilter
    classes_teaching?: ClassesListRelationFilter
    class_memberships?: Class_studentsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    is_active?: SortOrderInput | SortOrder
    email_verified?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    attempts?: attemptsOrderByRelationAggregateInput
    exams?: examsOrderByRelationAggregateInput
    questions?: questionsOrderByRelationAggregateInput
    refresh_tokens?: refresh_tokensOrderByRelationAggregateInput
    classes_teaching?: classesOrderByRelationAggregateInput
    class_memberships?: class_studentsOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    full_name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    avatar?: StringNullableFilter<"users"> | string | null
    role?: Enumrole_enumFilter<"users"> | $Enums.role_enum
    is_active?: BoolNullableFilter<"users"> | boolean | null
    email_verified?: BoolFilter<"users"> | boolean
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    attempts?: AttemptsListRelationFilter
    exams?: ExamsListRelationFilter
    questions?: QuestionsListRelationFilter
    refresh_tokens?: Refresh_tokensListRelationFilter
    classes_teaching?: ClassesListRelationFilter
    class_memberships?: Class_studentsListRelationFilter
  }, "id" | "email" | "phone">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    is_active?: SortOrderInput | SortOrder
    email_verified?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    full_name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    phone?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringWithAggregatesFilter<"users"> | string
    avatar?: StringNullableWithAggregatesFilter<"users"> | string | null
    role?: Enumrole_enumWithAggregatesFilter<"users"> | $Enums.role_enum
    is_active?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    email_verified?: BoolWithAggregatesFilter<"users"> | boolean
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type refresh_tokensWhereInput = {
    AND?: refresh_tokensWhereInput | refresh_tokensWhereInput[]
    OR?: refresh_tokensWhereInput[]
    NOT?: refresh_tokensWhereInput | refresh_tokensWhereInput[]
    id?: StringFilter<"refresh_tokens"> | string
    user_id?: StringFilter<"refresh_tokens"> | string
    token_hash?: StringFilter<"refresh_tokens"> | string
    expires_at?: DateTimeFilter<"refresh_tokens"> | Date | string
    revoked_at?: DateTimeNullableFilter<"refresh_tokens"> | Date | string | null
    created_at?: DateTimeNullableFilter<"refresh_tokens"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type refresh_tokensOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expires_at?: SortOrder
    revoked_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    _relevance?: refresh_tokensOrderByRelevanceInput
  }

  export type refresh_tokensWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token_hash?: string
    AND?: refresh_tokensWhereInput | refresh_tokensWhereInput[]
    OR?: refresh_tokensWhereInput[]
    NOT?: refresh_tokensWhereInput | refresh_tokensWhereInput[]
    user_id?: StringFilter<"refresh_tokens"> | string
    expires_at?: DateTimeFilter<"refresh_tokens"> | Date | string
    revoked_at?: DateTimeNullableFilter<"refresh_tokens"> | Date | string | null
    created_at?: DateTimeNullableFilter<"refresh_tokens"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "token_hash">

  export type refresh_tokensOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expires_at?: SortOrder
    revoked_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: refresh_tokensCountOrderByAggregateInput
    _max?: refresh_tokensMaxOrderByAggregateInput
    _min?: refresh_tokensMinOrderByAggregateInput
  }

  export type refresh_tokensScalarWhereWithAggregatesInput = {
    AND?: refresh_tokensScalarWhereWithAggregatesInput | refresh_tokensScalarWhereWithAggregatesInput[]
    OR?: refresh_tokensScalarWhereWithAggregatesInput[]
    NOT?: refresh_tokensScalarWhereWithAggregatesInput | refresh_tokensScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"refresh_tokens"> | string
    user_id?: StringWithAggregatesFilter<"refresh_tokens"> | string
    token_hash?: StringWithAggregatesFilter<"refresh_tokens"> | string
    expires_at?: DateTimeWithAggregatesFilter<"refresh_tokens"> | Date | string
    revoked_at?: DateTimeNullableWithAggregatesFilter<"refresh_tokens"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"refresh_tokens"> | Date | string | null
  }

  export type email_otpsWhereInput = {
    AND?: email_otpsWhereInput | email_otpsWhereInput[]
    OR?: email_otpsWhereInput[]
    NOT?: email_otpsWhereInput | email_otpsWhereInput[]
    id?: StringFilter<"email_otps"> | string
    email?: StringFilter<"email_otps"> | string
    otp?: StringFilter<"email_otps"> | string
    expired_at?: DateTimeFilter<"email_otps"> | Date | string
    is_used?: BoolNullableFilter<"email_otps"> | boolean | null
    created_at?: DateTimeNullableFilter<"email_otps"> | Date | string | null
  }

  export type email_otpsOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expired_at?: SortOrder
    is_used?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _relevance?: email_otpsOrderByRelevanceInput
  }

  export type email_otpsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: email_otpsWhereInput | email_otpsWhereInput[]
    OR?: email_otpsWhereInput[]
    NOT?: email_otpsWhereInput | email_otpsWhereInput[]
    email?: StringFilter<"email_otps"> | string
    otp?: StringFilter<"email_otps"> | string
    expired_at?: DateTimeFilter<"email_otps"> | Date | string
    is_used?: BoolNullableFilter<"email_otps"> | boolean | null
    created_at?: DateTimeNullableFilter<"email_otps"> | Date | string | null
  }, "id">

  export type email_otpsOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expired_at?: SortOrder
    is_used?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: email_otpsCountOrderByAggregateInput
    _max?: email_otpsMaxOrderByAggregateInput
    _min?: email_otpsMinOrderByAggregateInput
  }

  export type email_otpsScalarWhereWithAggregatesInput = {
    AND?: email_otpsScalarWhereWithAggregatesInput | email_otpsScalarWhereWithAggregatesInput[]
    OR?: email_otpsScalarWhereWithAggregatesInput[]
    NOT?: email_otpsScalarWhereWithAggregatesInput | email_otpsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"email_otps"> | string
    email?: StringWithAggregatesFilter<"email_otps"> | string
    otp?: StringWithAggregatesFilter<"email_otps"> | string
    expired_at?: DateTimeWithAggregatesFilter<"email_otps"> | Date | string
    is_used?: BoolNullableWithAggregatesFilter<"email_otps"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"email_otps"> | Date | string | null
  }

  export type answersCreateInput = {
    id?: string
    content: string
    is_correct?: boolean | null
    created_at?: Date | string | null
    questions: questionsCreateNestedOneWithoutAnswersInput
    student_answers?: student_answersCreateNestedManyWithoutAnswersInput
  }

  export type answersUncheckedCreateInput = {
    id?: string
    content: string
    is_correct?: boolean | null
    question_id: string
    created_at?: Date | string | null
    student_answers?: student_answersUncheckedCreateNestedManyWithoutAnswersInput
  }

  export type answersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: questionsUpdateOneRequiredWithoutAnswersNestedInput
    student_answers?: student_answersUpdateManyWithoutAnswersNestedInput
  }

  export type answersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    question_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_answers?: student_answersUncheckedUpdateManyWithoutAnswersNestedInput
  }

  export type answersCreateManyInput = {
    id?: string
    content: string
    is_correct?: boolean | null
    question_id: string
    created_at?: Date | string | null
  }

  export type answersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type answersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    question_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attemptsCreateInput = {
    id?: string
    started_at?: Date | string | null
    submitted_at?: Date | string | null
    status?: $Enums.attempt_status_enum | null
    score?: number | null
    total_correct?: number | null
    total_wrong?: number | null
    created_at?: Date | string | null
    exams: examsCreateNestedOneWithoutAttemptsInput
    users: usersCreateNestedOneWithoutAttemptsInput
    student_answers?: student_answersCreateNestedManyWithoutAttemptsInput
  }

  export type attemptsUncheckedCreateInput = {
    id?: string
    exam_id: string
    student_id: string
    started_at?: Date | string | null
    submitted_at?: Date | string | null
    status?: $Enums.attempt_status_enum | null
    score?: number | null
    total_correct?: number | null
    total_wrong?: number | null
    created_at?: Date | string | null
    student_answers?: student_answersUncheckedCreateNestedManyWithoutAttemptsInput
  }

  export type attemptsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumattempt_status_enumFieldUpdateOperationsInput | $Enums.attempt_status_enum | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    total_correct?: NullableIntFieldUpdateOperationsInput | number | null
    total_wrong?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exams?: examsUpdateOneRequiredWithoutAttemptsNestedInput
    users?: usersUpdateOneRequiredWithoutAttemptsNestedInput
    student_answers?: student_answersUpdateManyWithoutAttemptsNestedInput
  }

  export type attemptsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    exam_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumattempt_status_enumFieldUpdateOperationsInput | $Enums.attempt_status_enum | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    total_correct?: NullableIntFieldUpdateOperationsInput | number | null
    total_wrong?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_answers?: student_answersUncheckedUpdateManyWithoutAttemptsNestedInput
  }

  export type attemptsCreateManyInput = {
    id?: string
    exam_id: string
    student_id: string
    started_at?: Date | string | null
    submitted_at?: Date | string | null
    status?: $Enums.attempt_status_enum | null
    score?: number | null
    total_correct?: number | null
    total_wrong?: number | null
    created_at?: Date | string | null
  }

  export type attemptsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumattempt_status_enumFieldUpdateOperationsInput | $Enums.attempt_status_enum | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    total_correct?: NullableIntFieldUpdateOperationsInput | number | null
    total_wrong?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attemptsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    exam_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumattempt_status_enumFieldUpdateOperationsInput | $Enums.attempt_status_enum | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    total_correct?: NullableIntFieldUpdateOperationsInput | number | null
    total_wrong?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exam_questionsCreateInput = {
    order_index: number
    score?: number | null
    exams: examsCreateNestedOneWithoutExam_questionsInput
    questions: questionsCreateNestedOneWithoutExam_questionsInput
  }

  export type exam_questionsUncheckedCreateInput = {
    exam_id: string
    question_id: string
    order_index: number
    score?: number | null
  }

  export type exam_questionsUpdateInput = {
    order_index?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    exams?: examsUpdateOneRequiredWithoutExam_questionsNestedInput
    questions?: questionsUpdateOneRequiredWithoutExam_questionsNestedInput
  }

  export type exam_questionsUncheckedUpdateInput = {
    exam_id?: StringFieldUpdateOperationsInput | string
    question_id?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type exam_questionsCreateManyInput = {
    exam_id: string
    question_id: string
    order_index: number
    score?: number | null
  }

  export type exam_questionsUpdateManyMutationInput = {
    order_index?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type exam_questionsUncheckedUpdateManyInput = {
    exam_id?: StringFieldUpdateOperationsInput | string
    question_id?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type examsCreateInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    total_score?: number | null
    status?: $Enums.exam_status_enum | null
    is_public?: boolean | null
    access_code?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    shuffle_questions?: boolean | null
    shuffle_answers?: boolean | null
    show_result_after_submit?: boolean | null
    max_attempts?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attempts?: attemptsCreateNestedManyWithoutExamsInput
    exam_questions?: exam_questionsCreateNestedManyWithoutExamsInput
    exam_classes?: exam_classesCreateNestedManyWithoutExamsInput
    users: usersCreateNestedOneWithoutExamsInput
    subjects: subjectsCreateNestedOneWithoutExamsInput
  }

  export type examsUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    total_score?: number | null
    status?: $Enums.exam_status_enum | null
    is_public?: boolean | null
    access_code?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    shuffle_questions?: boolean | null
    shuffle_answers?: boolean | null
    show_result_after_submit?: boolean | null
    max_attempts?: number | null
    subject_id: string
    created_by_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attempts?: attemptsUncheckedCreateNestedManyWithoutExamsInput
    exam_questions?: exam_questionsUncheckedCreateNestedManyWithoutExamsInput
    exam_classes?: exam_classesUncheckedCreateNestedManyWithoutExamsInput
  }

  export type examsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    total_score?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableEnumexam_status_enumFieldUpdateOperationsInput | $Enums.exam_status_enum | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    access_code?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shuffle_questions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    shuffle_answers?: NullableBoolFieldUpdateOperationsInput | boolean | null
    show_result_after_submit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    max_attempts?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: attemptsUpdateManyWithoutExamsNestedInput
    exam_questions?: exam_questionsUpdateManyWithoutExamsNestedInput
    exam_classes?: exam_classesUpdateManyWithoutExamsNestedInput
    users?: usersUpdateOneRequiredWithoutExamsNestedInput
    subjects?: subjectsUpdateOneRequiredWithoutExamsNestedInput
  }

  export type examsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    total_score?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableEnumexam_status_enumFieldUpdateOperationsInput | $Enums.exam_status_enum | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    access_code?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shuffle_questions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    shuffle_answers?: NullableBoolFieldUpdateOperationsInput | boolean | null
    show_result_after_submit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    max_attempts?: NullableIntFieldUpdateOperationsInput | number | null
    subject_id?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: attemptsUncheckedUpdateManyWithoutExamsNestedInput
    exam_questions?: exam_questionsUncheckedUpdateManyWithoutExamsNestedInput
    exam_classes?: exam_classesUncheckedUpdateManyWithoutExamsNestedInput
  }

  export type examsCreateManyInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    total_score?: number | null
    status?: $Enums.exam_status_enum | null
    is_public?: boolean | null
    access_code?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    shuffle_questions?: boolean | null
    shuffle_answers?: boolean | null
    show_result_after_submit?: boolean | null
    max_attempts?: number | null
    subject_id: string
    created_by_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type examsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    total_score?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableEnumexam_status_enumFieldUpdateOperationsInput | $Enums.exam_status_enum | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    access_code?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shuffle_questions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    shuffle_answers?: NullableBoolFieldUpdateOperationsInput | boolean | null
    show_result_after_submit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    max_attempts?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type examsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    total_score?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableEnumexam_status_enumFieldUpdateOperationsInput | $Enums.exam_status_enum | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    access_code?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shuffle_questions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    shuffle_answers?: NullableBoolFieldUpdateOperationsInput | boolean | null
    show_result_after_submit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    max_attempts?: NullableIntFieldUpdateOperationsInput | number | null
    subject_id?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exam_classesCreateInput = {
    created_at?: Date | string | null
    exams: examsCreateNestedOneWithoutExam_classesInput
    classes: classesCreateNestedOneWithoutExam_classesInput
  }

  export type exam_classesUncheckedCreateInput = {
    exam_id: string
    class_id: string
    created_at?: Date | string | null
  }

  export type exam_classesUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exams?: examsUpdateOneRequiredWithoutExam_classesNestedInput
    classes?: classesUpdateOneRequiredWithoutExam_classesNestedInput
  }

  export type exam_classesUncheckedUpdateInput = {
    exam_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exam_classesCreateManyInput = {
    exam_id: string
    class_id: string
    created_at?: Date | string | null
  }

  export type exam_classesUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exam_classesUncheckedUpdateManyInput = {
    exam_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type questionsCreateInput = {
    id?: string
    content: string
    explanation?: string | null
    image_url?: string | null
    level?: number | null
    type?: $Enums.question_type_enum | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutQuestionsInput
    exam_questions?: exam_questionsCreateNestedManyWithoutQuestionsInput
    student_answers?: student_answersCreateNestedManyWithoutQuestionsInput
    users: usersCreateNestedOneWithoutQuestionsInput
    subjects: subjectsCreateNestedOneWithoutQuestionsInput
  }

  export type questionsUncheckedCreateInput = {
    id?: string
    content: string
    explanation?: string | null
    image_url?: string | null
    level?: number | null
    type?: $Enums.question_type_enum | null
    subject_id: string
    created_by_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersUncheckedCreateNestedManyWithoutQuestionsInput
    exam_questions?: exam_questionsUncheckedCreateNestedManyWithoutQuestionsInput
    student_answers?: student_answersUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type questionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumquestion_type_enumFieldUpdateOperationsInput | $Enums.question_type_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutQuestionsNestedInput
    exam_questions?: exam_questionsUpdateManyWithoutQuestionsNestedInput
    student_answers?: student_answersUpdateManyWithoutQuestionsNestedInput
    users?: usersUpdateOneRequiredWithoutQuestionsNestedInput
    subjects?: subjectsUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumquestion_type_enumFieldUpdateOperationsInput | $Enums.question_type_enum | null
    subject_id?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUncheckedUpdateManyWithoutQuestionsNestedInput
    exam_questions?: exam_questionsUncheckedUpdateManyWithoutQuestionsNestedInput
    student_answers?: student_answersUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsCreateManyInput = {
    id?: string
    content: string
    explanation?: string | null
    image_url?: string | null
    level?: number | null
    type?: $Enums.question_type_enum | null
    subject_id: string
    created_by_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type questionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumquestion_type_enumFieldUpdateOperationsInput | $Enums.question_type_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type questionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumquestion_type_enumFieldUpdateOperationsInput | $Enums.question_type_enum | null
    subject_id?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type student_answersCreateInput = {
    id?: string
    created_at?: Date | string | null
    answers: answersCreateNestedOneWithoutStudent_answersInput
    attempts: attemptsCreateNestedOneWithoutStudent_answersInput
    questions: questionsCreateNestedOneWithoutStudent_answersInput
  }

  export type student_answersUncheckedCreateInput = {
    id?: string
    attempt_id: string
    question_id: string
    answer_id: string
    created_at?: Date | string | null
  }

  export type student_answersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateOneRequiredWithoutStudent_answersNestedInput
    attempts?: attemptsUpdateOneRequiredWithoutStudent_answersNestedInput
    questions?: questionsUpdateOneRequiredWithoutStudent_answersNestedInput
  }

  export type student_answersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attempt_id?: StringFieldUpdateOperationsInput | string
    question_id?: StringFieldUpdateOperationsInput | string
    answer_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type student_answersCreateManyInput = {
    id?: string
    attempt_id: string
    question_id: string
    answer_id: string
    created_at?: Date | string | null
  }

  export type student_answersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type student_answersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    attempt_id?: StringFieldUpdateOperationsInput | string
    question_id?: StringFieldUpdateOperationsInput | string
    answer_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subjectsCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    created_at?: Date | string | null
    exams?: examsCreateNestedManyWithoutSubjectsInput
    questions?: questionsCreateNestedManyWithoutSubjectsInput
  }

  export type subjectsUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    created_at?: Date | string | null
    exams?: examsUncheckedCreateNestedManyWithoutSubjectsInput
    questions?: questionsUncheckedCreateNestedManyWithoutSubjectsInput
  }

  export type subjectsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exams?: examsUpdateManyWithoutSubjectsNestedInput
    questions?: questionsUpdateManyWithoutSubjectsNestedInput
  }

  export type subjectsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exams?: examsUncheckedUpdateManyWithoutSubjectsNestedInput
    questions?: questionsUncheckedUpdateManyWithoutSubjectsNestedInput
  }

  export type subjectsCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    created_at?: Date | string | null
  }

  export type subjectsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subjectsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type classesCreateInput = {
    id?: string
    name: string
    code?: string | null
    description?: string | null
    school_year?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    teacher: usersCreateNestedOneWithoutClasses_teachingInput
    class_students?: class_studentsCreateNestedManyWithoutClassesInput
    exam_classes?: exam_classesCreateNestedManyWithoutClassesInput
  }

  export type classesUncheckedCreateInput = {
    id?: string
    name: string
    code?: string | null
    description?: string | null
    school_year?: string | null
    teacher_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    class_students?: class_studentsUncheckedCreateNestedManyWithoutClassesInput
    exam_classes?: exam_classesUncheckedCreateNestedManyWithoutClassesInput
  }

  export type classesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    school_year?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teacher?: usersUpdateOneRequiredWithoutClasses_teachingNestedInput
    class_students?: class_studentsUpdateManyWithoutClassesNestedInput
    exam_classes?: exam_classesUpdateManyWithoutClassesNestedInput
  }

  export type classesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    school_year?: NullableStringFieldUpdateOperationsInput | string | null
    teacher_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    class_students?: class_studentsUncheckedUpdateManyWithoutClassesNestedInput
    exam_classes?: exam_classesUncheckedUpdateManyWithoutClassesNestedInput
  }

  export type classesCreateManyInput = {
    id?: string
    name: string
    code?: string | null
    description?: string | null
    school_year?: string | null
    teacher_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type classesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    school_year?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type classesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    school_year?: NullableStringFieldUpdateOperationsInput | string | null
    teacher_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type class_studentsCreateInput = {
    joined_at?: Date | string | null
    classes: classesCreateNestedOneWithoutClass_studentsInput
    users: usersCreateNestedOneWithoutClass_membershipsInput
  }

  export type class_studentsUncheckedCreateInput = {
    class_id: string
    student_id: string
    joined_at?: Date | string | null
  }

  export type class_studentsUpdateInput = {
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    classes?: classesUpdateOneRequiredWithoutClass_studentsNestedInput
    users?: usersUpdateOneRequiredWithoutClass_membershipsNestedInput
  }

  export type class_studentsUncheckedUpdateInput = {
    class_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type class_studentsCreateManyInput = {
    class_id: string
    student_id: string
    joined_at?: Date | string | null
  }

  export type class_studentsUpdateManyMutationInput = {
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type class_studentsUncheckedUpdateManyInput = {
    class_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    id?: string
    full_name: string
    email: string
    phone?: string | null
    password: string
    avatar?: string | null
    role?: $Enums.role_enum
    is_active?: boolean | null
    email_verified?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attempts?: attemptsCreateNestedManyWithoutUsersInput
    exams?: examsCreateNestedManyWithoutUsersInput
    questions?: questionsCreateNestedManyWithoutUsersInput
    refresh_tokens?: refresh_tokensCreateNestedManyWithoutUsersInput
    classes_teaching?: classesCreateNestedManyWithoutTeacherInput
    class_memberships?: class_studentsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    full_name: string
    email: string
    phone?: string | null
    password: string
    avatar?: string | null
    role?: $Enums.role_enum
    is_active?: boolean | null
    email_verified?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attempts?: attemptsUncheckedCreateNestedManyWithoutUsersInput
    exams?: examsUncheckedCreateNestedManyWithoutUsersInput
    questions?: questionsUncheckedCreateNestedManyWithoutUsersInput
    refresh_tokens?: refresh_tokensUncheckedCreateNestedManyWithoutUsersInput
    classes_teaching?: classesUncheckedCreateNestedManyWithoutTeacherInput
    class_memberships?: class_studentsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumrole_enumFieldUpdateOperationsInput | $Enums.role_enum
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: attemptsUpdateManyWithoutUsersNestedInput
    exams?: examsUpdateManyWithoutUsersNestedInput
    questions?: questionsUpdateManyWithoutUsersNestedInput
    refresh_tokens?: refresh_tokensUpdateManyWithoutUsersNestedInput
    classes_teaching?: classesUpdateManyWithoutTeacherNestedInput
    class_memberships?: class_studentsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumrole_enumFieldUpdateOperationsInput | $Enums.role_enum
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: attemptsUncheckedUpdateManyWithoutUsersNestedInput
    exams?: examsUncheckedUpdateManyWithoutUsersNestedInput
    questions?: questionsUncheckedUpdateManyWithoutUsersNestedInput
    refresh_tokens?: refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput
    classes_teaching?: classesUncheckedUpdateManyWithoutTeacherNestedInput
    class_memberships?: class_studentsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    full_name: string
    email: string
    phone?: string | null
    password: string
    avatar?: string | null
    role?: $Enums.role_enum
    is_active?: boolean | null
    email_verified?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumrole_enumFieldUpdateOperationsInput | $Enums.role_enum
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumrole_enumFieldUpdateOperationsInput | $Enums.role_enum
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type refresh_tokensCreateInput = {
    id?: string
    token_hash: string
    expires_at: Date | string
    revoked_at?: Date | string | null
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutRefresh_tokensInput
  }

  export type refresh_tokensUncheckedCreateInput = {
    id?: string
    user_id: string
    token_hash: string
    expires_at: Date | string
    revoked_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type refresh_tokensUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutRefresh_tokensNestedInput
  }

  export type refresh_tokensUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type refresh_tokensCreateManyInput = {
    id?: string
    user_id: string
    token_hash: string
    expires_at: Date | string
    revoked_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type refresh_tokensUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type refresh_tokensUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type email_otpsCreateInput = {
    id?: string
    email: string
    otp: string
    expired_at: Date | string
    is_used?: boolean | null
    created_at?: Date | string | null
  }

  export type email_otpsUncheckedCreateInput = {
    id?: string
    email: string
    otp: string
    expired_at: Date | string
    is_used?: boolean | null
    created_at?: Date | string | null
  }

  export type email_otpsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type email_otpsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type email_otpsCreateManyInput = {
    id?: string
    email: string
    otp: string
    expired_at: Date | string
    is_used?: boolean | null
    created_at?: Date | string | null
  }

  export type email_otpsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type email_otpsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_used?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type QuestionsScalarRelationFilter = {
    is?: questionsWhereInput
    isNot?: questionsWhereInput
  }

  export type Student_answersListRelationFilter = {
    every?: student_answersWhereInput
    some?: student_answersWhereInput
    none?: student_answersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type student_answersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type answersOrderByRelevanceInput = {
    fields: answersOrderByRelevanceFieldEnum | answersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type answersCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    is_correct?: SortOrder
    question_id?: SortOrder
    created_at?: SortOrder
  }

  export type answersMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    is_correct?: SortOrder
    question_id?: SortOrder
    created_at?: SortOrder
  }

  export type answersMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    is_correct?: SortOrder
    question_id?: SortOrder
    created_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Enumattempt_status_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.attempt_status_enum | Enumattempt_status_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.attempt_status_enum[] | null
    notIn?: $Enums.attempt_status_enum[] | null
    not?: NestedEnumattempt_status_enumNullableFilter<$PrismaModel> | $Enums.attempt_status_enum | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ExamsScalarRelationFilter = {
    is?: examsWhereInput
    isNot?: examsWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type attemptsOrderByRelevanceInput = {
    fields: attemptsOrderByRelevanceFieldEnum | attemptsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type attemptsCountOrderByAggregateInput = {
    id?: SortOrder
    exam_id?: SortOrder
    student_id?: SortOrder
    started_at?: SortOrder
    submitted_at?: SortOrder
    status?: SortOrder
    score?: SortOrder
    total_correct?: SortOrder
    total_wrong?: SortOrder
    created_at?: SortOrder
  }

  export type attemptsAvgOrderByAggregateInput = {
    score?: SortOrder
    total_correct?: SortOrder
    total_wrong?: SortOrder
  }

  export type attemptsMaxOrderByAggregateInput = {
    id?: SortOrder
    exam_id?: SortOrder
    student_id?: SortOrder
    started_at?: SortOrder
    submitted_at?: SortOrder
    status?: SortOrder
    score?: SortOrder
    total_correct?: SortOrder
    total_wrong?: SortOrder
    created_at?: SortOrder
  }

  export type attemptsMinOrderByAggregateInput = {
    id?: SortOrder
    exam_id?: SortOrder
    student_id?: SortOrder
    started_at?: SortOrder
    submitted_at?: SortOrder
    status?: SortOrder
    score?: SortOrder
    total_correct?: SortOrder
    total_wrong?: SortOrder
    created_at?: SortOrder
  }

  export type attemptsSumOrderByAggregateInput = {
    score?: SortOrder
    total_correct?: SortOrder
    total_wrong?: SortOrder
  }

  export type Enumattempt_status_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.attempt_status_enum | Enumattempt_status_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.attempt_status_enum[] | null
    notIn?: $Enums.attempt_status_enum[] | null
    not?: NestedEnumattempt_status_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.attempt_status_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumattempt_status_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumattempt_status_enumNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type exam_questionsOrderByRelevanceInput = {
    fields: exam_questionsOrderByRelevanceFieldEnum | exam_questionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type exam_questionsExam_idQuestion_idCompoundUniqueInput = {
    exam_id: string
    question_id: string
  }

  export type exam_questionsCountOrderByAggregateInput = {
    exam_id?: SortOrder
    question_id?: SortOrder
    order_index?: SortOrder
    score?: SortOrder
  }

  export type exam_questionsAvgOrderByAggregateInput = {
    order_index?: SortOrder
    score?: SortOrder
  }

  export type exam_questionsMaxOrderByAggregateInput = {
    exam_id?: SortOrder
    question_id?: SortOrder
    order_index?: SortOrder
    score?: SortOrder
  }

  export type exam_questionsMinOrderByAggregateInput = {
    exam_id?: SortOrder
    question_id?: SortOrder
    order_index?: SortOrder
    score?: SortOrder
  }

  export type exam_questionsSumOrderByAggregateInput = {
    order_index?: SortOrder
    score?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Enumexam_status_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.exam_status_enum | Enumexam_status_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.exam_status_enum[] | null
    notIn?: $Enums.exam_status_enum[] | null
    not?: NestedEnumexam_status_enumNullableFilter<$PrismaModel> | $Enums.exam_status_enum | null
  }

  export type AttemptsListRelationFilter = {
    every?: attemptsWhereInput
    some?: attemptsWhereInput
    none?: attemptsWhereInput
  }

  export type Exam_questionsListRelationFilter = {
    every?: exam_questionsWhereInput
    some?: exam_questionsWhereInput
    none?: exam_questionsWhereInput
  }

  export type Exam_classesListRelationFilter = {
    every?: exam_classesWhereInput
    some?: exam_classesWhereInput
    none?: exam_classesWhereInput
  }

  export type SubjectsScalarRelationFilter = {
    is?: subjectsWhereInput
    isNot?: subjectsWhereInput
  }

  export type attemptsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type exam_questionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type exam_classesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type examsOrderByRelevanceInput = {
    fields: examsOrderByRelevanceFieldEnum | examsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type examsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    total_score?: SortOrder
    status?: SortOrder
    is_public?: SortOrder
    access_code?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    shuffle_questions?: SortOrder
    shuffle_answers?: SortOrder
    show_result_after_submit?: SortOrder
    max_attempts?: SortOrder
    subject_id?: SortOrder
    created_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type examsAvgOrderByAggregateInput = {
    duration?: SortOrder
    total_score?: SortOrder
    max_attempts?: SortOrder
  }

  export type examsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    total_score?: SortOrder
    status?: SortOrder
    is_public?: SortOrder
    access_code?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    shuffle_questions?: SortOrder
    shuffle_answers?: SortOrder
    show_result_after_submit?: SortOrder
    max_attempts?: SortOrder
    subject_id?: SortOrder
    created_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type examsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    total_score?: SortOrder
    status?: SortOrder
    is_public?: SortOrder
    access_code?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    shuffle_questions?: SortOrder
    shuffle_answers?: SortOrder
    show_result_after_submit?: SortOrder
    max_attempts?: SortOrder
    subject_id?: SortOrder
    created_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type examsSumOrderByAggregateInput = {
    duration?: SortOrder
    total_score?: SortOrder
    max_attempts?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumexam_status_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.exam_status_enum | Enumexam_status_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.exam_status_enum[] | null
    notIn?: $Enums.exam_status_enum[] | null
    not?: NestedEnumexam_status_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.exam_status_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumexam_status_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumexam_status_enumNullableFilter<$PrismaModel>
  }

  export type ClassesScalarRelationFilter = {
    is?: classesWhereInput
    isNot?: classesWhereInput
  }

  export type exam_classesOrderByRelevanceInput = {
    fields: exam_classesOrderByRelevanceFieldEnum | exam_classesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type exam_classesExam_idClass_idCompoundUniqueInput = {
    exam_id: string
    class_id: string
  }

  export type exam_classesCountOrderByAggregateInput = {
    exam_id?: SortOrder
    class_id?: SortOrder
    created_at?: SortOrder
  }

  export type exam_classesMaxOrderByAggregateInput = {
    exam_id?: SortOrder
    class_id?: SortOrder
    created_at?: SortOrder
  }

  export type exam_classesMinOrderByAggregateInput = {
    exam_id?: SortOrder
    class_id?: SortOrder
    created_at?: SortOrder
  }

  export type Enumquestion_type_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.question_type_enum | Enumquestion_type_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.question_type_enum[] | null
    notIn?: $Enums.question_type_enum[] | null
    not?: NestedEnumquestion_type_enumNullableFilter<$PrismaModel> | $Enums.question_type_enum | null
  }

  export type AnswersListRelationFilter = {
    every?: answersWhereInput
    some?: answersWhereInput
    none?: answersWhereInput
  }

  export type answersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type questionsOrderByRelevanceInput = {
    fields: questionsOrderByRelevanceFieldEnum | questionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type questionsCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    explanation?: SortOrder
    image_url?: SortOrder
    level?: SortOrder
    type?: SortOrder
    subject_id?: SortOrder
    created_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type questionsAvgOrderByAggregateInput = {
    level?: SortOrder
  }

  export type questionsMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    explanation?: SortOrder
    image_url?: SortOrder
    level?: SortOrder
    type?: SortOrder
    subject_id?: SortOrder
    created_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type questionsMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    explanation?: SortOrder
    image_url?: SortOrder
    level?: SortOrder
    type?: SortOrder
    subject_id?: SortOrder
    created_by_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type questionsSumOrderByAggregateInput = {
    level?: SortOrder
  }

  export type Enumquestion_type_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.question_type_enum | Enumquestion_type_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.question_type_enum[] | null
    notIn?: $Enums.question_type_enum[] | null
    not?: NestedEnumquestion_type_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.question_type_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumquestion_type_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumquestion_type_enumNullableFilter<$PrismaModel>
  }

  export type AnswersScalarRelationFilter = {
    is?: answersWhereInput
    isNot?: answersWhereInput
  }

  export type AttemptsScalarRelationFilter = {
    is?: attemptsWhereInput
    isNot?: attemptsWhereInput
  }

  export type student_answersOrderByRelevanceInput = {
    fields: student_answersOrderByRelevanceFieldEnum | student_answersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type student_answersCountOrderByAggregateInput = {
    id?: SortOrder
    attempt_id?: SortOrder
    question_id?: SortOrder
    answer_id?: SortOrder
    created_at?: SortOrder
  }

  export type student_answersMaxOrderByAggregateInput = {
    id?: SortOrder
    attempt_id?: SortOrder
    question_id?: SortOrder
    answer_id?: SortOrder
    created_at?: SortOrder
  }

  export type student_answersMinOrderByAggregateInput = {
    id?: SortOrder
    attempt_id?: SortOrder
    question_id?: SortOrder
    answer_id?: SortOrder
    created_at?: SortOrder
  }

  export type ExamsListRelationFilter = {
    every?: examsWhereInput
    some?: examsWhereInput
    none?: examsWhereInput
  }

  export type QuestionsListRelationFilter = {
    every?: questionsWhereInput
    some?: questionsWhereInput
    none?: questionsWhereInput
  }

  export type examsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type questionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type subjectsOrderByRelevanceInput = {
    fields: subjectsOrderByRelevanceFieldEnum | subjectsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type subjectsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type subjectsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type subjectsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type Class_studentsListRelationFilter = {
    every?: class_studentsWhereInput
    some?: class_studentsWhereInput
    none?: class_studentsWhereInput
  }

  export type class_studentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type classesOrderByRelevanceInput = {
    fields: classesOrderByRelevanceFieldEnum | classesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type classesTeacher_idCodeCompoundUniqueInput = {
    teacher_id: string
    code: string
  }

  export type classesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrder
    school_year?: SortOrder
    teacher_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type classesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrder
    school_year?: SortOrder
    teacher_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type classesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrder
    school_year?: SortOrder
    teacher_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type class_studentsOrderByRelevanceInput = {
    fields: class_studentsOrderByRelevanceFieldEnum | class_studentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type class_studentsClass_idStudent_idCompoundUniqueInput = {
    class_id: string
    student_id: string
  }

  export type class_studentsCountOrderByAggregateInput = {
    class_id?: SortOrder
    student_id?: SortOrder
    joined_at?: SortOrder
  }

  export type class_studentsMaxOrderByAggregateInput = {
    class_id?: SortOrder
    student_id?: SortOrder
    joined_at?: SortOrder
  }

  export type class_studentsMinOrderByAggregateInput = {
    class_id?: SortOrder
    student_id?: SortOrder
    joined_at?: SortOrder
  }

  export type Enumrole_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.role_enum | Enumrole_enumFieldRefInput<$PrismaModel>
    in?: $Enums.role_enum[]
    notIn?: $Enums.role_enum[]
    not?: NestedEnumrole_enumFilter<$PrismaModel> | $Enums.role_enum
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Refresh_tokensListRelationFilter = {
    every?: refresh_tokensWhereInput
    some?: refresh_tokensWhereInput
    none?: refresh_tokensWhereInput
  }

  export type ClassesListRelationFilter = {
    every?: classesWhereInput
    some?: classesWhereInput
    none?: classesWhereInput
  }

  export type refresh_tokensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type classesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    email_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    email_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    email_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Enumrole_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role_enum | Enumrole_enumFieldRefInput<$PrismaModel>
    in?: $Enums.role_enum[]
    notIn?: $Enums.role_enum[]
    not?: NestedEnumrole_enumWithAggregatesFilter<$PrismaModel> | $Enums.role_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrole_enumFilter<$PrismaModel>
    _max?: NestedEnumrole_enumFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type refresh_tokensOrderByRelevanceInput = {
    fields: refresh_tokensOrderByRelevanceFieldEnum | refresh_tokensOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type refresh_tokensCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expires_at?: SortOrder
    revoked_at?: SortOrder
    created_at?: SortOrder
  }

  export type refresh_tokensMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expires_at?: SortOrder
    revoked_at?: SortOrder
    created_at?: SortOrder
  }

  export type refresh_tokensMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_hash?: SortOrder
    expires_at?: SortOrder
    revoked_at?: SortOrder
    created_at?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type email_otpsOrderByRelevanceInput = {
    fields: email_otpsOrderByRelevanceFieldEnum | email_otpsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type email_otpsCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expired_at?: SortOrder
    is_used?: SortOrder
    created_at?: SortOrder
  }

  export type email_otpsMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expired_at?: SortOrder
    is_used?: SortOrder
    created_at?: SortOrder
  }

  export type email_otpsMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expired_at?: SortOrder
    is_used?: SortOrder
    created_at?: SortOrder
  }

  export type questionsCreateNestedOneWithoutAnswersInput = {
    create?: XOR<questionsCreateWithoutAnswersInput, questionsUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: questionsCreateOrConnectWithoutAnswersInput
    connect?: questionsWhereUniqueInput
  }

  export type student_answersCreateNestedManyWithoutAnswersInput = {
    create?: XOR<student_answersCreateWithoutAnswersInput, student_answersUncheckedCreateWithoutAnswersInput> | student_answersCreateWithoutAnswersInput[] | student_answersUncheckedCreateWithoutAnswersInput[]
    connectOrCreate?: student_answersCreateOrConnectWithoutAnswersInput | student_answersCreateOrConnectWithoutAnswersInput[]
    createMany?: student_answersCreateManyAnswersInputEnvelope
    connect?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
  }

  export type student_answersUncheckedCreateNestedManyWithoutAnswersInput = {
    create?: XOR<student_answersCreateWithoutAnswersInput, student_answersUncheckedCreateWithoutAnswersInput> | student_answersCreateWithoutAnswersInput[] | student_answersUncheckedCreateWithoutAnswersInput[]
    connectOrCreate?: student_answersCreateOrConnectWithoutAnswersInput | student_answersCreateOrConnectWithoutAnswersInput[]
    createMany?: student_answersCreateManyAnswersInputEnvelope
    connect?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type questionsUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<questionsCreateWithoutAnswersInput, questionsUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: questionsCreateOrConnectWithoutAnswersInput
    upsert?: questionsUpsertWithoutAnswersInput
    connect?: questionsWhereUniqueInput
    update?: XOR<XOR<questionsUpdateToOneWithWhereWithoutAnswersInput, questionsUpdateWithoutAnswersInput>, questionsUncheckedUpdateWithoutAnswersInput>
  }

  export type student_answersUpdateManyWithoutAnswersNestedInput = {
    create?: XOR<student_answersCreateWithoutAnswersInput, student_answersUncheckedCreateWithoutAnswersInput> | student_answersCreateWithoutAnswersInput[] | student_answersUncheckedCreateWithoutAnswersInput[]
    connectOrCreate?: student_answersCreateOrConnectWithoutAnswersInput | student_answersCreateOrConnectWithoutAnswersInput[]
    upsert?: student_answersUpsertWithWhereUniqueWithoutAnswersInput | student_answersUpsertWithWhereUniqueWithoutAnswersInput[]
    createMany?: student_answersCreateManyAnswersInputEnvelope
    set?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
    disconnect?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
    delete?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
    connect?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
    update?: student_answersUpdateWithWhereUniqueWithoutAnswersInput | student_answersUpdateWithWhereUniqueWithoutAnswersInput[]
    updateMany?: student_answersUpdateManyWithWhereWithoutAnswersInput | student_answersUpdateManyWithWhereWithoutAnswersInput[]
    deleteMany?: student_answersScalarWhereInput | student_answersScalarWhereInput[]
  }

  export type student_answersUncheckedUpdateManyWithoutAnswersNestedInput = {
    create?: XOR<student_answersCreateWithoutAnswersInput, student_answersUncheckedCreateWithoutAnswersInput> | student_answersCreateWithoutAnswersInput[] | student_answersUncheckedCreateWithoutAnswersInput[]
    connectOrCreate?: student_answersCreateOrConnectWithoutAnswersInput | student_answersCreateOrConnectWithoutAnswersInput[]
    upsert?: student_answersUpsertWithWhereUniqueWithoutAnswersInput | student_answersUpsertWithWhereUniqueWithoutAnswersInput[]
    createMany?: student_answersCreateManyAnswersInputEnvelope
    set?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
    disconnect?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
    delete?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
    connect?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
    update?: student_answersUpdateWithWhereUniqueWithoutAnswersInput | student_answersUpdateWithWhereUniqueWithoutAnswersInput[]
    updateMany?: student_answersUpdateManyWithWhereWithoutAnswersInput | student_answersUpdateManyWithWhereWithoutAnswersInput[]
    deleteMany?: student_answersScalarWhereInput | student_answersScalarWhereInput[]
  }

  export type examsCreateNestedOneWithoutAttemptsInput = {
    create?: XOR<examsCreateWithoutAttemptsInput, examsUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: examsCreateOrConnectWithoutAttemptsInput
    connect?: examsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutAttemptsInput = {
    create?: XOR<usersCreateWithoutAttemptsInput, usersUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAttemptsInput
    connect?: usersWhereUniqueInput
  }

  export type student_answersCreateNestedManyWithoutAttemptsInput = {
    create?: XOR<student_answersCreateWithoutAttemptsInput, student_answersUncheckedCreateWithoutAttemptsInput> | student_answersCreateWithoutAttemptsInput[] | student_answersUncheckedCreateWithoutAttemptsInput[]
    connectOrCreate?: student_answersCreateOrConnectWithoutAttemptsInput | student_answersCreateOrConnectWithoutAttemptsInput[]
    createMany?: student_answersCreateManyAttemptsInputEnvelope
    connect?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
  }

  export type student_answersUncheckedCreateNestedManyWithoutAttemptsInput = {
    create?: XOR<student_answersCreateWithoutAttemptsInput, student_answersUncheckedCreateWithoutAttemptsInput> | student_answersCreateWithoutAttemptsInput[] | student_answersUncheckedCreateWithoutAttemptsInput[]
    connectOrCreate?: student_answersCreateOrConnectWithoutAttemptsInput | student_answersCreateOrConnectWithoutAttemptsInput[]
    createMany?: student_answersCreateManyAttemptsInputEnvelope
    connect?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
  }

  export type NullableEnumattempt_status_enumFieldUpdateOperationsInput = {
    set?: $Enums.attempt_status_enum | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type examsUpdateOneRequiredWithoutAttemptsNestedInput = {
    create?: XOR<examsCreateWithoutAttemptsInput, examsUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: examsCreateOrConnectWithoutAttemptsInput
    upsert?: examsUpsertWithoutAttemptsInput
    connect?: examsWhereUniqueInput
    update?: XOR<XOR<examsUpdateToOneWithWhereWithoutAttemptsInput, examsUpdateWithoutAttemptsInput>, examsUncheckedUpdateWithoutAttemptsInput>
  }

  export type usersUpdateOneRequiredWithoutAttemptsNestedInput = {
    create?: XOR<usersCreateWithoutAttemptsInput, usersUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAttemptsInput
    upsert?: usersUpsertWithoutAttemptsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAttemptsInput, usersUpdateWithoutAttemptsInput>, usersUncheckedUpdateWithoutAttemptsInput>
  }

  export type student_answersUpdateManyWithoutAttemptsNestedInput = {
    create?: XOR<student_answersCreateWithoutAttemptsInput, student_answersUncheckedCreateWithoutAttemptsInput> | student_answersCreateWithoutAttemptsInput[] | student_answersUncheckedCreateWithoutAttemptsInput[]
    connectOrCreate?: student_answersCreateOrConnectWithoutAttemptsInput | student_answersCreateOrConnectWithoutAttemptsInput[]
    upsert?: student_answersUpsertWithWhereUniqueWithoutAttemptsInput | student_answersUpsertWithWhereUniqueWithoutAttemptsInput[]
    createMany?: student_answersCreateManyAttemptsInputEnvelope
    set?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
    disconnect?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
    delete?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
    connect?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
    update?: student_answersUpdateWithWhereUniqueWithoutAttemptsInput | student_answersUpdateWithWhereUniqueWithoutAttemptsInput[]
    updateMany?: student_answersUpdateManyWithWhereWithoutAttemptsInput | student_answersUpdateManyWithWhereWithoutAttemptsInput[]
    deleteMany?: student_answersScalarWhereInput | student_answersScalarWhereInput[]
  }

  export type student_answersUncheckedUpdateManyWithoutAttemptsNestedInput = {
    create?: XOR<student_answersCreateWithoutAttemptsInput, student_answersUncheckedCreateWithoutAttemptsInput> | student_answersCreateWithoutAttemptsInput[] | student_answersUncheckedCreateWithoutAttemptsInput[]
    connectOrCreate?: student_answersCreateOrConnectWithoutAttemptsInput | student_answersCreateOrConnectWithoutAttemptsInput[]
    upsert?: student_answersUpsertWithWhereUniqueWithoutAttemptsInput | student_answersUpsertWithWhereUniqueWithoutAttemptsInput[]
    createMany?: student_answersCreateManyAttemptsInputEnvelope
    set?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
    disconnect?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
    delete?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
    connect?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
    update?: student_answersUpdateWithWhereUniqueWithoutAttemptsInput | student_answersUpdateWithWhereUniqueWithoutAttemptsInput[]
    updateMany?: student_answersUpdateManyWithWhereWithoutAttemptsInput | student_answersUpdateManyWithWhereWithoutAttemptsInput[]
    deleteMany?: student_answersScalarWhereInput | student_answersScalarWhereInput[]
  }

  export type examsCreateNestedOneWithoutExam_questionsInput = {
    create?: XOR<examsCreateWithoutExam_questionsInput, examsUncheckedCreateWithoutExam_questionsInput>
    connectOrCreate?: examsCreateOrConnectWithoutExam_questionsInput
    connect?: examsWhereUniqueInput
  }

  export type questionsCreateNestedOneWithoutExam_questionsInput = {
    create?: XOR<questionsCreateWithoutExam_questionsInput, questionsUncheckedCreateWithoutExam_questionsInput>
    connectOrCreate?: questionsCreateOrConnectWithoutExam_questionsInput
    connect?: questionsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type examsUpdateOneRequiredWithoutExam_questionsNestedInput = {
    create?: XOR<examsCreateWithoutExam_questionsInput, examsUncheckedCreateWithoutExam_questionsInput>
    connectOrCreate?: examsCreateOrConnectWithoutExam_questionsInput
    upsert?: examsUpsertWithoutExam_questionsInput
    connect?: examsWhereUniqueInput
    update?: XOR<XOR<examsUpdateToOneWithWhereWithoutExam_questionsInput, examsUpdateWithoutExam_questionsInput>, examsUncheckedUpdateWithoutExam_questionsInput>
  }

  export type questionsUpdateOneRequiredWithoutExam_questionsNestedInput = {
    create?: XOR<questionsCreateWithoutExam_questionsInput, questionsUncheckedCreateWithoutExam_questionsInput>
    connectOrCreate?: questionsCreateOrConnectWithoutExam_questionsInput
    upsert?: questionsUpsertWithoutExam_questionsInput
    connect?: questionsWhereUniqueInput
    update?: XOR<XOR<questionsUpdateToOneWithWhereWithoutExam_questionsInput, questionsUpdateWithoutExam_questionsInput>, questionsUncheckedUpdateWithoutExam_questionsInput>
  }

  export type attemptsCreateNestedManyWithoutExamsInput = {
    create?: XOR<attemptsCreateWithoutExamsInput, attemptsUncheckedCreateWithoutExamsInput> | attemptsCreateWithoutExamsInput[] | attemptsUncheckedCreateWithoutExamsInput[]
    connectOrCreate?: attemptsCreateOrConnectWithoutExamsInput | attemptsCreateOrConnectWithoutExamsInput[]
    createMany?: attemptsCreateManyExamsInputEnvelope
    connect?: attemptsWhereUniqueInput | attemptsWhereUniqueInput[]
  }

  export type exam_questionsCreateNestedManyWithoutExamsInput = {
    create?: XOR<exam_questionsCreateWithoutExamsInput, exam_questionsUncheckedCreateWithoutExamsInput> | exam_questionsCreateWithoutExamsInput[] | exam_questionsUncheckedCreateWithoutExamsInput[]
    connectOrCreate?: exam_questionsCreateOrConnectWithoutExamsInput | exam_questionsCreateOrConnectWithoutExamsInput[]
    createMany?: exam_questionsCreateManyExamsInputEnvelope
    connect?: exam_questionsWhereUniqueInput | exam_questionsWhereUniqueInput[]
  }

  export type exam_classesCreateNestedManyWithoutExamsInput = {
    create?: XOR<exam_classesCreateWithoutExamsInput, exam_classesUncheckedCreateWithoutExamsInput> | exam_classesCreateWithoutExamsInput[] | exam_classesUncheckedCreateWithoutExamsInput[]
    connectOrCreate?: exam_classesCreateOrConnectWithoutExamsInput | exam_classesCreateOrConnectWithoutExamsInput[]
    createMany?: exam_classesCreateManyExamsInputEnvelope
    connect?: exam_classesWhereUniqueInput | exam_classesWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutExamsInput = {
    create?: XOR<usersCreateWithoutExamsInput, usersUncheckedCreateWithoutExamsInput>
    connectOrCreate?: usersCreateOrConnectWithoutExamsInput
    connect?: usersWhereUniqueInput
  }

  export type subjectsCreateNestedOneWithoutExamsInput = {
    create?: XOR<subjectsCreateWithoutExamsInput, subjectsUncheckedCreateWithoutExamsInput>
    connectOrCreate?: subjectsCreateOrConnectWithoutExamsInput
    connect?: subjectsWhereUniqueInput
  }

  export type attemptsUncheckedCreateNestedManyWithoutExamsInput = {
    create?: XOR<attemptsCreateWithoutExamsInput, attemptsUncheckedCreateWithoutExamsInput> | attemptsCreateWithoutExamsInput[] | attemptsUncheckedCreateWithoutExamsInput[]
    connectOrCreate?: attemptsCreateOrConnectWithoutExamsInput | attemptsCreateOrConnectWithoutExamsInput[]
    createMany?: attemptsCreateManyExamsInputEnvelope
    connect?: attemptsWhereUniqueInput | attemptsWhereUniqueInput[]
  }

  export type exam_questionsUncheckedCreateNestedManyWithoutExamsInput = {
    create?: XOR<exam_questionsCreateWithoutExamsInput, exam_questionsUncheckedCreateWithoutExamsInput> | exam_questionsCreateWithoutExamsInput[] | exam_questionsUncheckedCreateWithoutExamsInput[]
    connectOrCreate?: exam_questionsCreateOrConnectWithoutExamsInput | exam_questionsCreateOrConnectWithoutExamsInput[]
    createMany?: exam_questionsCreateManyExamsInputEnvelope
    connect?: exam_questionsWhereUniqueInput | exam_questionsWhereUniqueInput[]
  }

  export type exam_classesUncheckedCreateNestedManyWithoutExamsInput = {
    create?: XOR<exam_classesCreateWithoutExamsInput, exam_classesUncheckedCreateWithoutExamsInput> | exam_classesCreateWithoutExamsInput[] | exam_classesUncheckedCreateWithoutExamsInput[]
    connectOrCreate?: exam_classesCreateOrConnectWithoutExamsInput | exam_classesCreateOrConnectWithoutExamsInput[]
    createMany?: exam_classesCreateManyExamsInputEnvelope
    connect?: exam_classesWhereUniqueInput | exam_classesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumexam_status_enumFieldUpdateOperationsInput = {
    set?: $Enums.exam_status_enum | null
  }

  export type attemptsUpdateManyWithoutExamsNestedInput = {
    create?: XOR<attemptsCreateWithoutExamsInput, attemptsUncheckedCreateWithoutExamsInput> | attemptsCreateWithoutExamsInput[] | attemptsUncheckedCreateWithoutExamsInput[]
    connectOrCreate?: attemptsCreateOrConnectWithoutExamsInput | attemptsCreateOrConnectWithoutExamsInput[]
    upsert?: attemptsUpsertWithWhereUniqueWithoutExamsInput | attemptsUpsertWithWhereUniqueWithoutExamsInput[]
    createMany?: attemptsCreateManyExamsInputEnvelope
    set?: attemptsWhereUniqueInput | attemptsWhereUniqueInput[]
    disconnect?: attemptsWhereUniqueInput | attemptsWhereUniqueInput[]
    delete?: attemptsWhereUniqueInput | attemptsWhereUniqueInput[]
    connect?: attemptsWhereUniqueInput | attemptsWhereUniqueInput[]
    update?: attemptsUpdateWithWhereUniqueWithoutExamsInput | attemptsUpdateWithWhereUniqueWithoutExamsInput[]
    updateMany?: attemptsUpdateManyWithWhereWithoutExamsInput | attemptsUpdateManyWithWhereWithoutExamsInput[]
    deleteMany?: attemptsScalarWhereInput | attemptsScalarWhereInput[]
  }

  export type exam_questionsUpdateManyWithoutExamsNestedInput = {
    create?: XOR<exam_questionsCreateWithoutExamsInput, exam_questionsUncheckedCreateWithoutExamsInput> | exam_questionsCreateWithoutExamsInput[] | exam_questionsUncheckedCreateWithoutExamsInput[]
    connectOrCreate?: exam_questionsCreateOrConnectWithoutExamsInput | exam_questionsCreateOrConnectWithoutExamsInput[]
    upsert?: exam_questionsUpsertWithWhereUniqueWithoutExamsInput | exam_questionsUpsertWithWhereUniqueWithoutExamsInput[]
    createMany?: exam_questionsCreateManyExamsInputEnvelope
    set?: exam_questionsWhereUniqueInput | exam_questionsWhereUniqueInput[]
    disconnect?: exam_questionsWhereUniqueInput | exam_questionsWhereUniqueInput[]
    delete?: exam_questionsWhereUniqueInput | exam_questionsWhereUniqueInput[]
    connect?: exam_questionsWhereUniqueInput | exam_questionsWhereUniqueInput[]
    update?: exam_questionsUpdateWithWhereUniqueWithoutExamsInput | exam_questionsUpdateWithWhereUniqueWithoutExamsInput[]
    updateMany?: exam_questionsUpdateManyWithWhereWithoutExamsInput | exam_questionsUpdateManyWithWhereWithoutExamsInput[]
    deleteMany?: exam_questionsScalarWhereInput | exam_questionsScalarWhereInput[]
  }

  export type exam_classesUpdateManyWithoutExamsNestedInput = {
    create?: XOR<exam_classesCreateWithoutExamsInput, exam_classesUncheckedCreateWithoutExamsInput> | exam_classesCreateWithoutExamsInput[] | exam_classesUncheckedCreateWithoutExamsInput[]
    connectOrCreate?: exam_classesCreateOrConnectWithoutExamsInput | exam_classesCreateOrConnectWithoutExamsInput[]
    upsert?: exam_classesUpsertWithWhereUniqueWithoutExamsInput | exam_classesUpsertWithWhereUniqueWithoutExamsInput[]
    createMany?: exam_classesCreateManyExamsInputEnvelope
    set?: exam_classesWhereUniqueInput | exam_classesWhereUniqueInput[]
    disconnect?: exam_classesWhereUniqueInput | exam_classesWhereUniqueInput[]
    delete?: exam_classesWhereUniqueInput | exam_classesWhereUniqueInput[]
    connect?: exam_classesWhereUniqueInput | exam_classesWhereUniqueInput[]
    update?: exam_classesUpdateWithWhereUniqueWithoutExamsInput | exam_classesUpdateWithWhereUniqueWithoutExamsInput[]
    updateMany?: exam_classesUpdateManyWithWhereWithoutExamsInput | exam_classesUpdateManyWithWhereWithoutExamsInput[]
    deleteMany?: exam_classesScalarWhereInput | exam_classesScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutExamsNestedInput = {
    create?: XOR<usersCreateWithoutExamsInput, usersUncheckedCreateWithoutExamsInput>
    connectOrCreate?: usersCreateOrConnectWithoutExamsInput
    upsert?: usersUpsertWithoutExamsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutExamsInput, usersUpdateWithoutExamsInput>, usersUncheckedUpdateWithoutExamsInput>
  }

  export type subjectsUpdateOneRequiredWithoutExamsNestedInput = {
    create?: XOR<subjectsCreateWithoutExamsInput, subjectsUncheckedCreateWithoutExamsInput>
    connectOrCreate?: subjectsCreateOrConnectWithoutExamsInput
    upsert?: subjectsUpsertWithoutExamsInput
    connect?: subjectsWhereUniqueInput
    update?: XOR<XOR<subjectsUpdateToOneWithWhereWithoutExamsInput, subjectsUpdateWithoutExamsInput>, subjectsUncheckedUpdateWithoutExamsInput>
  }

  export type attemptsUncheckedUpdateManyWithoutExamsNestedInput = {
    create?: XOR<attemptsCreateWithoutExamsInput, attemptsUncheckedCreateWithoutExamsInput> | attemptsCreateWithoutExamsInput[] | attemptsUncheckedCreateWithoutExamsInput[]
    connectOrCreate?: attemptsCreateOrConnectWithoutExamsInput | attemptsCreateOrConnectWithoutExamsInput[]
    upsert?: attemptsUpsertWithWhereUniqueWithoutExamsInput | attemptsUpsertWithWhereUniqueWithoutExamsInput[]
    createMany?: attemptsCreateManyExamsInputEnvelope
    set?: attemptsWhereUniqueInput | attemptsWhereUniqueInput[]
    disconnect?: attemptsWhereUniqueInput | attemptsWhereUniqueInput[]
    delete?: attemptsWhereUniqueInput | attemptsWhereUniqueInput[]
    connect?: attemptsWhereUniqueInput | attemptsWhereUniqueInput[]
    update?: attemptsUpdateWithWhereUniqueWithoutExamsInput | attemptsUpdateWithWhereUniqueWithoutExamsInput[]
    updateMany?: attemptsUpdateManyWithWhereWithoutExamsInput | attemptsUpdateManyWithWhereWithoutExamsInput[]
    deleteMany?: attemptsScalarWhereInput | attemptsScalarWhereInput[]
  }

  export type exam_questionsUncheckedUpdateManyWithoutExamsNestedInput = {
    create?: XOR<exam_questionsCreateWithoutExamsInput, exam_questionsUncheckedCreateWithoutExamsInput> | exam_questionsCreateWithoutExamsInput[] | exam_questionsUncheckedCreateWithoutExamsInput[]
    connectOrCreate?: exam_questionsCreateOrConnectWithoutExamsInput | exam_questionsCreateOrConnectWithoutExamsInput[]
    upsert?: exam_questionsUpsertWithWhereUniqueWithoutExamsInput | exam_questionsUpsertWithWhereUniqueWithoutExamsInput[]
    createMany?: exam_questionsCreateManyExamsInputEnvelope
    set?: exam_questionsWhereUniqueInput | exam_questionsWhereUniqueInput[]
    disconnect?: exam_questionsWhereUniqueInput | exam_questionsWhereUniqueInput[]
    delete?: exam_questionsWhereUniqueInput | exam_questionsWhereUniqueInput[]
    connect?: exam_questionsWhereUniqueInput | exam_questionsWhereUniqueInput[]
    update?: exam_questionsUpdateWithWhereUniqueWithoutExamsInput | exam_questionsUpdateWithWhereUniqueWithoutExamsInput[]
    updateMany?: exam_questionsUpdateManyWithWhereWithoutExamsInput | exam_questionsUpdateManyWithWhereWithoutExamsInput[]
    deleteMany?: exam_questionsScalarWhereInput | exam_questionsScalarWhereInput[]
  }

  export type exam_classesUncheckedUpdateManyWithoutExamsNestedInput = {
    create?: XOR<exam_classesCreateWithoutExamsInput, exam_classesUncheckedCreateWithoutExamsInput> | exam_classesCreateWithoutExamsInput[] | exam_classesUncheckedCreateWithoutExamsInput[]
    connectOrCreate?: exam_classesCreateOrConnectWithoutExamsInput | exam_classesCreateOrConnectWithoutExamsInput[]
    upsert?: exam_classesUpsertWithWhereUniqueWithoutExamsInput | exam_classesUpsertWithWhereUniqueWithoutExamsInput[]
    createMany?: exam_classesCreateManyExamsInputEnvelope
    set?: exam_classesWhereUniqueInput | exam_classesWhereUniqueInput[]
    disconnect?: exam_classesWhereUniqueInput | exam_classesWhereUniqueInput[]
    delete?: exam_classesWhereUniqueInput | exam_classesWhereUniqueInput[]
    connect?: exam_classesWhereUniqueInput | exam_classesWhereUniqueInput[]
    update?: exam_classesUpdateWithWhereUniqueWithoutExamsInput | exam_classesUpdateWithWhereUniqueWithoutExamsInput[]
    updateMany?: exam_classesUpdateManyWithWhereWithoutExamsInput | exam_classesUpdateManyWithWhereWithoutExamsInput[]
    deleteMany?: exam_classesScalarWhereInput | exam_classesScalarWhereInput[]
  }

  export type examsCreateNestedOneWithoutExam_classesInput = {
    create?: XOR<examsCreateWithoutExam_classesInput, examsUncheckedCreateWithoutExam_classesInput>
    connectOrCreate?: examsCreateOrConnectWithoutExam_classesInput
    connect?: examsWhereUniqueInput
  }

  export type classesCreateNestedOneWithoutExam_classesInput = {
    create?: XOR<classesCreateWithoutExam_classesInput, classesUncheckedCreateWithoutExam_classesInput>
    connectOrCreate?: classesCreateOrConnectWithoutExam_classesInput
    connect?: classesWhereUniqueInput
  }

  export type examsUpdateOneRequiredWithoutExam_classesNestedInput = {
    create?: XOR<examsCreateWithoutExam_classesInput, examsUncheckedCreateWithoutExam_classesInput>
    connectOrCreate?: examsCreateOrConnectWithoutExam_classesInput
    upsert?: examsUpsertWithoutExam_classesInput
    connect?: examsWhereUniqueInput
    update?: XOR<XOR<examsUpdateToOneWithWhereWithoutExam_classesInput, examsUpdateWithoutExam_classesInput>, examsUncheckedUpdateWithoutExam_classesInput>
  }

  export type classesUpdateOneRequiredWithoutExam_classesNestedInput = {
    create?: XOR<classesCreateWithoutExam_classesInput, classesUncheckedCreateWithoutExam_classesInput>
    connectOrCreate?: classesCreateOrConnectWithoutExam_classesInput
    upsert?: classesUpsertWithoutExam_classesInput
    connect?: classesWhereUniqueInput
    update?: XOR<XOR<classesUpdateToOneWithWhereWithoutExam_classesInput, classesUpdateWithoutExam_classesInput>, classesUncheckedUpdateWithoutExam_classesInput>
  }

  export type answersCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<answersCreateWithoutQuestionsInput, answersUncheckedCreateWithoutQuestionsInput> | answersCreateWithoutQuestionsInput[] | answersUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: answersCreateOrConnectWithoutQuestionsInput | answersCreateOrConnectWithoutQuestionsInput[]
    createMany?: answersCreateManyQuestionsInputEnvelope
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
  }

  export type exam_questionsCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<exam_questionsCreateWithoutQuestionsInput, exam_questionsUncheckedCreateWithoutQuestionsInput> | exam_questionsCreateWithoutQuestionsInput[] | exam_questionsUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: exam_questionsCreateOrConnectWithoutQuestionsInput | exam_questionsCreateOrConnectWithoutQuestionsInput[]
    createMany?: exam_questionsCreateManyQuestionsInputEnvelope
    connect?: exam_questionsWhereUniqueInput | exam_questionsWhereUniqueInput[]
  }

  export type student_answersCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<student_answersCreateWithoutQuestionsInput, student_answersUncheckedCreateWithoutQuestionsInput> | student_answersCreateWithoutQuestionsInput[] | student_answersUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: student_answersCreateOrConnectWithoutQuestionsInput | student_answersCreateOrConnectWithoutQuestionsInput[]
    createMany?: student_answersCreateManyQuestionsInputEnvelope
    connect?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<usersCreateWithoutQuestionsInput, usersUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutQuestionsInput
    connect?: usersWhereUniqueInput
  }

  export type subjectsCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<subjectsCreateWithoutQuestionsInput, subjectsUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: subjectsCreateOrConnectWithoutQuestionsInput
    connect?: subjectsWhereUniqueInput
  }

  export type answersUncheckedCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<answersCreateWithoutQuestionsInput, answersUncheckedCreateWithoutQuestionsInput> | answersCreateWithoutQuestionsInput[] | answersUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: answersCreateOrConnectWithoutQuestionsInput | answersCreateOrConnectWithoutQuestionsInput[]
    createMany?: answersCreateManyQuestionsInputEnvelope
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
  }

  export type exam_questionsUncheckedCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<exam_questionsCreateWithoutQuestionsInput, exam_questionsUncheckedCreateWithoutQuestionsInput> | exam_questionsCreateWithoutQuestionsInput[] | exam_questionsUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: exam_questionsCreateOrConnectWithoutQuestionsInput | exam_questionsCreateOrConnectWithoutQuestionsInput[]
    createMany?: exam_questionsCreateManyQuestionsInputEnvelope
    connect?: exam_questionsWhereUniqueInput | exam_questionsWhereUniqueInput[]
  }

  export type student_answersUncheckedCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<student_answersCreateWithoutQuestionsInput, student_answersUncheckedCreateWithoutQuestionsInput> | student_answersCreateWithoutQuestionsInput[] | student_answersUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: student_answersCreateOrConnectWithoutQuestionsInput | student_answersCreateOrConnectWithoutQuestionsInput[]
    createMany?: student_answersCreateManyQuestionsInputEnvelope
    connect?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
  }

  export type NullableEnumquestion_type_enumFieldUpdateOperationsInput = {
    set?: $Enums.question_type_enum | null
  }

  export type answersUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<answersCreateWithoutQuestionsInput, answersUncheckedCreateWithoutQuestionsInput> | answersCreateWithoutQuestionsInput[] | answersUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: answersCreateOrConnectWithoutQuestionsInput | answersCreateOrConnectWithoutQuestionsInput[]
    upsert?: answersUpsertWithWhereUniqueWithoutQuestionsInput | answersUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: answersCreateManyQuestionsInputEnvelope
    set?: answersWhereUniqueInput | answersWhereUniqueInput[]
    disconnect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    delete?: answersWhereUniqueInput | answersWhereUniqueInput[]
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    update?: answersUpdateWithWhereUniqueWithoutQuestionsInput | answersUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: answersUpdateManyWithWhereWithoutQuestionsInput | answersUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: answersScalarWhereInput | answersScalarWhereInput[]
  }

  export type exam_questionsUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<exam_questionsCreateWithoutQuestionsInput, exam_questionsUncheckedCreateWithoutQuestionsInput> | exam_questionsCreateWithoutQuestionsInput[] | exam_questionsUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: exam_questionsCreateOrConnectWithoutQuestionsInput | exam_questionsCreateOrConnectWithoutQuestionsInput[]
    upsert?: exam_questionsUpsertWithWhereUniqueWithoutQuestionsInput | exam_questionsUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: exam_questionsCreateManyQuestionsInputEnvelope
    set?: exam_questionsWhereUniqueInput | exam_questionsWhereUniqueInput[]
    disconnect?: exam_questionsWhereUniqueInput | exam_questionsWhereUniqueInput[]
    delete?: exam_questionsWhereUniqueInput | exam_questionsWhereUniqueInput[]
    connect?: exam_questionsWhereUniqueInput | exam_questionsWhereUniqueInput[]
    update?: exam_questionsUpdateWithWhereUniqueWithoutQuestionsInput | exam_questionsUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: exam_questionsUpdateManyWithWhereWithoutQuestionsInput | exam_questionsUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: exam_questionsScalarWhereInput | exam_questionsScalarWhereInput[]
  }

  export type student_answersUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<student_answersCreateWithoutQuestionsInput, student_answersUncheckedCreateWithoutQuestionsInput> | student_answersCreateWithoutQuestionsInput[] | student_answersUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: student_answersCreateOrConnectWithoutQuestionsInput | student_answersCreateOrConnectWithoutQuestionsInput[]
    upsert?: student_answersUpsertWithWhereUniqueWithoutQuestionsInput | student_answersUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: student_answersCreateManyQuestionsInputEnvelope
    set?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
    disconnect?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
    delete?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
    connect?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
    update?: student_answersUpdateWithWhereUniqueWithoutQuestionsInput | student_answersUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: student_answersUpdateManyWithWhereWithoutQuestionsInput | student_answersUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: student_answersScalarWhereInput | student_answersScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<usersCreateWithoutQuestionsInput, usersUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutQuestionsInput
    upsert?: usersUpsertWithoutQuestionsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutQuestionsInput, usersUpdateWithoutQuestionsInput>, usersUncheckedUpdateWithoutQuestionsInput>
  }

  export type subjectsUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<subjectsCreateWithoutQuestionsInput, subjectsUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: subjectsCreateOrConnectWithoutQuestionsInput
    upsert?: subjectsUpsertWithoutQuestionsInput
    connect?: subjectsWhereUniqueInput
    update?: XOR<XOR<subjectsUpdateToOneWithWhereWithoutQuestionsInput, subjectsUpdateWithoutQuestionsInput>, subjectsUncheckedUpdateWithoutQuestionsInput>
  }

  export type answersUncheckedUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<answersCreateWithoutQuestionsInput, answersUncheckedCreateWithoutQuestionsInput> | answersCreateWithoutQuestionsInput[] | answersUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: answersCreateOrConnectWithoutQuestionsInput | answersCreateOrConnectWithoutQuestionsInput[]
    upsert?: answersUpsertWithWhereUniqueWithoutQuestionsInput | answersUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: answersCreateManyQuestionsInputEnvelope
    set?: answersWhereUniqueInput | answersWhereUniqueInput[]
    disconnect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    delete?: answersWhereUniqueInput | answersWhereUniqueInput[]
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    update?: answersUpdateWithWhereUniqueWithoutQuestionsInput | answersUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: answersUpdateManyWithWhereWithoutQuestionsInput | answersUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: answersScalarWhereInput | answersScalarWhereInput[]
  }

  export type exam_questionsUncheckedUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<exam_questionsCreateWithoutQuestionsInput, exam_questionsUncheckedCreateWithoutQuestionsInput> | exam_questionsCreateWithoutQuestionsInput[] | exam_questionsUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: exam_questionsCreateOrConnectWithoutQuestionsInput | exam_questionsCreateOrConnectWithoutQuestionsInput[]
    upsert?: exam_questionsUpsertWithWhereUniqueWithoutQuestionsInput | exam_questionsUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: exam_questionsCreateManyQuestionsInputEnvelope
    set?: exam_questionsWhereUniqueInput | exam_questionsWhereUniqueInput[]
    disconnect?: exam_questionsWhereUniqueInput | exam_questionsWhereUniqueInput[]
    delete?: exam_questionsWhereUniqueInput | exam_questionsWhereUniqueInput[]
    connect?: exam_questionsWhereUniqueInput | exam_questionsWhereUniqueInput[]
    update?: exam_questionsUpdateWithWhereUniqueWithoutQuestionsInput | exam_questionsUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: exam_questionsUpdateManyWithWhereWithoutQuestionsInput | exam_questionsUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: exam_questionsScalarWhereInput | exam_questionsScalarWhereInput[]
  }

  export type student_answersUncheckedUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<student_answersCreateWithoutQuestionsInput, student_answersUncheckedCreateWithoutQuestionsInput> | student_answersCreateWithoutQuestionsInput[] | student_answersUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: student_answersCreateOrConnectWithoutQuestionsInput | student_answersCreateOrConnectWithoutQuestionsInput[]
    upsert?: student_answersUpsertWithWhereUniqueWithoutQuestionsInput | student_answersUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: student_answersCreateManyQuestionsInputEnvelope
    set?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
    disconnect?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
    delete?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
    connect?: student_answersWhereUniqueInput | student_answersWhereUniqueInput[]
    update?: student_answersUpdateWithWhereUniqueWithoutQuestionsInput | student_answersUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: student_answersUpdateManyWithWhereWithoutQuestionsInput | student_answersUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: student_answersScalarWhereInput | student_answersScalarWhereInput[]
  }

  export type answersCreateNestedOneWithoutStudent_answersInput = {
    create?: XOR<answersCreateWithoutStudent_answersInput, answersUncheckedCreateWithoutStudent_answersInput>
    connectOrCreate?: answersCreateOrConnectWithoutStudent_answersInput
    connect?: answersWhereUniqueInput
  }

  export type attemptsCreateNestedOneWithoutStudent_answersInput = {
    create?: XOR<attemptsCreateWithoutStudent_answersInput, attemptsUncheckedCreateWithoutStudent_answersInput>
    connectOrCreate?: attemptsCreateOrConnectWithoutStudent_answersInput
    connect?: attemptsWhereUniqueInput
  }

  export type questionsCreateNestedOneWithoutStudent_answersInput = {
    create?: XOR<questionsCreateWithoutStudent_answersInput, questionsUncheckedCreateWithoutStudent_answersInput>
    connectOrCreate?: questionsCreateOrConnectWithoutStudent_answersInput
    connect?: questionsWhereUniqueInput
  }

  export type answersUpdateOneRequiredWithoutStudent_answersNestedInput = {
    create?: XOR<answersCreateWithoutStudent_answersInput, answersUncheckedCreateWithoutStudent_answersInput>
    connectOrCreate?: answersCreateOrConnectWithoutStudent_answersInput
    upsert?: answersUpsertWithoutStudent_answersInput
    connect?: answersWhereUniqueInput
    update?: XOR<XOR<answersUpdateToOneWithWhereWithoutStudent_answersInput, answersUpdateWithoutStudent_answersInput>, answersUncheckedUpdateWithoutStudent_answersInput>
  }

  export type attemptsUpdateOneRequiredWithoutStudent_answersNestedInput = {
    create?: XOR<attemptsCreateWithoutStudent_answersInput, attemptsUncheckedCreateWithoutStudent_answersInput>
    connectOrCreate?: attemptsCreateOrConnectWithoutStudent_answersInput
    upsert?: attemptsUpsertWithoutStudent_answersInput
    connect?: attemptsWhereUniqueInput
    update?: XOR<XOR<attemptsUpdateToOneWithWhereWithoutStudent_answersInput, attemptsUpdateWithoutStudent_answersInput>, attemptsUncheckedUpdateWithoutStudent_answersInput>
  }

  export type questionsUpdateOneRequiredWithoutStudent_answersNestedInput = {
    create?: XOR<questionsCreateWithoutStudent_answersInput, questionsUncheckedCreateWithoutStudent_answersInput>
    connectOrCreate?: questionsCreateOrConnectWithoutStudent_answersInput
    upsert?: questionsUpsertWithoutStudent_answersInput
    connect?: questionsWhereUniqueInput
    update?: XOR<XOR<questionsUpdateToOneWithWhereWithoutStudent_answersInput, questionsUpdateWithoutStudent_answersInput>, questionsUncheckedUpdateWithoutStudent_answersInput>
  }

  export type examsCreateNestedManyWithoutSubjectsInput = {
    create?: XOR<examsCreateWithoutSubjectsInput, examsUncheckedCreateWithoutSubjectsInput> | examsCreateWithoutSubjectsInput[] | examsUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: examsCreateOrConnectWithoutSubjectsInput | examsCreateOrConnectWithoutSubjectsInput[]
    createMany?: examsCreateManySubjectsInputEnvelope
    connect?: examsWhereUniqueInput | examsWhereUniqueInput[]
  }

  export type questionsCreateNestedManyWithoutSubjectsInput = {
    create?: XOR<questionsCreateWithoutSubjectsInput, questionsUncheckedCreateWithoutSubjectsInput> | questionsCreateWithoutSubjectsInput[] | questionsUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutSubjectsInput | questionsCreateOrConnectWithoutSubjectsInput[]
    createMany?: questionsCreateManySubjectsInputEnvelope
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
  }

  export type examsUncheckedCreateNestedManyWithoutSubjectsInput = {
    create?: XOR<examsCreateWithoutSubjectsInput, examsUncheckedCreateWithoutSubjectsInput> | examsCreateWithoutSubjectsInput[] | examsUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: examsCreateOrConnectWithoutSubjectsInput | examsCreateOrConnectWithoutSubjectsInput[]
    createMany?: examsCreateManySubjectsInputEnvelope
    connect?: examsWhereUniqueInput | examsWhereUniqueInput[]
  }

  export type questionsUncheckedCreateNestedManyWithoutSubjectsInput = {
    create?: XOR<questionsCreateWithoutSubjectsInput, questionsUncheckedCreateWithoutSubjectsInput> | questionsCreateWithoutSubjectsInput[] | questionsUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutSubjectsInput | questionsCreateOrConnectWithoutSubjectsInput[]
    createMany?: questionsCreateManySubjectsInputEnvelope
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
  }

  export type examsUpdateManyWithoutSubjectsNestedInput = {
    create?: XOR<examsCreateWithoutSubjectsInput, examsUncheckedCreateWithoutSubjectsInput> | examsCreateWithoutSubjectsInput[] | examsUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: examsCreateOrConnectWithoutSubjectsInput | examsCreateOrConnectWithoutSubjectsInput[]
    upsert?: examsUpsertWithWhereUniqueWithoutSubjectsInput | examsUpsertWithWhereUniqueWithoutSubjectsInput[]
    createMany?: examsCreateManySubjectsInputEnvelope
    set?: examsWhereUniqueInput | examsWhereUniqueInput[]
    disconnect?: examsWhereUniqueInput | examsWhereUniqueInput[]
    delete?: examsWhereUniqueInput | examsWhereUniqueInput[]
    connect?: examsWhereUniqueInput | examsWhereUniqueInput[]
    update?: examsUpdateWithWhereUniqueWithoutSubjectsInput | examsUpdateWithWhereUniqueWithoutSubjectsInput[]
    updateMany?: examsUpdateManyWithWhereWithoutSubjectsInput | examsUpdateManyWithWhereWithoutSubjectsInput[]
    deleteMany?: examsScalarWhereInput | examsScalarWhereInput[]
  }

  export type questionsUpdateManyWithoutSubjectsNestedInput = {
    create?: XOR<questionsCreateWithoutSubjectsInput, questionsUncheckedCreateWithoutSubjectsInput> | questionsCreateWithoutSubjectsInput[] | questionsUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutSubjectsInput | questionsCreateOrConnectWithoutSubjectsInput[]
    upsert?: questionsUpsertWithWhereUniqueWithoutSubjectsInput | questionsUpsertWithWhereUniqueWithoutSubjectsInput[]
    createMany?: questionsCreateManySubjectsInputEnvelope
    set?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    disconnect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    delete?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    update?: questionsUpdateWithWhereUniqueWithoutSubjectsInput | questionsUpdateWithWhereUniqueWithoutSubjectsInput[]
    updateMany?: questionsUpdateManyWithWhereWithoutSubjectsInput | questionsUpdateManyWithWhereWithoutSubjectsInput[]
    deleteMany?: questionsScalarWhereInput | questionsScalarWhereInput[]
  }

  export type examsUncheckedUpdateManyWithoutSubjectsNestedInput = {
    create?: XOR<examsCreateWithoutSubjectsInput, examsUncheckedCreateWithoutSubjectsInput> | examsCreateWithoutSubjectsInput[] | examsUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: examsCreateOrConnectWithoutSubjectsInput | examsCreateOrConnectWithoutSubjectsInput[]
    upsert?: examsUpsertWithWhereUniqueWithoutSubjectsInput | examsUpsertWithWhereUniqueWithoutSubjectsInput[]
    createMany?: examsCreateManySubjectsInputEnvelope
    set?: examsWhereUniqueInput | examsWhereUniqueInput[]
    disconnect?: examsWhereUniqueInput | examsWhereUniqueInput[]
    delete?: examsWhereUniqueInput | examsWhereUniqueInput[]
    connect?: examsWhereUniqueInput | examsWhereUniqueInput[]
    update?: examsUpdateWithWhereUniqueWithoutSubjectsInput | examsUpdateWithWhereUniqueWithoutSubjectsInput[]
    updateMany?: examsUpdateManyWithWhereWithoutSubjectsInput | examsUpdateManyWithWhereWithoutSubjectsInput[]
    deleteMany?: examsScalarWhereInput | examsScalarWhereInput[]
  }

  export type questionsUncheckedUpdateManyWithoutSubjectsNestedInput = {
    create?: XOR<questionsCreateWithoutSubjectsInput, questionsUncheckedCreateWithoutSubjectsInput> | questionsCreateWithoutSubjectsInput[] | questionsUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutSubjectsInput | questionsCreateOrConnectWithoutSubjectsInput[]
    upsert?: questionsUpsertWithWhereUniqueWithoutSubjectsInput | questionsUpsertWithWhereUniqueWithoutSubjectsInput[]
    createMany?: questionsCreateManySubjectsInputEnvelope
    set?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    disconnect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    delete?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    update?: questionsUpdateWithWhereUniqueWithoutSubjectsInput | questionsUpdateWithWhereUniqueWithoutSubjectsInput[]
    updateMany?: questionsUpdateManyWithWhereWithoutSubjectsInput | questionsUpdateManyWithWhereWithoutSubjectsInput[]
    deleteMany?: questionsScalarWhereInput | questionsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutClasses_teachingInput = {
    create?: XOR<usersCreateWithoutClasses_teachingInput, usersUncheckedCreateWithoutClasses_teachingInput>
    connectOrCreate?: usersCreateOrConnectWithoutClasses_teachingInput
    connect?: usersWhereUniqueInput
  }

  export type class_studentsCreateNestedManyWithoutClassesInput = {
    create?: XOR<class_studentsCreateWithoutClassesInput, class_studentsUncheckedCreateWithoutClassesInput> | class_studentsCreateWithoutClassesInput[] | class_studentsUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: class_studentsCreateOrConnectWithoutClassesInput | class_studentsCreateOrConnectWithoutClassesInput[]
    createMany?: class_studentsCreateManyClassesInputEnvelope
    connect?: class_studentsWhereUniqueInput | class_studentsWhereUniqueInput[]
  }

  export type exam_classesCreateNestedManyWithoutClassesInput = {
    create?: XOR<exam_classesCreateWithoutClassesInput, exam_classesUncheckedCreateWithoutClassesInput> | exam_classesCreateWithoutClassesInput[] | exam_classesUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: exam_classesCreateOrConnectWithoutClassesInput | exam_classesCreateOrConnectWithoutClassesInput[]
    createMany?: exam_classesCreateManyClassesInputEnvelope
    connect?: exam_classesWhereUniqueInput | exam_classesWhereUniqueInput[]
  }

  export type class_studentsUncheckedCreateNestedManyWithoutClassesInput = {
    create?: XOR<class_studentsCreateWithoutClassesInput, class_studentsUncheckedCreateWithoutClassesInput> | class_studentsCreateWithoutClassesInput[] | class_studentsUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: class_studentsCreateOrConnectWithoutClassesInput | class_studentsCreateOrConnectWithoutClassesInput[]
    createMany?: class_studentsCreateManyClassesInputEnvelope
    connect?: class_studentsWhereUniqueInput | class_studentsWhereUniqueInput[]
  }

  export type exam_classesUncheckedCreateNestedManyWithoutClassesInput = {
    create?: XOR<exam_classesCreateWithoutClassesInput, exam_classesUncheckedCreateWithoutClassesInput> | exam_classesCreateWithoutClassesInput[] | exam_classesUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: exam_classesCreateOrConnectWithoutClassesInput | exam_classesCreateOrConnectWithoutClassesInput[]
    createMany?: exam_classesCreateManyClassesInputEnvelope
    connect?: exam_classesWhereUniqueInput | exam_classesWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutClasses_teachingNestedInput = {
    create?: XOR<usersCreateWithoutClasses_teachingInput, usersUncheckedCreateWithoutClasses_teachingInput>
    connectOrCreate?: usersCreateOrConnectWithoutClasses_teachingInput
    upsert?: usersUpsertWithoutClasses_teachingInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutClasses_teachingInput, usersUpdateWithoutClasses_teachingInput>, usersUncheckedUpdateWithoutClasses_teachingInput>
  }

  export type class_studentsUpdateManyWithoutClassesNestedInput = {
    create?: XOR<class_studentsCreateWithoutClassesInput, class_studentsUncheckedCreateWithoutClassesInput> | class_studentsCreateWithoutClassesInput[] | class_studentsUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: class_studentsCreateOrConnectWithoutClassesInput | class_studentsCreateOrConnectWithoutClassesInput[]
    upsert?: class_studentsUpsertWithWhereUniqueWithoutClassesInput | class_studentsUpsertWithWhereUniqueWithoutClassesInput[]
    createMany?: class_studentsCreateManyClassesInputEnvelope
    set?: class_studentsWhereUniqueInput | class_studentsWhereUniqueInput[]
    disconnect?: class_studentsWhereUniqueInput | class_studentsWhereUniqueInput[]
    delete?: class_studentsWhereUniqueInput | class_studentsWhereUniqueInput[]
    connect?: class_studentsWhereUniqueInput | class_studentsWhereUniqueInput[]
    update?: class_studentsUpdateWithWhereUniqueWithoutClassesInput | class_studentsUpdateWithWhereUniqueWithoutClassesInput[]
    updateMany?: class_studentsUpdateManyWithWhereWithoutClassesInput | class_studentsUpdateManyWithWhereWithoutClassesInput[]
    deleteMany?: class_studentsScalarWhereInput | class_studentsScalarWhereInput[]
  }

  export type exam_classesUpdateManyWithoutClassesNestedInput = {
    create?: XOR<exam_classesCreateWithoutClassesInput, exam_classesUncheckedCreateWithoutClassesInput> | exam_classesCreateWithoutClassesInput[] | exam_classesUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: exam_classesCreateOrConnectWithoutClassesInput | exam_classesCreateOrConnectWithoutClassesInput[]
    upsert?: exam_classesUpsertWithWhereUniqueWithoutClassesInput | exam_classesUpsertWithWhereUniqueWithoutClassesInput[]
    createMany?: exam_classesCreateManyClassesInputEnvelope
    set?: exam_classesWhereUniqueInput | exam_classesWhereUniqueInput[]
    disconnect?: exam_classesWhereUniqueInput | exam_classesWhereUniqueInput[]
    delete?: exam_classesWhereUniqueInput | exam_classesWhereUniqueInput[]
    connect?: exam_classesWhereUniqueInput | exam_classesWhereUniqueInput[]
    update?: exam_classesUpdateWithWhereUniqueWithoutClassesInput | exam_classesUpdateWithWhereUniqueWithoutClassesInput[]
    updateMany?: exam_classesUpdateManyWithWhereWithoutClassesInput | exam_classesUpdateManyWithWhereWithoutClassesInput[]
    deleteMany?: exam_classesScalarWhereInput | exam_classesScalarWhereInput[]
  }

  export type class_studentsUncheckedUpdateManyWithoutClassesNestedInput = {
    create?: XOR<class_studentsCreateWithoutClassesInput, class_studentsUncheckedCreateWithoutClassesInput> | class_studentsCreateWithoutClassesInput[] | class_studentsUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: class_studentsCreateOrConnectWithoutClassesInput | class_studentsCreateOrConnectWithoutClassesInput[]
    upsert?: class_studentsUpsertWithWhereUniqueWithoutClassesInput | class_studentsUpsertWithWhereUniqueWithoutClassesInput[]
    createMany?: class_studentsCreateManyClassesInputEnvelope
    set?: class_studentsWhereUniqueInput | class_studentsWhereUniqueInput[]
    disconnect?: class_studentsWhereUniqueInput | class_studentsWhereUniqueInput[]
    delete?: class_studentsWhereUniqueInput | class_studentsWhereUniqueInput[]
    connect?: class_studentsWhereUniqueInput | class_studentsWhereUniqueInput[]
    update?: class_studentsUpdateWithWhereUniqueWithoutClassesInput | class_studentsUpdateWithWhereUniqueWithoutClassesInput[]
    updateMany?: class_studentsUpdateManyWithWhereWithoutClassesInput | class_studentsUpdateManyWithWhereWithoutClassesInput[]
    deleteMany?: class_studentsScalarWhereInput | class_studentsScalarWhereInput[]
  }

  export type exam_classesUncheckedUpdateManyWithoutClassesNestedInput = {
    create?: XOR<exam_classesCreateWithoutClassesInput, exam_classesUncheckedCreateWithoutClassesInput> | exam_classesCreateWithoutClassesInput[] | exam_classesUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: exam_classesCreateOrConnectWithoutClassesInput | exam_classesCreateOrConnectWithoutClassesInput[]
    upsert?: exam_classesUpsertWithWhereUniqueWithoutClassesInput | exam_classesUpsertWithWhereUniqueWithoutClassesInput[]
    createMany?: exam_classesCreateManyClassesInputEnvelope
    set?: exam_classesWhereUniqueInput | exam_classesWhereUniqueInput[]
    disconnect?: exam_classesWhereUniqueInput | exam_classesWhereUniqueInput[]
    delete?: exam_classesWhereUniqueInput | exam_classesWhereUniqueInput[]
    connect?: exam_classesWhereUniqueInput | exam_classesWhereUniqueInput[]
    update?: exam_classesUpdateWithWhereUniqueWithoutClassesInput | exam_classesUpdateWithWhereUniqueWithoutClassesInput[]
    updateMany?: exam_classesUpdateManyWithWhereWithoutClassesInput | exam_classesUpdateManyWithWhereWithoutClassesInput[]
    deleteMany?: exam_classesScalarWhereInput | exam_classesScalarWhereInput[]
  }

  export type classesCreateNestedOneWithoutClass_studentsInput = {
    create?: XOR<classesCreateWithoutClass_studentsInput, classesUncheckedCreateWithoutClass_studentsInput>
    connectOrCreate?: classesCreateOrConnectWithoutClass_studentsInput
    connect?: classesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutClass_membershipsInput = {
    create?: XOR<usersCreateWithoutClass_membershipsInput, usersUncheckedCreateWithoutClass_membershipsInput>
    connectOrCreate?: usersCreateOrConnectWithoutClass_membershipsInput
    connect?: usersWhereUniqueInput
  }

  export type classesUpdateOneRequiredWithoutClass_studentsNestedInput = {
    create?: XOR<classesCreateWithoutClass_studentsInput, classesUncheckedCreateWithoutClass_studentsInput>
    connectOrCreate?: classesCreateOrConnectWithoutClass_studentsInput
    upsert?: classesUpsertWithoutClass_studentsInput
    connect?: classesWhereUniqueInput
    update?: XOR<XOR<classesUpdateToOneWithWhereWithoutClass_studentsInput, classesUpdateWithoutClass_studentsInput>, classesUncheckedUpdateWithoutClass_studentsInput>
  }

  export type usersUpdateOneRequiredWithoutClass_membershipsNestedInput = {
    create?: XOR<usersCreateWithoutClass_membershipsInput, usersUncheckedCreateWithoutClass_membershipsInput>
    connectOrCreate?: usersCreateOrConnectWithoutClass_membershipsInput
    upsert?: usersUpsertWithoutClass_membershipsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutClass_membershipsInput, usersUpdateWithoutClass_membershipsInput>, usersUncheckedUpdateWithoutClass_membershipsInput>
  }

  export type attemptsCreateNestedManyWithoutUsersInput = {
    create?: XOR<attemptsCreateWithoutUsersInput, attemptsUncheckedCreateWithoutUsersInput> | attemptsCreateWithoutUsersInput[] | attemptsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: attemptsCreateOrConnectWithoutUsersInput | attemptsCreateOrConnectWithoutUsersInput[]
    createMany?: attemptsCreateManyUsersInputEnvelope
    connect?: attemptsWhereUniqueInput | attemptsWhereUniqueInput[]
  }

  export type examsCreateNestedManyWithoutUsersInput = {
    create?: XOR<examsCreateWithoutUsersInput, examsUncheckedCreateWithoutUsersInput> | examsCreateWithoutUsersInput[] | examsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: examsCreateOrConnectWithoutUsersInput | examsCreateOrConnectWithoutUsersInput[]
    createMany?: examsCreateManyUsersInputEnvelope
    connect?: examsWhereUniqueInput | examsWhereUniqueInput[]
  }

  export type questionsCreateNestedManyWithoutUsersInput = {
    create?: XOR<questionsCreateWithoutUsersInput, questionsUncheckedCreateWithoutUsersInput> | questionsCreateWithoutUsersInput[] | questionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutUsersInput | questionsCreateOrConnectWithoutUsersInput[]
    createMany?: questionsCreateManyUsersInputEnvelope
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
  }

  export type refresh_tokensCreateNestedManyWithoutUsersInput = {
    create?: XOR<refresh_tokensCreateWithoutUsersInput, refresh_tokensUncheckedCreateWithoutUsersInput> | refresh_tokensCreateWithoutUsersInput[] | refresh_tokensUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: refresh_tokensCreateOrConnectWithoutUsersInput | refresh_tokensCreateOrConnectWithoutUsersInput[]
    createMany?: refresh_tokensCreateManyUsersInputEnvelope
    connect?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
  }

  export type classesCreateNestedManyWithoutTeacherInput = {
    create?: XOR<classesCreateWithoutTeacherInput, classesUncheckedCreateWithoutTeacherInput> | classesCreateWithoutTeacherInput[] | classesUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: classesCreateOrConnectWithoutTeacherInput | classesCreateOrConnectWithoutTeacherInput[]
    createMany?: classesCreateManyTeacherInputEnvelope
    connect?: classesWhereUniqueInput | classesWhereUniqueInput[]
  }

  export type class_studentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<class_studentsCreateWithoutUsersInput, class_studentsUncheckedCreateWithoutUsersInput> | class_studentsCreateWithoutUsersInput[] | class_studentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: class_studentsCreateOrConnectWithoutUsersInput | class_studentsCreateOrConnectWithoutUsersInput[]
    createMany?: class_studentsCreateManyUsersInputEnvelope
    connect?: class_studentsWhereUniqueInput | class_studentsWhereUniqueInput[]
  }

  export type attemptsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<attemptsCreateWithoutUsersInput, attemptsUncheckedCreateWithoutUsersInput> | attemptsCreateWithoutUsersInput[] | attemptsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: attemptsCreateOrConnectWithoutUsersInput | attemptsCreateOrConnectWithoutUsersInput[]
    createMany?: attemptsCreateManyUsersInputEnvelope
    connect?: attemptsWhereUniqueInput | attemptsWhereUniqueInput[]
  }

  export type examsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<examsCreateWithoutUsersInput, examsUncheckedCreateWithoutUsersInput> | examsCreateWithoutUsersInput[] | examsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: examsCreateOrConnectWithoutUsersInput | examsCreateOrConnectWithoutUsersInput[]
    createMany?: examsCreateManyUsersInputEnvelope
    connect?: examsWhereUniqueInput | examsWhereUniqueInput[]
  }

  export type questionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<questionsCreateWithoutUsersInput, questionsUncheckedCreateWithoutUsersInput> | questionsCreateWithoutUsersInput[] | questionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutUsersInput | questionsCreateOrConnectWithoutUsersInput[]
    createMany?: questionsCreateManyUsersInputEnvelope
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
  }

  export type refresh_tokensUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<refresh_tokensCreateWithoutUsersInput, refresh_tokensUncheckedCreateWithoutUsersInput> | refresh_tokensCreateWithoutUsersInput[] | refresh_tokensUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: refresh_tokensCreateOrConnectWithoutUsersInput | refresh_tokensCreateOrConnectWithoutUsersInput[]
    createMany?: refresh_tokensCreateManyUsersInputEnvelope
    connect?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
  }

  export type classesUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<classesCreateWithoutTeacherInput, classesUncheckedCreateWithoutTeacherInput> | classesCreateWithoutTeacherInput[] | classesUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: classesCreateOrConnectWithoutTeacherInput | classesCreateOrConnectWithoutTeacherInput[]
    createMany?: classesCreateManyTeacherInputEnvelope
    connect?: classesWhereUniqueInput | classesWhereUniqueInput[]
  }

  export type class_studentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<class_studentsCreateWithoutUsersInput, class_studentsUncheckedCreateWithoutUsersInput> | class_studentsCreateWithoutUsersInput[] | class_studentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: class_studentsCreateOrConnectWithoutUsersInput | class_studentsCreateOrConnectWithoutUsersInput[]
    createMany?: class_studentsCreateManyUsersInputEnvelope
    connect?: class_studentsWhereUniqueInput | class_studentsWhereUniqueInput[]
  }

  export type Enumrole_enumFieldUpdateOperationsInput = {
    set?: $Enums.role_enum
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type attemptsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<attemptsCreateWithoutUsersInput, attemptsUncheckedCreateWithoutUsersInput> | attemptsCreateWithoutUsersInput[] | attemptsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: attemptsCreateOrConnectWithoutUsersInput | attemptsCreateOrConnectWithoutUsersInput[]
    upsert?: attemptsUpsertWithWhereUniqueWithoutUsersInput | attemptsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: attemptsCreateManyUsersInputEnvelope
    set?: attemptsWhereUniqueInput | attemptsWhereUniqueInput[]
    disconnect?: attemptsWhereUniqueInput | attemptsWhereUniqueInput[]
    delete?: attemptsWhereUniqueInput | attemptsWhereUniqueInput[]
    connect?: attemptsWhereUniqueInput | attemptsWhereUniqueInput[]
    update?: attemptsUpdateWithWhereUniqueWithoutUsersInput | attemptsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: attemptsUpdateManyWithWhereWithoutUsersInput | attemptsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: attemptsScalarWhereInput | attemptsScalarWhereInput[]
  }

  export type examsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<examsCreateWithoutUsersInput, examsUncheckedCreateWithoutUsersInput> | examsCreateWithoutUsersInput[] | examsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: examsCreateOrConnectWithoutUsersInput | examsCreateOrConnectWithoutUsersInput[]
    upsert?: examsUpsertWithWhereUniqueWithoutUsersInput | examsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: examsCreateManyUsersInputEnvelope
    set?: examsWhereUniqueInput | examsWhereUniqueInput[]
    disconnect?: examsWhereUniqueInput | examsWhereUniqueInput[]
    delete?: examsWhereUniqueInput | examsWhereUniqueInput[]
    connect?: examsWhereUniqueInput | examsWhereUniqueInput[]
    update?: examsUpdateWithWhereUniqueWithoutUsersInput | examsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: examsUpdateManyWithWhereWithoutUsersInput | examsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: examsScalarWhereInput | examsScalarWhereInput[]
  }

  export type questionsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<questionsCreateWithoutUsersInput, questionsUncheckedCreateWithoutUsersInput> | questionsCreateWithoutUsersInput[] | questionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutUsersInput | questionsCreateOrConnectWithoutUsersInput[]
    upsert?: questionsUpsertWithWhereUniqueWithoutUsersInput | questionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: questionsCreateManyUsersInputEnvelope
    set?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    disconnect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    delete?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    update?: questionsUpdateWithWhereUniqueWithoutUsersInput | questionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: questionsUpdateManyWithWhereWithoutUsersInput | questionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: questionsScalarWhereInput | questionsScalarWhereInput[]
  }

  export type refresh_tokensUpdateManyWithoutUsersNestedInput = {
    create?: XOR<refresh_tokensCreateWithoutUsersInput, refresh_tokensUncheckedCreateWithoutUsersInput> | refresh_tokensCreateWithoutUsersInput[] | refresh_tokensUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: refresh_tokensCreateOrConnectWithoutUsersInput | refresh_tokensCreateOrConnectWithoutUsersInput[]
    upsert?: refresh_tokensUpsertWithWhereUniqueWithoutUsersInput | refresh_tokensUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: refresh_tokensCreateManyUsersInputEnvelope
    set?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
    disconnect?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
    delete?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
    connect?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
    update?: refresh_tokensUpdateWithWhereUniqueWithoutUsersInput | refresh_tokensUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: refresh_tokensUpdateManyWithWhereWithoutUsersInput | refresh_tokensUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: refresh_tokensScalarWhereInput | refresh_tokensScalarWhereInput[]
  }

  export type classesUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<classesCreateWithoutTeacherInput, classesUncheckedCreateWithoutTeacherInput> | classesCreateWithoutTeacherInput[] | classesUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: classesCreateOrConnectWithoutTeacherInput | classesCreateOrConnectWithoutTeacherInput[]
    upsert?: classesUpsertWithWhereUniqueWithoutTeacherInput | classesUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: classesCreateManyTeacherInputEnvelope
    set?: classesWhereUniqueInput | classesWhereUniqueInput[]
    disconnect?: classesWhereUniqueInput | classesWhereUniqueInput[]
    delete?: classesWhereUniqueInput | classesWhereUniqueInput[]
    connect?: classesWhereUniqueInput | classesWhereUniqueInput[]
    update?: classesUpdateWithWhereUniqueWithoutTeacherInput | classesUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: classesUpdateManyWithWhereWithoutTeacherInput | classesUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: classesScalarWhereInput | classesScalarWhereInput[]
  }

  export type class_studentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<class_studentsCreateWithoutUsersInput, class_studentsUncheckedCreateWithoutUsersInput> | class_studentsCreateWithoutUsersInput[] | class_studentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: class_studentsCreateOrConnectWithoutUsersInput | class_studentsCreateOrConnectWithoutUsersInput[]
    upsert?: class_studentsUpsertWithWhereUniqueWithoutUsersInput | class_studentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: class_studentsCreateManyUsersInputEnvelope
    set?: class_studentsWhereUniqueInput | class_studentsWhereUniqueInput[]
    disconnect?: class_studentsWhereUniqueInput | class_studentsWhereUniqueInput[]
    delete?: class_studentsWhereUniqueInput | class_studentsWhereUniqueInput[]
    connect?: class_studentsWhereUniqueInput | class_studentsWhereUniqueInput[]
    update?: class_studentsUpdateWithWhereUniqueWithoutUsersInput | class_studentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: class_studentsUpdateManyWithWhereWithoutUsersInput | class_studentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: class_studentsScalarWhereInput | class_studentsScalarWhereInput[]
  }

  export type attemptsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<attemptsCreateWithoutUsersInput, attemptsUncheckedCreateWithoutUsersInput> | attemptsCreateWithoutUsersInput[] | attemptsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: attemptsCreateOrConnectWithoutUsersInput | attemptsCreateOrConnectWithoutUsersInput[]
    upsert?: attemptsUpsertWithWhereUniqueWithoutUsersInput | attemptsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: attemptsCreateManyUsersInputEnvelope
    set?: attemptsWhereUniqueInput | attemptsWhereUniqueInput[]
    disconnect?: attemptsWhereUniqueInput | attemptsWhereUniqueInput[]
    delete?: attemptsWhereUniqueInput | attemptsWhereUniqueInput[]
    connect?: attemptsWhereUniqueInput | attemptsWhereUniqueInput[]
    update?: attemptsUpdateWithWhereUniqueWithoutUsersInput | attemptsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: attemptsUpdateManyWithWhereWithoutUsersInput | attemptsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: attemptsScalarWhereInput | attemptsScalarWhereInput[]
  }

  export type examsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<examsCreateWithoutUsersInput, examsUncheckedCreateWithoutUsersInput> | examsCreateWithoutUsersInput[] | examsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: examsCreateOrConnectWithoutUsersInput | examsCreateOrConnectWithoutUsersInput[]
    upsert?: examsUpsertWithWhereUniqueWithoutUsersInput | examsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: examsCreateManyUsersInputEnvelope
    set?: examsWhereUniqueInput | examsWhereUniqueInput[]
    disconnect?: examsWhereUniqueInput | examsWhereUniqueInput[]
    delete?: examsWhereUniqueInput | examsWhereUniqueInput[]
    connect?: examsWhereUniqueInput | examsWhereUniqueInput[]
    update?: examsUpdateWithWhereUniqueWithoutUsersInput | examsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: examsUpdateManyWithWhereWithoutUsersInput | examsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: examsScalarWhereInput | examsScalarWhereInput[]
  }

  export type questionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<questionsCreateWithoutUsersInput, questionsUncheckedCreateWithoutUsersInput> | questionsCreateWithoutUsersInput[] | questionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: questionsCreateOrConnectWithoutUsersInput | questionsCreateOrConnectWithoutUsersInput[]
    upsert?: questionsUpsertWithWhereUniqueWithoutUsersInput | questionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: questionsCreateManyUsersInputEnvelope
    set?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    disconnect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    delete?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    connect?: questionsWhereUniqueInput | questionsWhereUniqueInput[]
    update?: questionsUpdateWithWhereUniqueWithoutUsersInput | questionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: questionsUpdateManyWithWhereWithoutUsersInput | questionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: questionsScalarWhereInput | questionsScalarWhereInput[]
  }

  export type refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<refresh_tokensCreateWithoutUsersInput, refresh_tokensUncheckedCreateWithoutUsersInput> | refresh_tokensCreateWithoutUsersInput[] | refresh_tokensUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: refresh_tokensCreateOrConnectWithoutUsersInput | refresh_tokensCreateOrConnectWithoutUsersInput[]
    upsert?: refresh_tokensUpsertWithWhereUniqueWithoutUsersInput | refresh_tokensUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: refresh_tokensCreateManyUsersInputEnvelope
    set?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
    disconnect?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
    delete?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
    connect?: refresh_tokensWhereUniqueInput | refresh_tokensWhereUniqueInput[]
    update?: refresh_tokensUpdateWithWhereUniqueWithoutUsersInput | refresh_tokensUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: refresh_tokensUpdateManyWithWhereWithoutUsersInput | refresh_tokensUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: refresh_tokensScalarWhereInput | refresh_tokensScalarWhereInput[]
  }

  export type classesUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<classesCreateWithoutTeacherInput, classesUncheckedCreateWithoutTeacherInput> | classesCreateWithoutTeacherInput[] | classesUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: classesCreateOrConnectWithoutTeacherInput | classesCreateOrConnectWithoutTeacherInput[]
    upsert?: classesUpsertWithWhereUniqueWithoutTeacherInput | classesUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: classesCreateManyTeacherInputEnvelope
    set?: classesWhereUniqueInput | classesWhereUniqueInput[]
    disconnect?: classesWhereUniqueInput | classesWhereUniqueInput[]
    delete?: classesWhereUniqueInput | classesWhereUniqueInput[]
    connect?: classesWhereUniqueInput | classesWhereUniqueInput[]
    update?: classesUpdateWithWhereUniqueWithoutTeacherInput | classesUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: classesUpdateManyWithWhereWithoutTeacherInput | classesUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: classesScalarWhereInput | classesScalarWhereInput[]
  }

  export type class_studentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<class_studentsCreateWithoutUsersInput, class_studentsUncheckedCreateWithoutUsersInput> | class_studentsCreateWithoutUsersInput[] | class_studentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: class_studentsCreateOrConnectWithoutUsersInput | class_studentsCreateOrConnectWithoutUsersInput[]
    upsert?: class_studentsUpsertWithWhereUniqueWithoutUsersInput | class_studentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: class_studentsCreateManyUsersInputEnvelope
    set?: class_studentsWhereUniqueInput | class_studentsWhereUniqueInput[]
    disconnect?: class_studentsWhereUniqueInput | class_studentsWhereUniqueInput[]
    delete?: class_studentsWhereUniqueInput | class_studentsWhereUniqueInput[]
    connect?: class_studentsWhereUniqueInput | class_studentsWhereUniqueInput[]
    update?: class_studentsUpdateWithWhereUniqueWithoutUsersInput | class_studentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: class_studentsUpdateManyWithWhereWithoutUsersInput | class_studentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: class_studentsScalarWhereInput | class_studentsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutRefresh_tokensInput = {
    create?: XOR<usersCreateWithoutRefresh_tokensInput, usersUncheckedCreateWithoutRefresh_tokensInput>
    connectOrCreate?: usersCreateOrConnectWithoutRefresh_tokensInput
    connect?: usersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateOneRequiredWithoutRefresh_tokensNestedInput = {
    create?: XOR<usersCreateWithoutRefresh_tokensInput, usersUncheckedCreateWithoutRefresh_tokensInput>
    connectOrCreate?: usersCreateOrConnectWithoutRefresh_tokensInput
    upsert?: usersUpsertWithoutRefresh_tokensInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutRefresh_tokensInput, usersUpdateWithoutRefresh_tokensInput>, usersUncheckedUpdateWithoutRefresh_tokensInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumattempt_status_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.attempt_status_enum | Enumattempt_status_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.attempt_status_enum[] | null
    notIn?: $Enums.attempt_status_enum[] | null
    not?: NestedEnumattempt_status_enumNullableFilter<$PrismaModel> | $Enums.attempt_status_enum | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumattempt_status_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.attempt_status_enum | Enumattempt_status_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.attempt_status_enum[] | null
    notIn?: $Enums.attempt_status_enum[] | null
    not?: NestedEnumattempt_status_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.attempt_status_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumattempt_status_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumattempt_status_enumNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumexam_status_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.exam_status_enum | Enumexam_status_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.exam_status_enum[] | null
    notIn?: $Enums.exam_status_enum[] | null
    not?: NestedEnumexam_status_enumNullableFilter<$PrismaModel> | $Enums.exam_status_enum | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumexam_status_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.exam_status_enum | Enumexam_status_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.exam_status_enum[] | null
    notIn?: $Enums.exam_status_enum[] | null
    not?: NestedEnumexam_status_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.exam_status_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumexam_status_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumexam_status_enumNullableFilter<$PrismaModel>
  }

  export type NestedEnumquestion_type_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.question_type_enum | Enumquestion_type_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.question_type_enum[] | null
    notIn?: $Enums.question_type_enum[] | null
    not?: NestedEnumquestion_type_enumNullableFilter<$PrismaModel> | $Enums.question_type_enum | null
  }

  export type NestedEnumquestion_type_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.question_type_enum | Enumquestion_type_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.question_type_enum[] | null
    notIn?: $Enums.question_type_enum[] | null
    not?: NestedEnumquestion_type_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.question_type_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumquestion_type_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumquestion_type_enumNullableFilter<$PrismaModel>
  }

  export type NestedEnumrole_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.role_enum | Enumrole_enumFieldRefInput<$PrismaModel>
    in?: $Enums.role_enum[]
    notIn?: $Enums.role_enum[]
    not?: NestedEnumrole_enumFilter<$PrismaModel> | $Enums.role_enum
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumrole_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role_enum | Enumrole_enumFieldRefInput<$PrismaModel>
    in?: $Enums.role_enum[]
    notIn?: $Enums.role_enum[]
    not?: NestedEnumrole_enumWithAggregatesFilter<$PrismaModel> | $Enums.role_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrole_enumFilter<$PrismaModel>
    _max?: NestedEnumrole_enumFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type questionsCreateWithoutAnswersInput = {
    id?: string
    content: string
    explanation?: string | null
    image_url?: string | null
    level?: number | null
    type?: $Enums.question_type_enum | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    exam_questions?: exam_questionsCreateNestedManyWithoutQuestionsInput
    student_answers?: student_answersCreateNestedManyWithoutQuestionsInput
    users: usersCreateNestedOneWithoutQuestionsInput
    subjects: subjectsCreateNestedOneWithoutQuestionsInput
  }

  export type questionsUncheckedCreateWithoutAnswersInput = {
    id?: string
    content: string
    explanation?: string | null
    image_url?: string | null
    level?: number | null
    type?: $Enums.question_type_enum | null
    subject_id: string
    created_by_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    exam_questions?: exam_questionsUncheckedCreateNestedManyWithoutQuestionsInput
    student_answers?: student_answersUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type questionsCreateOrConnectWithoutAnswersInput = {
    where: questionsWhereUniqueInput
    create: XOR<questionsCreateWithoutAnswersInput, questionsUncheckedCreateWithoutAnswersInput>
  }

  export type student_answersCreateWithoutAnswersInput = {
    id?: string
    created_at?: Date | string | null
    attempts: attemptsCreateNestedOneWithoutStudent_answersInput
    questions: questionsCreateNestedOneWithoutStudent_answersInput
  }

  export type student_answersUncheckedCreateWithoutAnswersInput = {
    id?: string
    attempt_id: string
    question_id: string
    created_at?: Date | string | null
  }

  export type student_answersCreateOrConnectWithoutAnswersInput = {
    where: student_answersWhereUniqueInput
    create: XOR<student_answersCreateWithoutAnswersInput, student_answersUncheckedCreateWithoutAnswersInput>
  }

  export type student_answersCreateManyAnswersInputEnvelope = {
    data: student_answersCreateManyAnswersInput | student_answersCreateManyAnswersInput[]
    skipDuplicates?: boolean
  }

  export type questionsUpsertWithoutAnswersInput = {
    update: XOR<questionsUpdateWithoutAnswersInput, questionsUncheckedUpdateWithoutAnswersInput>
    create: XOR<questionsCreateWithoutAnswersInput, questionsUncheckedCreateWithoutAnswersInput>
    where?: questionsWhereInput
  }

  export type questionsUpdateToOneWithWhereWithoutAnswersInput = {
    where?: questionsWhereInput
    data: XOR<questionsUpdateWithoutAnswersInput, questionsUncheckedUpdateWithoutAnswersInput>
  }

  export type questionsUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumquestion_type_enumFieldUpdateOperationsInput | $Enums.question_type_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exam_questions?: exam_questionsUpdateManyWithoutQuestionsNestedInput
    student_answers?: student_answersUpdateManyWithoutQuestionsNestedInput
    users?: usersUpdateOneRequiredWithoutQuestionsNestedInput
    subjects?: subjectsUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumquestion_type_enumFieldUpdateOperationsInput | $Enums.question_type_enum | null
    subject_id?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exam_questions?: exam_questionsUncheckedUpdateManyWithoutQuestionsNestedInput
    student_answers?: student_answersUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type student_answersUpsertWithWhereUniqueWithoutAnswersInput = {
    where: student_answersWhereUniqueInput
    update: XOR<student_answersUpdateWithoutAnswersInput, student_answersUncheckedUpdateWithoutAnswersInput>
    create: XOR<student_answersCreateWithoutAnswersInput, student_answersUncheckedCreateWithoutAnswersInput>
  }

  export type student_answersUpdateWithWhereUniqueWithoutAnswersInput = {
    where: student_answersWhereUniqueInput
    data: XOR<student_answersUpdateWithoutAnswersInput, student_answersUncheckedUpdateWithoutAnswersInput>
  }

  export type student_answersUpdateManyWithWhereWithoutAnswersInput = {
    where: student_answersScalarWhereInput
    data: XOR<student_answersUpdateManyMutationInput, student_answersUncheckedUpdateManyWithoutAnswersInput>
  }

  export type student_answersScalarWhereInput = {
    AND?: student_answersScalarWhereInput | student_answersScalarWhereInput[]
    OR?: student_answersScalarWhereInput[]
    NOT?: student_answersScalarWhereInput | student_answersScalarWhereInput[]
    id?: StringFilter<"student_answers"> | string
    attempt_id?: StringFilter<"student_answers"> | string
    question_id?: StringFilter<"student_answers"> | string
    answer_id?: StringFilter<"student_answers"> | string
    created_at?: DateTimeNullableFilter<"student_answers"> | Date | string | null
  }

  export type examsCreateWithoutAttemptsInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    total_score?: number | null
    status?: $Enums.exam_status_enum | null
    is_public?: boolean | null
    access_code?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    shuffle_questions?: boolean | null
    shuffle_answers?: boolean | null
    show_result_after_submit?: boolean | null
    max_attempts?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    exam_questions?: exam_questionsCreateNestedManyWithoutExamsInput
    exam_classes?: exam_classesCreateNestedManyWithoutExamsInput
    users: usersCreateNestedOneWithoutExamsInput
    subjects: subjectsCreateNestedOneWithoutExamsInput
  }

  export type examsUncheckedCreateWithoutAttemptsInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    total_score?: number | null
    status?: $Enums.exam_status_enum | null
    is_public?: boolean | null
    access_code?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    shuffle_questions?: boolean | null
    shuffle_answers?: boolean | null
    show_result_after_submit?: boolean | null
    max_attempts?: number | null
    subject_id: string
    created_by_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    exam_questions?: exam_questionsUncheckedCreateNestedManyWithoutExamsInput
    exam_classes?: exam_classesUncheckedCreateNestedManyWithoutExamsInput
  }

  export type examsCreateOrConnectWithoutAttemptsInput = {
    where: examsWhereUniqueInput
    create: XOR<examsCreateWithoutAttemptsInput, examsUncheckedCreateWithoutAttemptsInput>
  }

  export type usersCreateWithoutAttemptsInput = {
    id?: string
    full_name: string
    email: string
    phone?: string | null
    password: string
    avatar?: string | null
    role?: $Enums.role_enum
    is_active?: boolean | null
    email_verified?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    exams?: examsCreateNestedManyWithoutUsersInput
    questions?: questionsCreateNestedManyWithoutUsersInput
    refresh_tokens?: refresh_tokensCreateNestedManyWithoutUsersInput
    classes_teaching?: classesCreateNestedManyWithoutTeacherInput
    class_memberships?: class_studentsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutAttemptsInput = {
    id?: string
    full_name: string
    email: string
    phone?: string | null
    password: string
    avatar?: string | null
    role?: $Enums.role_enum
    is_active?: boolean | null
    email_verified?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    exams?: examsUncheckedCreateNestedManyWithoutUsersInput
    questions?: questionsUncheckedCreateNestedManyWithoutUsersInput
    refresh_tokens?: refresh_tokensUncheckedCreateNestedManyWithoutUsersInput
    classes_teaching?: classesUncheckedCreateNestedManyWithoutTeacherInput
    class_memberships?: class_studentsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutAttemptsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAttemptsInput, usersUncheckedCreateWithoutAttemptsInput>
  }

  export type student_answersCreateWithoutAttemptsInput = {
    id?: string
    created_at?: Date | string | null
    answers: answersCreateNestedOneWithoutStudent_answersInput
    questions: questionsCreateNestedOneWithoutStudent_answersInput
  }

  export type student_answersUncheckedCreateWithoutAttemptsInput = {
    id?: string
    question_id: string
    answer_id: string
    created_at?: Date | string | null
  }

  export type student_answersCreateOrConnectWithoutAttemptsInput = {
    where: student_answersWhereUniqueInput
    create: XOR<student_answersCreateWithoutAttemptsInput, student_answersUncheckedCreateWithoutAttemptsInput>
  }

  export type student_answersCreateManyAttemptsInputEnvelope = {
    data: student_answersCreateManyAttemptsInput | student_answersCreateManyAttemptsInput[]
    skipDuplicates?: boolean
  }

  export type examsUpsertWithoutAttemptsInput = {
    update: XOR<examsUpdateWithoutAttemptsInput, examsUncheckedUpdateWithoutAttemptsInput>
    create: XOR<examsCreateWithoutAttemptsInput, examsUncheckedCreateWithoutAttemptsInput>
    where?: examsWhereInput
  }

  export type examsUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: examsWhereInput
    data: XOR<examsUpdateWithoutAttemptsInput, examsUncheckedUpdateWithoutAttemptsInput>
  }

  export type examsUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    total_score?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableEnumexam_status_enumFieldUpdateOperationsInput | $Enums.exam_status_enum | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    access_code?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shuffle_questions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    shuffle_answers?: NullableBoolFieldUpdateOperationsInput | boolean | null
    show_result_after_submit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    max_attempts?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exam_questions?: exam_questionsUpdateManyWithoutExamsNestedInput
    exam_classes?: exam_classesUpdateManyWithoutExamsNestedInput
    users?: usersUpdateOneRequiredWithoutExamsNestedInput
    subjects?: subjectsUpdateOneRequiredWithoutExamsNestedInput
  }

  export type examsUncheckedUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    total_score?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableEnumexam_status_enumFieldUpdateOperationsInput | $Enums.exam_status_enum | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    access_code?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shuffle_questions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    shuffle_answers?: NullableBoolFieldUpdateOperationsInput | boolean | null
    show_result_after_submit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    max_attempts?: NullableIntFieldUpdateOperationsInput | number | null
    subject_id?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exam_questions?: exam_questionsUncheckedUpdateManyWithoutExamsNestedInput
    exam_classes?: exam_classesUncheckedUpdateManyWithoutExamsNestedInput
  }

  export type usersUpsertWithoutAttemptsInput = {
    update: XOR<usersUpdateWithoutAttemptsInput, usersUncheckedUpdateWithoutAttemptsInput>
    create: XOR<usersCreateWithoutAttemptsInput, usersUncheckedCreateWithoutAttemptsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAttemptsInput, usersUncheckedUpdateWithoutAttemptsInput>
  }

  export type usersUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumrole_enumFieldUpdateOperationsInput | $Enums.role_enum
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exams?: examsUpdateManyWithoutUsersNestedInput
    questions?: questionsUpdateManyWithoutUsersNestedInput
    refresh_tokens?: refresh_tokensUpdateManyWithoutUsersNestedInput
    classes_teaching?: classesUpdateManyWithoutTeacherNestedInput
    class_memberships?: class_studentsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumrole_enumFieldUpdateOperationsInput | $Enums.role_enum
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exams?: examsUncheckedUpdateManyWithoutUsersNestedInput
    questions?: questionsUncheckedUpdateManyWithoutUsersNestedInput
    refresh_tokens?: refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput
    classes_teaching?: classesUncheckedUpdateManyWithoutTeacherNestedInput
    class_memberships?: class_studentsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type student_answersUpsertWithWhereUniqueWithoutAttemptsInput = {
    where: student_answersWhereUniqueInput
    update: XOR<student_answersUpdateWithoutAttemptsInput, student_answersUncheckedUpdateWithoutAttemptsInput>
    create: XOR<student_answersCreateWithoutAttemptsInput, student_answersUncheckedCreateWithoutAttemptsInput>
  }

  export type student_answersUpdateWithWhereUniqueWithoutAttemptsInput = {
    where: student_answersWhereUniqueInput
    data: XOR<student_answersUpdateWithoutAttemptsInput, student_answersUncheckedUpdateWithoutAttemptsInput>
  }

  export type student_answersUpdateManyWithWhereWithoutAttemptsInput = {
    where: student_answersScalarWhereInput
    data: XOR<student_answersUpdateManyMutationInput, student_answersUncheckedUpdateManyWithoutAttemptsInput>
  }

  export type examsCreateWithoutExam_questionsInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    total_score?: number | null
    status?: $Enums.exam_status_enum | null
    is_public?: boolean | null
    access_code?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    shuffle_questions?: boolean | null
    shuffle_answers?: boolean | null
    show_result_after_submit?: boolean | null
    max_attempts?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attempts?: attemptsCreateNestedManyWithoutExamsInput
    exam_classes?: exam_classesCreateNestedManyWithoutExamsInput
    users: usersCreateNestedOneWithoutExamsInput
    subjects: subjectsCreateNestedOneWithoutExamsInput
  }

  export type examsUncheckedCreateWithoutExam_questionsInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    total_score?: number | null
    status?: $Enums.exam_status_enum | null
    is_public?: boolean | null
    access_code?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    shuffle_questions?: boolean | null
    shuffle_answers?: boolean | null
    show_result_after_submit?: boolean | null
    max_attempts?: number | null
    subject_id: string
    created_by_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attempts?: attemptsUncheckedCreateNestedManyWithoutExamsInput
    exam_classes?: exam_classesUncheckedCreateNestedManyWithoutExamsInput
  }

  export type examsCreateOrConnectWithoutExam_questionsInput = {
    where: examsWhereUniqueInput
    create: XOR<examsCreateWithoutExam_questionsInput, examsUncheckedCreateWithoutExam_questionsInput>
  }

  export type questionsCreateWithoutExam_questionsInput = {
    id?: string
    content: string
    explanation?: string | null
    image_url?: string | null
    level?: number | null
    type?: $Enums.question_type_enum | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutQuestionsInput
    student_answers?: student_answersCreateNestedManyWithoutQuestionsInput
    users: usersCreateNestedOneWithoutQuestionsInput
    subjects: subjectsCreateNestedOneWithoutQuestionsInput
  }

  export type questionsUncheckedCreateWithoutExam_questionsInput = {
    id?: string
    content: string
    explanation?: string | null
    image_url?: string | null
    level?: number | null
    type?: $Enums.question_type_enum | null
    subject_id: string
    created_by_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersUncheckedCreateNestedManyWithoutQuestionsInput
    student_answers?: student_answersUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type questionsCreateOrConnectWithoutExam_questionsInput = {
    where: questionsWhereUniqueInput
    create: XOR<questionsCreateWithoutExam_questionsInput, questionsUncheckedCreateWithoutExam_questionsInput>
  }

  export type examsUpsertWithoutExam_questionsInput = {
    update: XOR<examsUpdateWithoutExam_questionsInput, examsUncheckedUpdateWithoutExam_questionsInput>
    create: XOR<examsCreateWithoutExam_questionsInput, examsUncheckedCreateWithoutExam_questionsInput>
    where?: examsWhereInput
  }

  export type examsUpdateToOneWithWhereWithoutExam_questionsInput = {
    where?: examsWhereInput
    data: XOR<examsUpdateWithoutExam_questionsInput, examsUncheckedUpdateWithoutExam_questionsInput>
  }

  export type examsUpdateWithoutExam_questionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    total_score?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableEnumexam_status_enumFieldUpdateOperationsInput | $Enums.exam_status_enum | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    access_code?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shuffle_questions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    shuffle_answers?: NullableBoolFieldUpdateOperationsInput | boolean | null
    show_result_after_submit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    max_attempts?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: attemptsUpdateManyWithoutExamsNestedInput
    exam_classes?: exam_classesUpdateManyWithoutExamsNestedInput
    users?: usersUpdateOneRequiredWithoutExamsNestedInput
    subjects?: subjectsUpdateOneRequiredWithoutExamsNestedInput
  }

  export type examsUncheckedUpdateWithoutExam_questionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    total_score?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableEnumexam_status_enumFieldUpdateOperationsInput | $Enums.exam_status_enum | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    access_code?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shuffle_questions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    shuffle_answers?: NullableBoolFieldUpdateOperationsInput | boolean | null
    show_result_after_submit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    max_attempts?: NullableIntFieldUpdateOperationsInput | number | null
    subject_id?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: attemptsUncheckedUpdateManyWithoutExamsNestedInput
    exam_classes?: exam_classesUncheckedUpdateManyWithoutExamsNestedInput
  }

  export type questionsUpsertWithoutExam_questionsInput = {
    update: XOR<questionsUpdateWithoutExam_questionsInput, questionsUncheckedUpdateWithoutExam_questionsInput>
    create: XOR<questionsCreateWithoutExam_questionsInput, questionsUncheckedCreateWithoutExam_questionsInput>
    where?: questionsWhereInput
  }

  export type questionsUpdateToOneWithWhereWithoutExam_questionsInput = {
    where?: questionsWhereInput
    data: XOR<questionsUpdateWithoutExam_questionsInput, questionsUncheckedUpdateWithoutExam_questionsInput>
  }

  export type questionsUpdateWithoutExam_questionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumquestion_type_enumFieldUpdateOperationsInput | $Enums.question_type_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutQuestionsNestedInput
    student_answers?: student_answersUpdateManyWithoutQuestionsNestedInput
    users?: usersUpdateOneRequiredWithoutQuestionsNestedInput
    subjects?: subjectsUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateWithoutExam_questionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumquestion_type_enumFieldUpdateOperationsInput | $Enums.question_type_enum | null
    subject_id?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUncheckedUpdateManyWithoutQuestionsNestedInput
    student_answers?: student_answersUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type attemptsCreateWithoutExamsInput = {
    id?: string
    started_at?: Date | string | null
    submitted_at?: Date | string | null
    status?: $Enums.attempt_status_enum | null
    score?: number | null
    total_correct?: number | null
    total_wrong?: number | null
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutAttemptsInput
    student_answers?: student_answersCreateNestedManyWithoutAttemptsInput
  }

  export type attemptsUncheckedCreateWithoutExamsInput = {
    id?: string
    student_id: string
    started_at?: Date | string | null
    submitted_at?: Date | string | null
    status?: $Enums.attempt_status_enum | null
    score?: number | null
    total_correct?: number | null
    total_wrong?: number | null
    created_at?: Date | string | null
    student_answers?: student_answersUncheckedCreateNestedManyWithoutAttemptsInput
  }

  export type attemptsCreateOrConnectWithoutExamsInput = {
    where: attemptsWhereUniqueInput
    create: XOR<attemptsCreateWithoutExamsInput, attemptsUncheckedCreateWithoutExamsInput>
  }

  export type attemptsCreateManyExamsInputEnvelope = {
    data: attemptsCreateManyExamsInput | attemptsCreateManyExamsInput[]
    skipDuplicates?: boolean
  }

  export type exam_questionsCreateWithoutExamsInput = {
    order_index: number
    score?: number | null
    questions: questionsCreateNestedOneWithoutExam_questionsInput
  }

  export type exam_questionsUncheckedCreateWithoutExamsInput = {
    question_id: string
    order_index: number
    score?: number | null
  }

  export type exam_questionsCreateOrConnectWithoutExamsInput = {
    where: exam_questionsWhereUniqueInput
    create: XOR<exam_questionsCreateWithoutExamsInput, exam_questionsUncheckedCreateWithoutExamsInput>
  }

  export type exam_questionsCreateManyExamsInputEnvelope = {
    data: exam_questionsCreateManyExamsInput | exam_questionsCreateManyExamsInput[]
    skipDuplicates?: boolean
  }

  export type exam_classesCreateWithoutExamsInput = {
    created_at?: Date | string | null
    classes: classesCreateNestedOneWithoutExam_classesInput
  }

  export type exam_classesUncheckedCreateWithoutExamsInput = {
    class_id: string
    created_at?: Date | string | null
  }

  export type exam_classesCreateOrConnectWithoutExamsInput = {
    where: exam_classesWhereUniqueInput
    create: XOR<exam_classesCreateWithoutExamsInput, exam_classesUncheckedCreateWithoutExamsInput>
  }

  export type exam_classesCreateManyExamsInputEnvelope = {
    data: exam_classesCreateManyExamsInput | exam_classesCreateManyExamsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutExamsInput = {
    id?: string
    full_name: string
    email: string
    phone?: string | null
    password: string
    avatar?: string | null
    role?: $Enums.role_enum
    is_active?: boolean | null
    email_verified?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attempts?: attemptsCreateNestedManyWithoutUsersInput
    questions?: questionsCreateNestedManyWithoutUsersInput
    refresh_tokens?: refresh_tokensCreateNestedManyWithoutUsersInput
    classes_teaching?: classesCreateNestedManyWithoutTeacherInput
    class_memberships?: class_studentsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutExamsInput = {
    id?: string
    full_name: string
    email: string
    phone?: string | null
    password: string
    avatar?: string | null
    role?: $Enums.role_enum
    is_active?: boolean | null
    email_verified?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attempts?: attemptsUncheckedCreateNestedManyWithoutUsersInput
    questions?: questionsUncheckedCreateNestedManyWithoutUsersInput
    refresh_tokens?: refresh_tokensUncheckedCreateNestedManyWithoutUsersInput
    classes_teaching?: classesUncheckedCreateNestedManyWithoutTeacherInput
    class_memberships?: class_studentsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutExamsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutExamsInput, usersUncheckedCreateWithoutExamsInput>
  }

  export type subjectsCreateWithoutExamsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    created_at?: Date | string | null
    questions?: questionsCreateNestedManyWithoutSubjectsInput
  }

  export type subjectsUncheckedCreateWithoutExamsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    created_at?: Date | string | null
    questions?: questionsUncheckedCreateNestedManyWithoutSubjectsInput
  }

  export type subjectsCreateOrConnectWithoutExamsInput = {
    where: subjectsWhereUniqueInput
    create: XOR<subjectsCreateWithoutExamsInput, subjectsUncheckedCreateWithoutExamsInput>
  }

  export type attemptsUpsertWithWhereUniqueWithoutExamsInput = {
    where: attemptsWhereUniqueInput
    update: XOR<attemptsUpdateWithoutExamsInput, attemptsUncheckedUpdateWithoutExamsInput>
    create: XOR<attemptsCreateWithoutExamsInput, attemptsUncheckedCreateWithoutExamsInput>
  }

  export type attemptsUpdateWithWhereUniqueWithoutExamsInput = {
    where: attemptsWhereUniqueInput
    data: XOR<attemptsUpdateWithoutExamsInput, attemptsUncheckedUpdateWithoutExamsInput>
  }

  export type attemptsUpdateManyWithWhereWithoutExamsInput = {
    where: attemptsScalarWhereInput
    data: XOR<attemptsUpdateManyMutationInput, attemptsUncheckedUpdateManyWithoutExamsInput>
  }

  export type attemptsScalarWhereInput = {
    AND?: attemptsScalarWhereInput | attemptsScalarWhereInput[]
    OR?: attemptsScalarWhereInput[]
    NOT?: attemptsScalarWhereInput | attemptsScalarWhereInput[]
    id?: StringFilter<"attempts"> | string
    exam_id?: StringFilter<"attempts"> | string
    student_id?: StringFilter<"attempts"> | string
    started_at?: DateTimeNullableFilter<"attempts"> | Date | string | null
    submitted_at?: DateTimeNullableFilter<"attempts"> | Date | string | null
    status?: Enumattempt_status_enumNullableFilter<"attempts"> | $Enums.attempt_status_enum | null
    score?: FloatNullableFilter<"attempts"> | number | null
    total_correct?: IntNullableFilter<"attempts"> | number | null
    total_wrong?: IntNullableFilter<"attempts"> | number | null
    created_at?: DateTimeNullableFilter<"attempts"> | Date | string | null
  }

  export type exam_questionsUpsertWithWhereUniqueWithoutExamsInput = {
    where: exam_questionsWhereUniqueInput
    update: XOR<exam_questionsUpdateWithoutExamsInput, exam_questionsUncheckedUpdateWithoutExamsInput>
    create: XOR<exam_questionsCreateWithoutExamsInput, exam_questionsUncheckedCreateWithoutExamsInput>
  }

  export type exam_questionsUpdateWithWhereUniqueWithoutExamsInput = {
    where: exam_questionsWhereUniqueInput
    data: XOR<exam_questionsUpdateWithoutExamsInput, exam_questionsUncheckedUpdateWithoutExamsInput>
  }

  export type exam_questionsUpdateManyWithWhereWithoutExamsInput = {
    where: exam_questionsScalarWhereInput
    data: XOR<exam_questionsUpdateManyMutationInput, exam_questionsUncheckedUpdateManyWithoutExamsInput>
  }

  export type exam_questionsScalarWhereInput = {
    AND?: exam_questionsScalarWhereInput | exam_questionsScalarWhereInput[]
    OR?: exam_questionsScalarWhereInput[]
    NOT?: exam_questionsScalarWhereInput | exam_questionsScalarWhereInput[]
    exam_id?: StringFilter<"exam_questions"> | string
    question_id?: StringFilter<"exam_questions"> | string
    order_index?: IntFilter<"exam_questions"> | number
    score?: FloatNullableFilter<"exam_questions"> | number | null
  }

  export type exam_classesUpsertWithWhereUniqueWithoutExamsInput = {
    where: exam_classesWhereUniqueInput
    update: XOR<exam_classesUpdateWithoutExamsInput, exam_classesUncheckedUpdateWithoutExamsInput>
    create: XOR<exam_classesCreateWithoutExamsInput, exam_classesUncheckedCreateWithoutExamsInput>
  }

  export type exam_classesUpdateWithWhereUniqueWithoutExamsInput = {
    where: exam_classesWhereUniqueInput
    data: XOR<exam_classesUpdateWithoutExamsInput, exam_classesUncheckedUpdateWithoutExamsInput>
  }

  export type exam_classesUpdateManyWithWhereWithoutExamsInput = {
    where: exam_classesScalarWhereInput
    data: XOR<exam_classesUpdateManyMutationInput, exam_classesUncheckedUpdateManyWithoutExamsInput>
  }

  export type exam_classesScalarWhereInput = {
    AND?: exam_classesScalarWhereInput | exam_classesScalarWhereInput[]
    OR?: exam_classesScalarWhereInput[]
    NOT?: exam_classesScalarWhereInput | exam_classesScalarWhereInput[]
    exam_id?: StringFilter<"exam_classes"> | string
    class_id?: StringFilter<"exam_classes"> | string
    created_at?: DateTimeNullableFilter<"exam_classes"> | Date | string | null
  }

  export type usersUpsertWithoutExamsInput = {
    update: XOR<usersUpdateWithoutExamsInput, usersUncheckedUpdateWithoutExamsInput>
    create: XOR<usersCreateWithoutExamsInput, usersUncheckedCreateWithoutExamsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutExamsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutExamsInput, usersUncheckedUpdateWithoutExamsInput>
  }

  export type usersUpdateWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumrole_enumFieldUpdateOperationsInput | $Enums.role_enum
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: attemptsUpdateManyWithoutUsersNestedInput
    questions?: questionsUpdateManyWithoutUsersNestedInput
    refresh_tokens?: refresh_tokensUpdateManyWithoutUsersNestedInput
    classes_teaching?: classesUpdateManyWithoutTeacherNestedInput
    class_memberships?: class_studentsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumrole_enumFieldUpdateOperationsInput | $Enums.role_enum
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: attemptsUncheckedUpdateManyWithoutUsersNestedInput
    questions?: questionsUncheckedUpdateManyWithoutUsersNestedInput
    refresh_tokens?: refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput
    classes_teaching?: classesUncheckedUpdateManyWithoutTeacherNestedInput
    class_memberships?: class_studentsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type subjectsUpsertWithoutExamsInput = {
    update: XOR<subjectsUpdateWithoutExamsInput, subjectsUncheckedUpdateWithoutExamsInput>
    create: XOR<subjectsCreateWithoutExamsInput, subjectsUncheckedCreateWithoutExamsInput>
    where?: subjectsWhereInput
  }

  export type subjectsUpdateToOneWithWhereWithoutExamsInput = {
    where?: subjectsWhereInput
    data: XOR<subjectsUpdateWithoutExamsInput, subjectsUncheckedUpdateWithoutExamsInput>
  }

  export type subjectsUpdateWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: questionsUpdateManyWithoutSubjectsNestedInput
  }

  export type subjectsUncheckedUpdateWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: questionsUncheckedUpdateManyWithoutSubjectsNestedInput
  }

  export type examsCreateWithoutExam_classesInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    total_score?: number | null
    status?: $Enums.exam_status_enum | null
    is_public?: boolean | null
    access_code?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    shuffle_questions?: boolean | null
    shuffle_answers?: boolean | null
    show_result_after_submit?: boolean | null
    max_attempts?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attempts?: attemptsCreateNestedManyWithoutExamsInput
    exam_questions?: exam_questionsCreateNestedManyWithoutExamsInput
    users: usersCreateNestedOneWithoutExamsInput
    subjects: subjectsCreateNestedOneWithoutExamsInput
  }

  export type examsUncheckedCreateWithoutExam_classesInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    total_score?: number | null
    status?: $Enums.exam_status_enum | null
    is_public?: boolean | null
    access_code?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    shuffle_questions?: boolean | null
    shuffle_answers?: boolean | null
    show_result_after_submit?: boolean | null
    max_attempts?: number | null
    subject_id: string
    created_by_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attempts?: attemptsUncheckedCreateNestedManyWithoutExamsInput
    exam_questions?: exam_questionsUncheckedCreateNestedManyWithoutExamsInput
  }

  export type examsCreateOrConnectWithoutExam_classesInput = {
    where: examsWhereUniqueInput
    create: XOR<examsCreateWithoutExam_classesInput, examsUncheckedCreateWithoutExam_classesInput>
  }

  export type classesCreateWithoutExam_classesInput = {
    id?: string
    name: string
    code?: string | null
    description?: string | null
    school_year?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    teacher: usersCreateNestedOneWithoutClasses_teachingInput
    class_students?: class_studentsCreateNestedManyWithoutClassesInput
  }

  export type classesUncheckedCreateWithoutExam_classesInput = {
    id?: string
    name: string
    code?: string | null
    description?: string | null
    school_year?: string | null
    teacher_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    class_students?: class_studentsUncheckedCreateNestedManyWithoutClassesInput
  }

  export type classesCreateOrConnectWithoutExam_classesInput = {
    where: classesWhereUniqueInput
    create: XOR<classesCreateWithoutExam_classesInput, classesUncheckedCreateWithoutExam_classesInput>
  }

  export type examsUpsertWithoutExam_classesInput = {
    update: XOR<examsUpdateWithoutExam_classesInput, examsUncheckedUpdateWithoutExam_classesInput>
    create: XOR<examsCreateWithoutExam_classesInput, examsUncheckedCreateWithoutExam_classesInput>
    where?: examsWhereInput
  }

  export type examsUpdateToOneWithWhereWithoutExam_classesInput = {
    where?: examsWhereInput
    data: XOR<examsUpdateWithoutExam_classesInput, examsUncheckedUpdateWithoutExam_classesInput>
  }

  export type examsUpdateWithoutExam_classesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    total_score?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableEnumexam_status_enumFieldUpdateOperationsInput | $Enums.exam_status_enum | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    access_code?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shuffle_questions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    shuffle_answers?: NullableBoolFieldUpdateOperationsInput | boolean | null
    show_result_after_submit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    max_attempts?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: attemptsUpdateManyWithoutExamsNestedInput
    exam_questions?: exam_questionsUpdateManyWithoutExamsNestedInput
    users?: usersUpdateOneRequiredWithoutExamsNestedInput
    subjects?: subjectsUpdateOneRequiredWithoutExamsNestedInput
  }

  export type examsUncheckedUpdateWithoutExam_classesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    total_score?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableEnumexam_status_enumFieldUpdateOperationsInput | $Enums.exam_status_enum | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    access_code?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shuffle_questions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    shuffle_answers?: NullableBoolFieldUpdateOperationsInput | boolean | null
    show_result_after_submit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    max_attempts?: NullableIntFieldUpdateOperationsInput | number | null
    subject_id?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: attemptsUncheckedUpdateManyWithoutExamsNestedInput
    exam_questions?: exam_questionsUncheckedUpdateManyWithoutExamsNestedInput
  }

  export type classesUpsertWithoutExam_classesInput = {
    update: XOR<classesUpdateWithoutExam_classesInput, classesUncheckedUpdateWithoutExam_classesInput>
    create: XOR<classesCreateWithoutExam_classesInput, classesUncheckedCreateWithoutExam_classesInput>
    where?: classesWhereInput
  }

  export type classesUpdateToOneWithWhereWithoutExam_classesInput = {
    where?: classesWhereInput
    data: XOR<classesUpdateWithoutExam_classesInput, classesUncheckedUpdateWithoutExam_classesInput>
  }

  export type classesUpdateWithoutExam_classesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    school_year?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teacher?: usersUpdateOneRequiredWithoutClasses_teachingNestedInput
    class_students?: class_studentsUpdateManyWithoutClassesNestedInput
  }

  export type classesUncheckedUpdateWithoutExam_classesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    school_year?: NullableStringFieldUpdateOperationsInput | string | null
    teacher_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    class_students?: class_studentsUncheckedUpdateManyWithoutClassesNestedInput
  }

  export type answersCreateWithoutQuestionsInput = {
    id?: string
    content: string
    is_correct?: boolean | null
    created_at?: Date | string | null
    student_answers?: student_answersCreateNestedManyWithoutAnswersInput
  }

  export type answersUncheckedCreateWithoutQuestionsInput = {
    id?: string
    content: string
    is_correct?: boolean | null
    created_at?: Date | string | null
    student_answers?: student_answersUncheckedCreateNestedManyWithoutAnswersInput
  }

  export type answersCreateOrConnectWithoutQuestionsInput = {
    where: answersWhereUniqueInput
    create: XOR<answersCreateWithoutQuestionsInput, answersUncheckedCreateWithoutQuestionsInput>
  }

  export type answersCreateManyQuestionsInputEnvelope = {
    data: answersCreateManyQuestionsInput | answersCreateManyQuestionsInput[]
    skipDuplicates?: boolean
  }

  export type exam_questionsCreateWithoutQuestionsInput = {
    order_index: number
    score?: number | null
    exams: examsCreateNestedOneWithoutExam_questionsInput
  }

  export type exam_questionsUncheckedCreateWithoutQuestionsInput = {
    exam_id: string
    order_index: number
    score?: number | null
  }

  export type exam_questionsCreateOrConnectWithoutQuestionsInput = {
    where: exam_questionsWhereUniqueInput
    create: XOR<exam_questionsCreateWithoutQuestionsInput, exam_questionsUncheckedCreateWithoutQuestionsInput>
  }

  export type exam_questionsCreateManyQuestionsInputEnvelope = {
    data: exam_questionsCreateManyQuestionsInput | exam_questionsCreateManyQuestionsInput[]
    skipDuplicates?: boolean
  }

  export type student_answersCreateWithoutQuestionsInput = {
    id?: string
    created_at?: Date | string | null
    answers: answersCreateNestedOneWithoutStudent_answersInput
    attempts: attemptsCreateNestedOneWithoutStudent_answersInput
  }

  export type student_answersUncheckedCreateWithoutQuestionsInput = {
    id?: string
    attempt_id: string
    answer_id: string
    created_at?: Date | string | null
  }

  export type student_answersCreateOrConnectWithoutQuestionsInput = {
    where: student_answersWhereUniqueInput
    create: XOR<student_answersCreateWithoutQuestionsInput, student_answersUncheckedCreateWithoutQuestionsInput>
  }

  export type student_answersCreateManyQuestionsInputEnvelope = {
    data: student_answersCreateManyQuestionsInput | student_answersCreateManyQuestionsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutQuestionsInput = {
    id?: string
    full_name: string
    email: string
    phone?: string | null
    password: string
    avatar?: string | null
    role?: $Enums.role_enum
    is_active?: boolean | null
    email_verified?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attempts?: attemptsCreateNestedManyWithoutUsersInput
    exams?: examsCreateNestedManyWithoutUsersInput
    refresh_tokens?: refresh_tokensCreateNestedManyWithoutUsersInput
    classes_teaching?: classesCreateNestedManyWithoutTeacherInput
    class_memberships?: class_studentsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutQuestionsInput = {
    id?: string
    full_name: string
    email: string
    phone?: string | null
    password: string
    avatar?: string | null
    role?: $Enums.role_enum
    is_active?: boolean | null
    email_verified?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attempts?: attemptsUncheckedCreateNestedManyWithoutUsersInput
    exams?: examsUncheckedCreateNestedManyWithoutUsersInput
    refresh_tokens?: refresh_tokensUncheckedCreateNestedManyWithoutUsersInput
    classes_teaching?: classesUncheckedCreateNestedManyWithoutTeacherInput
    class_memberships?: class_studentsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutQuestionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutQuestionsInput, usersUncheckedCreateWithoutQuestionsInput>
  }

  export type subjectsCreateWithoutQuestionsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    created_at?: Date | string | null
    exams?: examsCreateNestedManyWithoutSubjectsInput
  }

  export type subjectsUncheckedCreateWithoutQuestionsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    created_at?: Date | string | null
    exams?: examsUncheckedCreateNestedManyWithoutSubjectsInput
  }

  export type subjectsCreateOrConnectWithoutQuestionsInput = {
    where: subjectsWhereUniqueInput
    create: XOR<subjectsCreateWithoutQuestionsInput, subjectsUncheckedCreateWithoutQuestionsInput>
  }

  export type answersUpsertWithWhereUniqueWithoutQuestionsInput = {
    where: answersWhereUniqueInput
    update: XOR<answersUpdateWithoutQuestionsInput, answersUncheckedUpdateWithoutQuestionsInput>
    create: XOR<answersCreateWithoutQuestionsInput, answersUncheckedCreateWithoutQuestionsInput>
  }

  export type answersUpdateWithWhereUniqueWithoutQuestionsInput = {
    where: answersWhereUniqueInput
    data: XOR<answersUpdateWithoutQuestionsInput, answersUncheckedUpdateWithoutQuestionsInput>
  }

  export type answersUpdateManyWithWhereWithoutQuestionsInput = {
    where: answersScalarWhereInput
    data: XOR<answersUpdateManyMutationInput, answersUncheckedUpdateManyWithoutQuestionsInput>
  }

  export type answersScalarWhereInput = {
    AND?: answersScalarWhereInput | answersScalarWhereInput[]
    OR?: answersScalarWhereInput[]
    NOT?: answersScalarWhereInput | answersScalarWhereInput[]
    id?: StringFilter<"answers"> | string
    content?: StringFilter<"answers"> | string
    is_correct?: BoolNullableFilter<"answers"> | boolean | null
    question_id?: StringFilter<"answers"> | string
    created_at?: DateTimeNullableFilter<"answers"> | Date | string | null
  }

  export type exam_questionsUpsertWithWhereUniqueWithoutQuestionsInput = {
    where: exam_questionsWhereUniqueInput
    update: XOR<exam_questionsUpdateWithoutQuestionsInput, exam_questionsUncheckedUpdateWithoutQuestionsInput>
    create: XOR<exam_questionsCreateWithoutQuestionsInput, exam_questionsUncheckedCreateWithoutQuestionsInput>
  }

  export type exam_questionsUpdateWithWhereUniqueWithoutQuestionsInput = {
    where: exam_questionsWhereUniqueInput
    data: XOR<exam_questionsUpdateWithoutQuestionsInput, exam_questionsUncheckedUpdateWithoutQuestionsInput>
  }

  export type exam_questionsUpdateManyWithWhereWithoutQuestionsInput = {
    where: exam_questionsScalarWhereInput
    data: XOR<exam_questionsUpdateManyMutationInput, exam_questionsUncheckedUpdateManyWithoutQuestionsInput>
  }

  export type student_answersUpsertWithWhereUniqueWithoutQuestionsInput = {
    where: student_answersWhereUniqueInput
    update: XOR<student_answersUpdateWithoutQuestionsInput, student_answersUncheckedUpdateWithoutQuestionsInput>
    create: XOR<student_answersCreateWithoutQuestionsInput, student_answersUncheckedCreateWithoutQuestionsInput>
  }

  export type student_answersUpdateWithWhereUniqueWithoutQuestionsInput = {
    where: student_answersWhereUniqueInput
    data: XOR<student_answersUpdateWithoutQuestionsInput, student_answersUncheckedUpdateWithoutQuestionsInput>
  }

  export type student_answersUpdateManyWithWhereWithoutQuestionsInput = {
    where: student_answersScalarWhereInput
    data: XOR<student_answersUpdateManyMutationInput, student_answersUncheckedUpdateManyWithoutQuestionsInput>
  }

  export type usersUpsertWithoutQuestionsInput = {
    update: XOR<usersUpdateWithoutQuestionsInput, usersUncheckedUpdateWithoutQuestionsInput>
    create: XOR<usersCreateWithoutQuestionsInput, usersUncheckedCreateWithoutQuestionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutQuestionsInput, usersUncheckedUpdateWithoutQuestionsInput>
  }

  export type usersUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumrole_enumFieldUpdateOperationsInput | $Enums.role_enum
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: attemptsUpdateManyWithoutUsersNestedInput
    exams?: examsUpdateManyWithoutUsersNestedInput
    refresh_tokens?: refresh_tokensUpdateManyWithoutUsersNestedInput
    classes_teaching?: classesUpdateManyWithoutTeacherNestedInput
    class_memberships?: class_studentsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumrole_enumFieldUpdateOperationsInput | $Enums.role_enum
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: attemptsUncheckedUpdateManyWithoutUsersNestedInput
    exams?: examsUncheckedUpdateManyWithoutUsersNestedInput
    refresh_tokens?: refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput
    classes_teaching?: classesUncheckedUpdateManyWithoutTeacherNestedInput
    class_memberships?: class_studentsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type subjectsUpsertWithoutQuestionsInput = {
    update: XOR<subjectsUpdateWithoutQuestionsInput, subjectsUncheckedUpdateWithoutQuestionsInput>
    create: XOR<subjectsCreateWithoutQuestionsInput, subjectsUncheckedCreateWithoutQuestionsInput>
    where?: subjectsWhereInput
  }

  export type subjectsUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: subjectsWhereInput
    data: XOR<subjectsUpdateWithoutQuestionsInput, subjectsUncheckedUpdateWithoutQuestionsInput>
  }

  export type subjectsUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exams?: examsUpdateManyWithoutSubjectsNestedInput
  }

  export type subjectsUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exams?: examsUncheckedUpdateManyWithoutSubjectsNestedInput
  }

  export type answersCreateWithoutStudent_answersInput = {
    id?: string
    content: string
    is_correct?: boolean | null
    created_at?: Date | string | null
    questions: questionsCreateNestedOneWithoutAnswersInput
  }

  export type answersUncheckedCreateWithoutStudent_answersInput = {
    id?: string
    content: string
    is_correct?: boolean | null
    question_id: string
    created_at?: Date | string | null
  }

  export type answersCreateOrConnectWithoutStudent_answersInput = {
    where: answersWhereUniqueInput
    create: XOR<answersCreateWithoutStudent_answersInput, answersUncheckedCreateWithoutStudent_answersInput>
  }

  export type attemptsCreateWithoutStudent_answersInput = {
    id?: string
    started_at?: Date | string | null
    submitted_at?: Date | string | null
    status?: $Enums.attempt_status_enum | null
    score?: number | null
    total_correct?: number | null
    total_wrong?: number | null
    created_at?: Date | string | null
    exams: examsCreateNestedOneWithoutAttemptsInput
    users: usersCreateNestedOneWithoutAttemptsInput
  }

  export type attemptsUncheckedCreateWithoutStudent_answersInput = {
    id?: string
    exam_id: string
    student_id: string
    started_at?: Date | string | null
    submitted_at?: Date | string | null
    status?: $Enums.attempt_status_enum | null
    score?: number | null
    total_correct?: number | null
    total_wrong?: number | null
    created_at?: Date | string | null
  }

  export type attemptsCreateOrConnectWithoutStudent_answersInput = {
    where: attemptsWhereUniqueInput
    create: XOR<attemptsCreateWithoutStudent_answersInput, attemptsUncheckedCreateWithoutStudent_answersInput>
  }

  export type questionsCreateWithoutStudent_answersInput = {
    id?: string
    content: string
    explanation?: string | null
    image_url?: string | null
    level?: number | null
    type?: $Enums.question_type_enum | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutQuestionsInput
    exam_questions?: exam_questionsCreateNestedManyWithoutQuestionsInput
    users: usersCreateNestedOneWithoutQuestionsInput
    subjects: subjectsCreateNestedOneWithoutQuestionsInput
  }

  export type questionsUncheckedCreateWithoutStudent_answersInput = {
    id?: string
    content: string
    explanation?: string | null
    image_url?: string | null
    level?: number | null
    type?: $Enums.question_type_enum | null
    subject_id: string
    created_by_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersUncheckedCreateNestedManyWithoutQuestionsInput
    exam_questions?: exam_questionsUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type questionsCreateOrConnectWithoutStudent_answersInput = {
    where: questionsWhereUniqueInput
    create: XOR<questionsCreateWithoutStudent_answersInput, questionsUncheckedCreateWithoutStudent_answersInput>
  }

  export type answersUpsertWithoutStudent_answersInput = {
    update: XOR<answersUpdateWithoutStudent_answersInput, answersUncheckedUpdateWithoutStudent_answersInput>
    create: XOR<answersCreateWithoutStudent_answersInput, answersUncheckedCreateWithoutStudent_answersInput>
    where?: answersWhereInput
  }

  export type answersUpdateToOneWithWhereWithoutStudent_answersInput = {
    where?: answersWhereInput
    data: XOR<answersUpdateWithoutStudent_answersInput, answersUncheckedUpdateWithoutStudent_answersInput>
  }

  export type answersUpdateWithoutStudent_answersInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: questionsUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type answersUncheckedUpdateWithoutStudent_answersInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    question_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attemptsUpsertWithoutStudent_answersInput = {
    update: XOR<attemptsUpdateWithoutStudent_answersInput, attemptsUncheckedUpdateWithoutStudent_answersInput>
    create: XOR<attemptsCreateWithoutStudent_answersInput, attemptsUncheckedCreateWithoutStudent_answersInput>
    where?: attemptsWhereInput
  }

  export type attemptsUpdateToOneWithWhereWithoutStudent_answersInput = {
    where?: attemptsWhereInput
    data: XOR<attemptsUpdateWithoutStudent_answersInput, attemptsUncheckedUpdateWithoutStudent_answersInput>
  }

  export type attemptsUpdateWithoutStudent_answersInput = {
    id?: StringFieldUpdateOperationsInput | string
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumattempt_status_enumFieldUpdateOperationsInput | $Enums.attempt_status_enum | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    total_correct?: NullableIntFieldUpdateOperationsInput | number | null
    total_wrong?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exams?: examsUpdateOneRequiredWithoutAttemptsNestedInput
    users?: usersUpdateOneRequiredWithoutAttemptsNestedInput
  }

  export type attemptsUncheckedUpdateWithoutStudent_answersInput = {
    id?: StringFieldUpdateOperationsInput | string
    exam_id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumattempt_status_enumFieldUpdateOperationsInput | $Enums.attempt_status_enum | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    total_correct?: NullableIntFieldUpdateOperationsInput | number | null
    total_wrong?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type questionsUpsertWithoutStudent_answersInput = {
    update: XOR<questionsUpdateWithoutStudent_answersInput, questionsUncheckedUpdateWithoutStudent_answersInput>
    create: XOR<questionsCreateWithoutStudent_answersInput, questionsUncheckedCreateWithoutStudent_answersInput>
    where?: questionsWhereInput
  }

  export type questionsUpdateToOneWithWhereWithoutStudent_answersInput = {
    where?: questionsWhereInput
    data: XOR<questionsUpdateWithoutStudent_answersInput, questionsUncheckedUpdateWithoutStudent_answersInput>
  }

  export type questionsUpdateWithoutStudent_answersInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumquestion_type_enumFieldUpdateOperationsInput | $Enums.question_type_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutQuestionsNestedInput
    exam_questions?: exam_questionsUpdateManyWithoutQuestionsNestedInput
    users?: usersUpdateOneRequiredWithoutQuestionsNestedInput
    subjects?: subjectsUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateWithoutStudent_answersInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumquestion_type_enumFieldUpdateOperationsInput | $Enums.question_type_enum | null
    subject_id?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUncheckedUpdateManyWithoutQuestionsNestedInput
    exam_questions?: exam_questionsUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type examsCreateWithoutSubjectsInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    total_score?: number | null
    status?: $Enums.exam_status_enum | null
    is_public?: boolean | null
    access_code?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    shuffle_questions?: boolean | null
    shuffle_answers?: boolean | null
    show_result_after_submit?: boolean | null
    max_attempts?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attempts?: attemptsCreateNestedManyWithoutExamsInput
    exam_questions?: exam_questionsCreateNestedManyWithoutExamsInput
    exam_classes?: exam_classesCreateNestedManyWithoutExamsInput
    users: usersCreateNestedOneWithoutExamsInput
  }

  export type examsUncheckedCreateWithoutSubjectsInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    total_score?: number | null
    status?: $Enums.exam_status_enum | null
    is_public?: boolean | null
    access_code?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    shuffle_questions?: boolean | null
    shuffle_answers?: boolean | null
    show_result_after_submit?: boolean | null
    max_attempts?: number | null
    created_by_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attempts?: attemptsUncheckedCreateNestedManyWithoutExamsInput
    exam_questions?: exam_questionsUncheckedCreateNestedManyWithoutExamsInput
    exam_classes?: exam_classesUncheckedCreateNestedManyWithoutExamsInput
  }

  export type examsCreateOrConnectWithoutSubjectsInput = {
    where: examsWhereUniqueInput
    create: XOR<examsCreateWithoutSubjectsInput, examsUncheckedCreateWithoutSubjectsInput>
  }

  export type examsCreateManySubjectsInputEnvelope = {
    data: examsCreateManySubjectsInput | examsCreateManySubjectsInput[]
    skipDuplicates?: boolean
  }

  export type questionsCreateWithoutSubjectsInput = {
    id?: string
    content: string
    explanation?: string | null
    image_url?: string | null
    level?: number | null
    type?: $Enums.question_type_enum | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutQuestionsInput
    exam_questions?: exam_questionsCreateNestedManyWithoutQuestionsInput
    student_answers?: student_answersCreateNestedManyWithoutQuestionsInput
    users: usersCreateNestedOneWithoutQuestionsInput
  }

  export type questionsUncheckedCreateWithoutSubjectsInput = {
    id?: string
    content: string
    explanation?: string | null
    image_url?: string | null
    level?: number | null
    type?: $Enums.question_type_enum | null
    created_by_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersUncheckedCreateNestedManyWithoutQuestionsInput
    exam_questions?: exam_questionsUncheckedCreateNestedManyWithoutQuestionsInput
    student_answers?: student_answersUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type questionsCreateOrConnectWithoutSubjectsInput = {
    where: questionsWhereUniqueInput
    create: XOR<questionsCreateWithoutSubjectsInput, questionsUncheckedCreateWithoutSubjectsInput>
  }

  export type questionsCreateManySubjectsInputEnvelope = {
    data: questionsCreateManySubjectsInput | questionsCreateManySubjectsInput[]
    skipDuplicates?: boolean
  }

  export type examsUpsertWithWhereUniqueWithoutSubjectsInput = {
    where: examsWhereUniqueInput
    update: XOR<examsUpdateWithoutSubjectsInput, examsUncheckedUpdateWithoutSubjectsInput>
    create: XOR<examsCreateWithoutSubjectsInput, examsUncheckedCreateWithoutSubjectsInput>
  }

  export type examsUpdateWithWhereUniqueWithoutSubjectsInput = {
    where: examsWhereUniqueInput
    data: XOR<examsUpdateWithoutSubjectsInput, examsUncheckedUpdateWithoutSubjectsInput>
  }

  export type examsUpdateManyWithWhereWithoutSubjectsInput = {
    where: examsScalarWhereInput
    data: XOR<examsUpdateManyMutationInput, examsUncheckedUpdateManyWithoutSubjectsInput>
  }

  export type examsScalarWhereInput = {
    AND?: examsScalarWhereInput | examsScalarWhereInput[]
    OR?: examsScalarWhereInput[]
    NOT?: examsScalarWhereInput | examsScalarWhereInput[]
    id?: StringFilter<"exams"> | string
    title?: StringFilter<"exams"> | string
    slug?: StringFilter<"exams"> | string
    description?: StringNullableFilter<"exams"> | string | null
    duration?: IntFilter<"exams"> | number
    total_score?: FloatNullableFilter<"exams"> | number | null
    status?: Enumexam_status_enumNullableFilter<"exams"> | $Enums.exam_status_enum | null
    is_public?: BoolNullableFilter<"exams"> | boolean | null
    access_code?: StringNullableFilter<"exams"> | string | null
    start_time?: DateTimeNullableFilter<"exams"> | Date | string | null
    end_time?: DateTimeNullableFilter<"exams"> | Date | string | null
    shuffle_questions?: BoolNullableFilter<"exams"> | boolean | null
    shuffle_answers?: BoolNullableFilter<"exams"> | boolean | null
    show_result_after_submit?: BoolNullableFilter<"exams"> | boolean | null
    max_attempts?: IntNullableFilter<"exams"> | number | null
    subject_id?: StringFilter<"exams"> | string
    created_by_id?: StringFilter<"exams"> | string
    created_at?: DateTimeNullableFilter<"exams"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"exams"> | Date | string | null
  }

  export type questionsUpsertWithWhereUniqueWithoutSubjectsInput = {
    where: questionsWhereUniqueInput
    update: XOR<questionsUpdateWithoutSubjectsInput, questionsUncheckedUpdateWithoutSubjectsInput>
    create: XOR<questionsCreateWithoutSubjectsInput, questionsUncheckedCreateWithoutSubjectsInput>
  }

  export type questionsUpdateWithWhereUniqueWithoutSubjectsInput = {
    where: questionsWhereUniqueInput
    data: XOR<questionsUpdateWithoutSubjectsInput, questionsUncheckedUpdateWithoutSubjectsInput>
  }

  export type questionsUpdateManyWithWhereWithoutSubjectsInput = {
    where: questionsScalarWhereInput
    data: XOR<questionsUpdateManyMutationInput, questionsUncheckedUpdateManyWithoutSubjectsInput>
  }

  export type questionsScalarWhereInput = {
    AND?: questionsScalarWhereInput | questionsScalarWhereInput[]
    OR?: questionsScalarWhereInput[]
    NOT?: questionsScalarWhereInput | questionsScalarWhereInput[]
    id?: StringFilter<"questions"> | string
    content?: StringFilter<"questions"> | string
    explanation?: StringNullableFilter<"questions"> | string | null
    image_url?: StringNullableFilter<"questions"> | string | null
    level?: IntNullableFilter<"questions"> | number | null
    type?: Enumquestion_type_enumNullableFilter<"questions"> | $Enums.question_type_enum | null
    subject_id?: StringFilter<"questions"> | string
    created_by_id?: StringFilter<"questions"> | string
    created_at?: DateTimeNullableFilter<"questions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"questions"> | Date | string | null
  }

  export type usersCreateWithoutClasses_teachingInput = {
    id?: string
    full_name: string
    email: string
    phone?: string | null
    password: string
    avatar?: string | null
    role?: $Enums.role_enum
    is_active?: boolean | null
    email_verified?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attempts?: attemptsCreateNestedManyWithoutUsersInput
    exams?: examsCreateNestedManyWithoutUsersInput
    questions?: questionsCreateNestedManyWithoutUsersInput
    refresh_tokens?: refresh_tokensCreateNestedManyWithoutUsersInput
    class_memberships?: class_studentsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutClasses_teachingInput = {
    id?: string
    full_name: string
    email: string
    phone?: string | null
    password: string
    avatar?: string | null
    role?: $Enums.role_enum
    is_active?: boolean | null
    email_verified?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attempts?: attemptsUncheckedCreateNestedManyWithoutUsersInput
    exams?: examsUncheckedCreateNestedManyWithoutUsersInput
    questions?: questionsUncheckedCreateNestedManyWithoutUsersInput
    refresh_tokens?: refresh_tokensUncheckedCreateNestedManyWithoutUsersInput
    class_memberships?: class_studentsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutClasses_teachingInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutClasses_teachingInput, usersUncheckedCreateWithoutClasses_teachingInput>
  }

  export type class_studentsCreateWithoutClassesInput = {
    joined_at?: Date | string | null
    users: usersCreateNestedOneWithoutClass_membershipsInput
  }

  export type class_studentsUncheckedCreateWithoutClassesInput = {
    student_id: string
    joined_at?: Date | string | null
  }

  export type class_studentsCreateOrConnectWithoutClassesInput = {
    where: class_studentsWhereUniqueInput
    create: XOR<class_studentsCreateWithoutClassesInput, class_studentsUncheckedCreateWithoutClassesInput>
  }

  export type class_studentsCreateManyClassesInputEnvelope = {
    data: class_studentsCreateManyClassesInput | class_studentsCreateManyClassesInput[]
    skipDuplicates?: boolean
  }

  export type exam_classesCreateWithoutClassesInput = {
    created_at?: Date | string | null
    exams: examsCreateNestedOneWithoutExam_classesInput
  }

  export type exam_classesUncheckedCreateWithoutClassesInput = {
    exam_id: string
    created_at?: Date | string | null
  }

  export type exam_classesCreateOrConnectWithoutClassesInput = {
    where: exam_classesWhereUniqueInput
    create: XOR<exam_classesCreateWithoutClassesInput, exam_classesUncheckedCreateWithoutClassesInput>
  }

  export type exam_classesCreateManyClassesInputEnvelope = {
    data: exam_classesCreateManyClassesInput | exam_classesCreateManyClassesInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutClasses_teachingInput = {
    update: XOR<usersUpdateWithoutClasses_teachingInput, usersUncheckedUpdateWithoutClasses_teachingInput>
    create: XOR<usersCreateWithoutClasses_teachingInput, usersUncheckedCreateWithoutClasses_teachingInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutClasses_teachingInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutClasses_teachingInput, usersUncheckedUpdateWithoutClasses_teachingInput>
  }

  export type usersUpdateWithoutClasses_teachingInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumrole_enumFieldUpdateOperationsInput | $Enums.role_enum
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: attemptsUpdateManyWithoutUsersNestedInput
    exams?: examsUpdateManyWithoutUsersNestedInput
    questions?: questionsUpdateManyWithoutUsersNestedInput
    refresh_tokens?: refresh_tokensUpdateManyWithoutUsersNestedInput
    class_memberships?: class_studentsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutClasses_teachingInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumrole_enumFieldUpdateOperationsInput | $Enums.role_enum
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: attemptsUncheckedUpdateManyWithoutUsersNestedInput
    exams?: examsUncheckedUpdateManyWithoutUsersNestedInput
    questions?: questionsUncheckedUpdateManyWithoutUsersNestedInput
    refresh_tokens?: refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput
    class_memberships?: class_studentsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type class_studentsUpsertWithWhereUniqueWithoutClassesInput = {
    where: class_studentsWhereUniqueInput
    update: XOR<class_studentsUpdateWithoutClassesInput, class_studentsUncheckedUpdateWithoutClassesInput>
    create: XOR<class_studentsCreateWithoutClassesInput, class_studentsUncheckedCreateWithoutClassesInput>
  }

  export type class_studentsUpdateWithWhereUniqueWithoutClassesInput = {
    where: class_studentsWhereUniqueInput
    data: XOR<class_studentsUpdateWithoutClassesInput, class_studentsUncheckedUpdateWithoutClassesInput>
  }

  export type class_studentsUpdateManyWithWhereWithoutClassesInput = {
    where: class_studentsScalarWhereInput
    data: XOR<class_studentsUpdateManyMutationInput, class_studentsUncheckedUpdateManyWithoutClassesInput>
  }

  export type class_studentsScalarWhereInput = {
    AND?: class_studentsScalarWhereInput | class_studentsScalarWhereInput[]
    OR?: class_studentsScalarWhereInput[]
    NOT?: class_studentsScalarWhereInput | class_studentsScalarWhereInput[]
    class_id?: StringFilter<"class_students"> | string
    student_id?: StringFilter<"class_students"> | string
    joined_at?: DateTimeNullableFilter<"class_students"> | Date | string | null
  }

  export type exam_classesUpsertWithWhereUniqueWithoutClassesInput = {
    where: exam_classesWhereUniqueInput
    update: XOR<exam_classesUpdateWithoutClassesInput, exam_classesUncheckedUpdateWithoutClassesInput>
    create: XOR<exam_classesCreateWithoutClassesInput, exam_classesUncheckedCreateWithoutClassesInput>
  }

  export type exam_classesUpdateWithWhereUniqueWithoutClassesInput = {
    where: exam_classesWhereUniqueInput
    data: XOR<exam_classesUpdateWithoutClassesInput, exam_classesUncheckedUpdateWithoutClassesInput>
  }

  export type exam_classesUpdateManyWithWhereWithoutClassesInput = {
    where: exam_classesScalarWhereInput
    data: XOR<exam_classesUpdateManyMutationInput, exam_classesUncheckedUpdateManyWithoutClassesInput>
  }

  export type classesCreateWithoutClass_studentsInput = {
    id?: string
    name: string
    code?: string | null
    description?: string | null
    school_year?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    teacher: usersCreateNestedOneWithoutClasses_teachingInput
    exam_classes?: exam_classesCreateNestedManyWithoutClassesInput
  }

  export type classesUncheckedCreateWithoutClass_studentsInput = {
    id?: string
    name: string
    code?: string | null
    description?: string | null
    school_year?: string | null
    teacher_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    exam_classes?: exam_classesUncheckedCreateNestedManyWithoutClassesInput
  }

  export type classesCreateOrConnectWithoutClass_studentsInput = {
    where: classesWhereUniqueInput
    create: XOR<classesCreateWithoutClass_studentsInput, classesUncheckedCreateWithoutClass_studentsInput>
  }

  export type usersCreateWithoutClass_membershipsInput = {
    id?: string
    full_name: string
    email: string
    phone?: string | null
    password: string
    avatar?: string | null
    role?: $Enums.role_enum
    is_active?: boolean | null
    email_verified?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attempts?: attemptsCreateNestedManyWithoutUsersInput
    exams?: examsCreateNestedManyWithoutUsersInput
    questions?: questionsCreateNestedManyWithoutUsersInput
    refresh_tokens?: refresh_tokensCreateNestedManyWithoutUsersInput
    classes_teaching?: classesCreateNestedManyWithoutTeacherInput
  }

  export type usersUncheckedCreateWithoutClass_membershipsInput = {
    id?: string
    full_name: string
    email: string
    phone?: string | null
    password: string
    avatar?: string | null
    role?: $Enums.role_enum
    is_active?: boolean | null
    email_verified?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attempts?: attemptsUncheckedCreateNestedManyWithoutUsersInput
    exams?: examsUncheckedCreateNestedManyWithoutUsersInput
    questions?: questionsUncheckedCreateNestedManyWithoutUsersInput
    refresh_tokens?: refresh_tokensUncheckedCreateNestedManyWithoutUsersInput
    classes_teaching?: classesUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type usersCreateOrConnectWithoutClass_membershipsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutClass_membershipsInput, usersUncheckedCreateWithoutClass_membershipsInput>
  }

  export type classesUpsertWithoutClass_studentsInput = {
    update: XOR<classesUpdateWithoutClass_studentsInput, classesUncheckedUpdateWithoutClass_studentsInput>
    create: XOR<classesCreateWithoutClass_studentsInput, classesUncheckedCreateWithoutClass_studentsInput>
    where?: classesWhereInput
  }

  export type classesUpdateToOneWithWhereWithoutClass_studentsInput = {
    where?: classesWhereInput
    data: XOR<classesUpdateWithoutClass_studentsInput, classesUncheckedUpdateWithoutClass_studentsInput>
  }

  export type classesUpdateWithoutClass_studentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    school_year?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teacher?: usersUpdateOneRequiredWithoutClasses_teachingNestedInput
    exam_classes?: exam_classesUpdateManyWithoutClassesNestedInput
  }

  export type classesUncheckedUpdateWithoutClass_studentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    school_year?: NullableStringFieldUpdateOperationsInput | string | null
    teacher_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exam_classes?: exam_classesUncheckedUpdateManyWithoutClassesNestedInput
  }

  export type usersUpsertWithoutClass_membershipsInput = {
    update: XOR<usersUpdateWithoutClass_membershipsInput, usersUncheckedUpdateWithoutClass_membershipsInput>
    create: XOR<usersCreateWithoutClass_membershipsInput, usersUncheckedCreateWithoutClass_membershipsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutClass_membershipsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutClass_membershipsInput, usersUncheckedUpdateWithoutClass_membershipsInput>
  }

  export type usersUpdateWithoutClass_membershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumrole_enumFieldUpdateOperationsInput | $Enums.role_enum
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: attemptsUpdateManyWithoutUsersNestedInput
    exams?: examsUpdateManyWithoutUsersNestedInput
    questions?: questionsUpdateManyWithoutUsersNestedInput
    refresh_tokens?: refresh_tokensUpdateManyWithoutUsersNestedInput
    classes_teaching?: classesUpdateManyWithoutTeacherNestedInput
  }

  export type usersUncheckedUpdateWithoutClass_membershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumrole_enumFieldUpdateOperationsInput | $Enums.role_enum
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: attemptsUncheckedUpdateManyWithoutUsersNestedInput
    exams?: examsUncheckedUpdateManyWithoutUsersNestedInput
    questions?: questionsUncheckedUpdateManyWithoutUsersNestedInput
    refresh_tokens?: refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput
    classes_teaching?: classesUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type attemptsCreateWithoutUsersInput = {
    id?: string
    started_at?: Date | string | null
    submitted_at?: Date | string | null
    status?: $Enums.attempt_status_enum | null
    score?: number | null
    total_correct?: number | null
    total_wrong?: number | null
    created_at?: Date | string | null
    exams: examsCreateNestedOneWithoutAttemptsInput
    student_answers?: student_answersCreateNestedManyWithoutAttemptsInput
  }

  export type attemptsUncheckedCreateWithoutUsersInput = {
    id?: string
    exam_id: string
    started_at?: Date | string | null
    submitted_at?: Date | string | null
    status?: $Enums.attempt_status_enum | null
    score?: number | null
    total_correct?: number | null
    total_wrong?: number | null
    created_at?: Date | string | null
    student_answers?: student_answersUncheckedCreateNestedManyWithoutAttemptsInput
  }

  export type attemptsCreateOrConnectWithoutUsersInput = {
    where: attemptsWhereUniqueInput
    create: XOR<attemptsCreateWithoutUsersInput, attemptsUncheckedCreateWithoutUsersInput>
  }

  export type attemptsCreateManyUsersInputEnvelope = {
    data: attemptsCreateManyUsersInput | attemptsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type examsCreateWithoutUsersInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    total_score?: number | null
    status?: $Enums.exam_status_enum | null
    is_public?: boolean | null
    access_code?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    shuffle_questions?: boolean | null
    shuffle_answers?: boolean | null
    show_result_after_submit?: boolean | null
    max_attempts?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attempts?: attemptsCreateNestedManyWithoutExamsInput
    exam_questions?: exam_questionsCreateNestedManyWithoutExamsInput
    exam_classes?: exam_classesCreateNestedManyWithoutExamsInput
    subjects: subjectsCreateNestedOneWithoutExamsInput
  }

  export type examsUncheckedCreateWithoutUsersInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    total_score?: number | null
    status?: $Enums.exam_status_enum | null
    is_public?: boolean | null
    access_code?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    shuffle_questions?: boolean | null
    shuffle_answers?: boolean | null
    show_result_after_submit?: boolean | null
    max_attempts?: number | null
    subject_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attempts?: attemptsUncheckedCreateNestedManyWithoutExamsInput
    exam_questions?: exam_questionsUncheckedCreateNestedManyWithoutExamsInput
    exam_classes?: exam_classesUncheckedCreateNestedManyWithoutExamsInput
  }

  export type examsCreateOrConnectWithoutUsersInput = {
    where: examsWhereUniqueInput
    create: XOR<examsCreateWithoutUsersInput, examsUncheckedCreateWithoutUsersInput>
  }

  export type examsCreateManyUsersInputEnvelope = {
    data: examsCreateManyUsersInput | examsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type questionsCreateWithoutUsersInput = {
    id?: string
    content: string
    explanation?: string | null
    image_url?: string | null
    level?: number | null
    type?: $Enums.question_type_enum | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersCreateNestedManyWithoutQuestionsInput
    exam_questions?: exam_questionsCreateNestedManyWithoutQuestionsInput
    student_answers?: student_answersCreateNestedManyWithoutQuestionsInput
    subjects: subjectsCreateNestedOneWithoutQuestionsInput
  }

  export type questionsUncheckedCreateWithoutUsersInput = {
    id?: string
    content: string
    explanation?: string | null
    image_url?: string | null
    level?: number | null
    type?: $Enums.question_type_enum | null
    subject_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    answers?: answersUncheckedCreateNestedManyWithoutQuestionsInput
    exam_questions?: exam_questionsUncheckedCreateNestedManyWithoutQuestionsInput
    student_answers?: student_answersUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type questionsCreateOrConnectWithoutUsersInput = {
    where: questionsWhereUniqueInput
    create: XOR<questionsCreateWithoutUsersInput, questionsUncheckedCreateWithoutUsersInput>
  }

  export type questionsCreateManyUsersInputEnvelope = {
    data: questionsCreateManyUsersInput | questionsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type refresh_tokensCreateWithoutUsersInput = {
    id?: string
    token_hash: string
    expires_at: Date | string
    revoked_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type refresh_tokensUncheckedCreateWithoutUsersInput = {
    id?: string
    token_hash: string
    expires_at: Date | string
    revoked_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type refresh_tokensCreateOrConnectWithoutUsersInput = {
    where: refresh_tokensWhereUniqueInput
    create: XOR<refresh_tokensCreateWithoutUsersInput, refresh_tokensUncheckedCreateWithoutUsersInput>
  }

  export type refresh_tokensCreateManyUsersInputEnvelope = {
    data: refresh_tokensCreateManyUsersInput | refresh_tokensCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type classesCreateWithoutTeacherInput = {
    id?: string
    name: string
    code?: string | null
    description?: string | null
    school_year?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    class_students?: class_studentsCreateNestedManyWithoutClassesInput
    exam_classes?: exam_classesCreateNestedManyWithoutClassesInput
  }

  export type classesUncheckedCreateWithoutTeacherInput = {
    id?: string
    name: string
    code?: string | null
    description?: string | null
    school_year?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    class_students?: class_studentsUncheckedCreateNestedManyWithoutClassesInput
    exam_classes?: exam_classesUncheckedCreateNestedManyWithoutClassesInput
  }

  export type classesCreateOrConnectWithoutTeacherInput = {
    where: classesWhereUniqueInput
    create: XOR<classesCreateWithoutTeacherInput, classesUncheckedCreateWithoutTeacherInput>
  }

  export type classesCreateManyTeacherInputEnvelope = {
    data: classesCreateManyTeacherInput | classesCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type class_studentsCreateWithoutUsersInput = {
    joined_at?: Date | string | null
    classes: classesCreateNestedOneWithoutClass_studentsInput
  }

  export type class_studentsUncheckedCreateWithoutUsersInput = {
    class_id: string
    joined_at?: Date | string | null
  }

  export type class_studentsCreateOrConnectWithoutUsersInput = {
    where: class_studentsWhereUniqueInput
    create: XOR<class_studentsCreateWithoutUsersInput, class_studentsUncheckedCreateWithoutUsersInput>
  }

  export type class_studentsCreateManyUsersInputEnvelope = {
    data: class_studentsCreateManyUsersInput | class_studentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type attemptsUpsertWithWhereUniqueWithoutUsersInput = {
    where: attemptsWhereUniqueInput
    update: XOR<attemptsUpdateWithoutUsersInput, attemptsUncheckedUpdateWithoutUsersInput>
    create: XOR<attemptsCreateWithoutUsersInput, attemptsUncheckedCreateWithoutUsersInput>
  }

  export type attemptsUpdateWithWhereUniqueWithoutUsersInput = {
    where: attemptsWhereUniqueInput
    data: XOR<attemptsUpdateWithoutUsersInput, attemptsUncheckedUpdateWithoutUsersInput>
  }

  export type attemptsUpdateManyWithWhereWithoutUsersInput = {
    where: attemptsScalarWhereInput
    data: XOR<attemptsUpdateManyMutationInput, attemptsUncheckedUpdateManyWithoutUsersInput>
  }

  export type examsUpsertWithWhereUniqueWithoutUsersInput = {
    where: examsWhereUniqueInput
    update: XOR<examsUpdateWithoutUsersInput, examsUncheckedUpdateWithoutUsersInput>
    create: XOR<examsCreateWithoutUsersInput, examsUncheckedCreateWithoutUsersInput>
  }

  export type examsUpdateWithWhereUniqueWithoutUsersInput = {
    where: examsWhereUniqueInput
    data: XOR<examsUpdateWithoutUsersInput, examsUncheckedUpdateWithoutUsersInput>
  }

  export type examsUpdateManyWithWhereWithoutUsersInput = {
    where: examsScalarWhereInput
    data: XOR<examsUpdateManyMutationInput, examsUncheckedUpdateManyWithoutUsersInput>
  }

  export type questionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: questionsWhereUniqueInput
    update: XOR<questionsUpdateWithoutUsersInput, questionsUncheckedUpdateWithoutUsersInput>
    create: XOR<questionsCreateWithoutUsersInput, questionsUncheckedCreateWithoutUsersInput>
  }

  export type questionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: questionsWhereUniqueInput
    data: XOR<questionsUpdateWithoutUsersInput, questionsUncheckedUpdateWithoutUsersInput>
  }

  export type questionsUpdateManyWithWhereWithoutUsersInput = {
    where: questionsScalarWhereInput
    data: XOR<questionsUpdateManyMutationInput, questionsUncheckedUpdateManyWithoutUsersInput>
  }

  export type refresh_tokensUpsertWithWhereUniqueWithoutUsersInput = {
    where: refresh_tokensWhereUniqueInput
    update: XOR<refresh_tokensUpdateWithoutUsersInput, refresh_tokensUncheckedUpdateWithoutUsersInput>
    create: XOR<refresh_tokensCreateWithoutUsersInput, refresh_tokensUncheckedCreateWithoutUsersInput>
  }

  export type refresh_tokensUpdateWithWhereUniqueWithoutUsersInput = {
    where: refresh_tokensWhereUniqueInput
    data: XOR<refresh_tokensUpdateWithoutUsersInput, refresh_tokensUncheckedUpdateWithoutUsersInput>
  }

  export type refresh_tokensUpdateManyWithWhereWithoutUsersInput = {
    where: refresh_tokensScalarWhereInput
    data: XOR<refresh_tokensUpdateManyMutationInput, refresh_tokensUncheckedUpdateManyWithoutUsersInput>
  }

  export type refresh_tokensScalarWhereInput = {
    AND?: refresh_tokensScalarWhereInput | refresh_tokensScalarWhereInput[]
    OR?: refresh_tokensScalarWhereInput[]
    NOT?: refresh_tokensScalarWhereInput | refresh_tokensScalarWhereInput[]
    id?: StringFilter<"refresh_tokens"> | string
    user_id?: StringFilter<"refresh_tokens"> | string
    token_hash?: StringFilter<"refresh_tokens"> | string
    expires_at?: DateTimeFilter<"refresh_tokens"> | Date | string
    revoked_at?: DateTimeNullableFilter<"refresh_tokens"> | Date | string | null
    created_at?: DateTimeNullableFilter<"refresh_tokens"> | Date | string | null
  }

  export type classesUpsertWithWhereUniqueWithoutTeacherInput = {
    where: classesWhereUniqueInput
    update: XOR<classesUpdateWithoutTeacherInput, classesUncheckedUpdateWithoutTeacherInput>
    create: XOR<classesCreateWithoutTeacherInput, classesUncheckedCreateWithoutTeacherInput>
  }

  export type classesUpdateWithWhereUniqueWithoutTeacherInput = {
    where: classesWhereUniqueInput
    data: XOR<classesUpdateWithoutTeacherInput, classesUncheckedUpdateWithoutTeacherInput>
  }

  export type classesUpdateManyWithWhereWithoutTeacherInput = {
    where: classesScalarWhereInput
    data: XOR<classesUpdateManyMutationInput, classesUncheckedUpdateManyWithoutTeacherInput>
  }

  export type classesScalarWhereInput = {
    AND?: classesScalarWhereInput | classesScalarWhereInput[]
    OR?: classesScalarWhereInput[]
    NOT?: classesScalarWhereInput | classesScalarWhereInput[]
    id?: StringFilter<"classes"> | string
    name?: StringFilter<"classes"> | string
    code?: StringNullableFilter<"classes"> | string | null
    description?: StringNullableFilter<"classes"> | string | null
    school_year?: StringNullableFilter<"classes"> | string | null
    teacher_id?: StringFilter<"classes"> | string
    created_at?: DateTimeNullableFilter<"classes"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"classes"> | Date | string | null
  }

  export type class_studentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: class_studentsWhereUniqueInput
    update: XOR<class_studentsUpdateWithoutUsersInput, class_studentsUncheckedUpdateWithoutUsersInput>
    create: XOR<class_studentsCreateWithoutUsersInput, class_studentsUncheckedCreateWithoutUsersInput>
  }

  export type class_studentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: class_studentsWhereUniqueInput
    data: XOR<class_studentsUpdateWithoutUsersInput, class_studentsUncheckedUpdateWithoutUsersInput>
  }

  export type class_studentsUpdateManyWithWhereWithoutUsersInput = {
    where: class_studentsScalarWhereInput
    data: XOR<class_studentsUpdateManyMutationInput, class_studentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type usersCreateWithoutRefresh_tokensInput = {
    id?: string
    full_name: string
    email: string
    phone?: string | null
    password: string
    avatar?: string | null
    role?: $Enums.role_enum
    is_active?: boolean | null
    email_verified?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attempts?: attemptsCreateNestedManyWithoutUsersInput
    exams?: examsCreateNestedManyWithoutUsersInput
    questions?: questionsCreateNestedManyWithoutUsersInput
    classes_teaching?: classesCreateNestedManyWithoutTeacherInput
    class_memberships?: class_studentsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutRefresh_tokensInput = {
    id?: string
    full_name: string
    email: string
    phone?: string | null
    password: string
    avatar?: string | null
    role?: $Enums.role_enum
    is_active?: boolean | null
    email_verified?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    attempts?: attemptsUncheckedCreateNestedManyWithoutUsersInput
    exams?: examsUncheckedCreateNestedManyWithoutUsersInput
    questions?: questionsUncheckedCreateNestedManyWithoutUsersInput
    classes_teaching?: classesUncheckedCreateNestedManyWithoutTeacherInput
    class_memberships?: class_studentsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutRefresh_tokensInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRefresh_tokensInput, usersUncheckedCreateWithoutRefresh_tokensInput>
  }

  export type usersUpsertWithoutRefresh_tokensInput = {
    update: XOR<usersUpdateWithoutRefresh_tokensInput, usersUncheckedUpdateWithoutRefresh_tokensInput>
    create: XOR<usersCreateWithoutRefresh_tokensInput, usersUncheckedCreateWithoutRefresh_tokensInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutRefresh_tokensInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutRefresh_tokensInput, usersUncheckedUpdateWithoutRefresh_tokensInput>
  }

  export type usersUpdateWithoutRefresh_tokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumrole_enumFieldUpdateOperationsInput | $Enums.role_enum
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: attemptsUpdateManyWithoutUsersNestedInput
    exams?: examsUpdateManyWithoutUsersNestedInput
    questions?: questionsUpdateManyWithoutUsersNestedInput
    classes_teaching?: classesUpdateManyWithoutTeacherNestedInput
    class_memberships?: class_studentsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutRefresh_tokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumrole_enumFieldUpdateOperationsInput | $Enums.role_enum
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: attemptsUncheckedUpdateManyWithoutUsersNestedInput
    exams?: examsUncheckedUpdateManyWithoutUsersNestedInput
    questions?: questionsUncheckedUpdateManyWithoutUsersNestedInput
    classes_teaching?: classesUncheckedUpdateManyWithoutTeacherNestedInput
    class_memberships?: class_studentsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type student_answersCreateManyAnswersInput = {
    id?: string
    attempt_id: string
    question_id: string
    created_at?: Date | string | null
  }

  export type student_answersUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: attemptsUpdateOneRequiredWithoutStudent_answersNestedInput
    questions?: questionsUpdateOneRequiredWithoutStudent_answersNestedInput
  }

  export type student_answersUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    attempt_id?: StringFieldUpdateOperationsInput | string
    question_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type student_answersUncheckedUpdateManyWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    attempt_id?: StringFieldUpdateOperationsInput | string
    question_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type student_answersCreateManyAttemptsInput = {
    id?: string
    question_id: string
    answer_id: string
    created_at?: Date | string | null
  }

  export type student_answersUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateOneRequiredWithoutStudent_answersNestedInput
    questions?: questionsUpdateOneRequiredWithoutStudent_answersNestedInput
  }

  export type student_answersUncheckedUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_id?: StringFieldUpdateOperationsInput | string
    answer_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type student_answersUncheckedUpdateManyWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    question_id?: StringFieldUpdateOperationsInput | string
    answer_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attemptsCreateManyExamsInput = {
    id?: string
    student_id: string
    started_at?: Date | string | null
    submitted_at?: Date | string | null
    status?: $Enums.attempt_status_enum | null
    score?: number | null
    total_correct?: number | null
    total_wrong?: number | null
    created_at?: Date | string | null
  }

  export type exam_questionsCreateManyExamsInput = {
    question_id: string
    order_index: number
    score?: number | null
  }

  export type exam_classesCreateManyExamsInput = {
    class_id: string
    created_at?: Date | string | null
  }

  export type attemptsUpdateWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumattempt_status_enumFieldUpdateOperationsInput | $Enums.attempt_status_enum | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    total_correct?: NullableIntFieldUpdateOperationsInput | number | null
    total_wrong?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutAttemptsNestedInput
    student_answers?: student_answersUpdateManyWithoutAttemptsNestedInput
  }

  export type attemptsUncheckedUpdateWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumattempt_status_enumFieldUpdateOperationsInput | $Enums.attempt_status_enum | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    total_correct?: NullableIntFieldUpdateOperationsInput | number | null
    total_wrong?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_answers?: student_answersUncheckedUpdateManyWithoutAttemptsNestedInput
  }

  export type attemptsUncheckedUpdateManyWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumattempt_status_enumFieldUpdateOperationsInput | $Enums.attempt_status_enum | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    total_correct?: NullableIntFieldUpdateOperationsInput | number | null
    total_wrong?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exam_questionsUpdateWithoutExamsInput = {
    order_index?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    questions?: questionsUpdateOneRequiredWithoutExam_questionsNestedInput
  }

  export type exam_questionsUncheckedUpdateWithoutExamsInput = {
    question_id?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type exam_questionsUncheckedUpdateManyWithoutExamsInput = {
    question_id?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type exam_classesUpdateWithoutExamsInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    classes?: classesUpdateOneRequiredWithoutExam_classesNestedInput
  }

  export type exam_classesUncheckedUpdateWithoutExamsInput = {
    class_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exam_classesUncheckedUpdateManyWithoutExamsInput = {
    class_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type answersCreateManyQuestionsInput = {
    id?: string
    content: string
    is_correct?: boolean | null
    created_at?: Date | string | null
  }

  export type exam_questionsCreateManyQuestionsInput = {
    exam_id: string
    order_index: number
    score?: number | null
  }

  export type student_answersCreateManyQuestionsInput = {
    id?: string
    attempt_id: string
    answer_id: string
    created_at?: Date | string | null
  }

  export type answersUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_answers?: student_answersUpdateManyWithoutAnswersNestedInput
  }

  export type answersUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_answers?: student_answersUncheckedUpdateManyWithoutAnswersNestedInput
  }

  export type answersUncheckedUpdateManyWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    is_correct?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exam_questionsUpdateWithoutQuestionsInput = {
    order_index?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    exams?: examsUpdateOneRequiredWithoutExam_questionsNestedInput
  }

  export type exam_questionsUncheckedUpdateWithoutQuestionsInput = {
    exam_id?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type exam_questionsUncheckedUpdateManyWithoutQuestionsInput = {
    exam_id?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type student_answersUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateOneRequiredWithoutStudent_answersNestedInput
    attempts?: attemptsUpdateOneRequiredWithoutStudent_answersNestedInput
  }

  export type student_answersUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    attempt_id?: StringFieldUpdateOperationsInput | string
    answer_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type student_answersUncheckedUpdateManyWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    attempt_id?: StringFieldUpdateOperationsInput | string
    answer_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type examsCreateManySubjectsInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    total_score?: number | null
    status?: $Enums.exam_status_enum | null
    is_public?: boolean | null
    access_code?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    shuffle_questions?: boolean | null
    shuffle_answers?: boolean | null
    show_result_after_submit?: boolean | null
    max_attempts?: number | null
    created_by_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type questionsCreateManySubjectsInput = {
    id?: string
    content: string
    explanation?: string | null
    image_url?: string | null
    level?: number | null
    type?: $Enums.question_type_enum | null
    created_by_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type examsUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    total_score?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableEnumexam_status_enumFieldUpdateOperationsInput | $Enums.exam_status_enum | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    access_code?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shuffle_questions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    shuffle_answers?: NullableBoolFieldUpdateOperationsInput | boolean | null
    show_result_after_submit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    max_attempts?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: attemptsUpdateManyWithoutExamsNestedInput
    exam_questions?: exam_questionsUpdateManyWithoutExamsNestedInput
    exam_classes?: exam_classesUpdateManyWithoutExamsNestedInput
    users?: usersUpdateOneRequiredWithoutExamsNestedInput
  }

  export type examsUncheckedUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    total_score?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableEnumexam_status_enumFieldUpdateOperationsInput | $Enums.exam_status_enum | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    access_code?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shuffle_questions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    shuffle_answers?: NullableBoolFieldUpdateOperationsInput | boolean | null
    show_result_after_submit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    max_attempts?: NullableIntFieldUpdateOperationsInput | number | null
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: attemptsUncheckedUpdateManyWithoutExamsNestedInput
    exam_questions?: exam_questionsUncheckedUpdateManyWithoutExamsNestedInput
    exam_classes?: exam_classesUncheckedUpdateManyWithoutExamsNestedInput
  }

  export type examsUncheckedUpdateManyWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    total_score?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableEnumexam_status_enumFieldUpdateOperationsInput | $Enums.exam_status_enum | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    access_code?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shuffle_questions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    shuffle_answers?: NullableBoolFieldUpdateOperationsInput | boolean | null
    show_result_after_submit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    max_attempts?: NullableIntFieldUpdateOperationsInput | number | null
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type questionsUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumquestion_type_enumFieldUpdateOperationsInput | $Enums.question_type_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutQuestionsNestedInput
    exam_questions?: exam_questionsUpdateManyWithoutQuestionsNestedInput
    student_answers?: student_answersUpdateManyWithoutQuestionsNestedInput
    users?: usersUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumquestion_type_enumFieldUpdateOperationsInput | $Enums.question_type_enum | null
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUncheckedUpdateManyWithoutQuestionsNestedInput
    exam_questions?: exam_questionsUncheckedUpdateManyWithoutQuestionsNestedInput
    student_answers?: student_answersUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateManyWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumquestion_type_enumFieldUpdateOperationsInput | $Enums.question_type_enum | null
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type class_studentsCreateManyClassesInput = {
    student_id: string
    joined_at?: Date | string | null
  }

  export type exam_classesCreateManyClassesInput = {
    exam_id: string
    created_at?: Date | string | null
  }

  export type class_studentsUpdateWithoutClassesInput = {
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutClass_membershipsNestedInput
  }

  export type class_studentsUncheckedUpdateWithoutClassesInput = {
    student_id?: StringFieldUpdateOperationsInput | string
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type class_studentsUncheckedUpdateManyWithoutClassesInput = {
    student_id?: StringFieldUpdateOperationsInput | string
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exam_classesUpdateWithoutClassesInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exams?: examsUpdateOneRequiredWithoutExam_classesNestedInput
  }

  export type exam_classesUncheckedUpdateWithoutClassesInput = {
    exam_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exam_classesUncheckedUpdateManyWithoutClassesInput = {
    exam_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type attemptsCreateManyUsersInput = {
    id?: string
    exam_id: string
    started_at?: Date | string | null
    submitted_at?: Date | string | null
    status?: $Enums.attempt_status_enum | null
    score?: number | null
    total_correct?: number | null
    total_wrong?: number | null
    created_at?: Date | string | null
  }

  export type examsCreateManyUsersInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    duration: number
    total_score?: number | null
    status?: $Enums.exam_status_enum | null
    is_public?: boolean | null
    access_code?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    shuffle_questions?: boolean | null
    shuffle_answers?: boolean | null
    show_result_after_submit?: boolean | null
    max_attempts?: number | null
    subject_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type questionsCreateManyUsersInput = {
    id?: string
    content: string
    explanation?: string | null
    image_url?: string | null
    level?: number | null
    type?: $Enums.question_type_enum | null
    subject_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type refresh_tokensCreateManyUsersInput = {
    id?: string
    token_hash: string
    expires_at: Date | string
    revoked_at?: Date | string | null
    created_at?: Date | string | null
  }

  export type classesCreateManyTeacherInput = {
    id?: string
    name: string
    code?: string | null
    description?: string | null
    school_year?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type class_studentsCreateManyUsersInput = {
    class_id: string
    joined_at?: Date | string | null
  }

  export type attemptsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumattempt_status_enumFieldUpdateOperationsInput | $Enums.attempt_status_enum | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    total_correct?: NullableIntFieldUpdateOperationsInput | number | null
    total_wrong?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    exams?: examsUpdateOneRequiredWithoutAttemptsNestedInput
    student_answers?: student_answersUpdateManyWithoutAttemptsNestedInput
  }

  export type attemptsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    exam_id?: StringFieldUpdateOperationsInput | string
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumattempt_status_enumFieldUpdateOperationsInput | $Enums.attempt_status_enum | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    total_correct?: NullableIntFieldUpdateOperationsInput | number | null
    total_wrong?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_answers?: student_answersUncheckedUpdateManyWithoutAttemptsNestedInput
  }

  export type attemptsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    exam_id?: StringFieldUpdateOperationsInput | string
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumattempt_status_enumFieldUpdateOperationsInput | $Enums.attempt_status_enum | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    total_correct?: NullableIntFieldUpdateOperationsInput | number | null
    total_wrong?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type examsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    total_score?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableEnumexam_status_enumFieldUpdateOperationsInput | $Enums.exam_status_enum | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    access_code?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shuffle_questions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    shuffle_answers?: NullableBoolFieldUpdateOperationsInput | boolean | null
    show_result_after_submit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    max_attempts?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: attemptsUpdateManyWithoutExamsNestedInput
    exam_questions?: exam_questionsUpdateManyWithoutExamsNestedInput
    exam_classes?: exam_classesUpdateManyWithoutExamsNestedInput
    subjects?: subjectsUpdateOneRequiredWithoutExamsNestedInput
  }

  export type examsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    total_score?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableEnumexam_status_enumFieldUpdateOperationsInput | $Enums.exam_status_enum | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    access_code?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shuffle_questions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    shuffle_answers?: NullableBoolFieldUpdateOperationsInput | boolean | null
    show_result_after_submit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    max_attempts?: NullableIntFieldUpdateOperationsInput | number | null
    subject_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attempts?: attemptsUncheckedUpdateManyWithoutExamsNestedInput
    exam_questions?: exam_questionsUncheckedUpdateManyWithoutExamsNestedInput
    exam_classes?: exam_classesUncheckedUpdateManyWithoutExamsNestedInput
  }

  export type examsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    total_score?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableEnumexam_status_enumFieldUpdateOperationsInput | $Enums.exam_status_enum | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    access_code?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shuffle_questions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    shuffle_answers?: NullableBoolFieldUpdateOperationsInput | boolean | null
    show_result_after_submit?: NullableBoolFieldUpdateOperationsInput | boolean | null
    max_attempts?: NullableIntFieldUpdateOperationsInput | number | null
    subject_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type questionsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumquestion_type_enumFieldUpdateOperationsInput | $Enums.question_type_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUpdateManyWithoutQuestionsNestedInput
    exam_questions?: exam_questionsUpdateManyWithoutQuestionsNestedInput
    student_answers?: student_answersUpdateManyWithoutQuestionsNestedInput
    subjects?: subjectsUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumquestion_type_enumFieldUpdateOperationsInput | $Enums.question_type_enum | null
    subject_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    answers?: answersUncheckedUpdateManyWithoutQuestionsNestedInput
    exam_questions?: exam_questionsUncheckedUpdateManyWithoutQuestionsNestedInput
    student_answers?: student_answersUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type questionsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumquestion_type_enumFieldUpdateOperationsInput | $Enums.question_type_enum | null
    subject_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type refresh_tokensUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type refresh_tokensUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type refresh_tokensUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_hash?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type classesUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    school_year?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    class_students?: class_studentsUpdateManyWithoutClassesNestedInput
    exam_classes?: exam_classesUpdateManyWithoutClassesNestedInput
  }

  export type classesUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    school_year?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    class_students?: class_studentsUncheckedUpdateManyWithoutClassesNestedInput
    exam_classes?: exam_classesUncheckedUpdateManyWithoutClassesNestedInput
  }

  export type classesUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    school_year?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type class_studentsUpdateWithoutUsersInput = {
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    classes?: classesUpdateOneRequiredWithoutClass_studentsNestedInput
  }

  export type class_studentsUncheckedUpdateWithoutUsersInput = {
    class_id?: StringFieldUpdateOperationsInput | string
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type class_studentsUncheckedUpdateManyWithoutUsersInput = {
    class_id?: StringFieldUpdateOperationsInput | string
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}