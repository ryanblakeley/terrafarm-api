# Terrafarm API Roadmap

## Authentication

This is implemented almost entirely as a stored procedure in the database.
The caveat here is that a private key that is used to sign the JWT token must
be injected into the variables object when the `authenticateUser` or
`createUser` mutations are called. This is accomplished by using a small
piece of [middleware][1] that checks for these mutations using a regex and if
found injects the private key into the variables.

This is needed because we cannot expose the private key to the client, so the
`key` cannot be provided in the initial mutation variables.

Authorization has also been enabled, and requires that a valid, signed JWT
key be passed in the `Authorization` header of each request. All authorization
happens in the database, and is based on the role assigned to the key, as well
as validating the `user_id` field in the key.

[1]: ../../src/index.js#L19
