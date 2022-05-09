/**
 * RequestType is an object with a type property that is either 'add', 'remove', 'modify', 'read', or
 * 'list', and a user property that is a string, and optionally a title property that is a string, and
 * optionally a body property that is a string, and optionally a color property that is a string.
 * @property {'add' | 'remove' | 'modify' | 'read' | 'list'} type - The type of request.
 * @property {string} user - The user who is making the request.
 * @property {string} title - The title of the note.
 * @property {string} body - The body of the note.
 * @property {string} color - The color of the note.
 */
export type RequestType = {
  type: 'add' | 'remove' | 'modify' | 'read' | 'list';
  user: string;
  title?: string;
  body?: string;
  color?: string;
}

/**
 * ResponseType is an object with a type property that is either 'add', 'remove', 'modify', 'read', or
 * 'listar', a status property that is either a boolean or void, and an optional notas property that is
 * an array of strings.
 * @property {'add' | 'remove' | 'modify' | 'read' | 'listar'} type - The type of the response.
 * @property {boolean | void} status - boolean | void
 * @property {string[]} notas - This is the array of notes that will be returned by the server.
 */
export type ResponseType = {
  type: 'add' | 'remove' | 'modify' | 'read' | 'listar';
  status: boolean | void;
  notas?: string[];
}