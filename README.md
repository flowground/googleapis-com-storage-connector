# ![LOGO](logo.png) Cloud Storage **flow**ground Connector

## Description

A generated **flow**ground connector for the Cloud Storage API (version v1).

Generated from: https://api.apis.guru/v2/specs/googleapis.com/storage/v1/swagger.json<br/>
Generated at: 2019-05-23T12:13:42+03:00

## API Description

Stores and retrieves potentially large, immutable data objects.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Retrieves a list of buckets for a given project.

*Tags:* `buckets`

#### Input Parameters
* `maxResults` - _optional_ - Maximum number of buckets to return in a single response. The service will use this parameter or 1,000 items, whichever is smaller.
* `pageToken` - _optional_ - A previously-returned page token representing part of the larger set of results to view.
* `prefix` - _optional_ - Filter results to buckets whose names begin with this prefix.
* `project` - _required_ - A valid API project identifier.
* `projection` - _optional_ - Set of properties to return. Defaults to noAcl.
    Possible values: full, noAcl.
* `userProject` - _optional_ - The project to be billed for this request.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Creates a new bucket.

*Tags:* `buckets`

#### Input Parameters
* `predefinedAcl` - _optional_ - Apply a predefined set of access controls to this bucket.
    Possible values: authenticatedRead, private, projectPrivate, publicRead, publicReadWrite.
* `predefinedDefaultObjectAcl` - _optional_ - Apply a predefined set of default object access controls to this bucket.
    Possible values: authenticatedRead, bucketOwnerFullControl, bucketOwnerRead, private, projectPrivate, publicRead.
* `project` - _required_ - A valid API project identifier.
* `projection` - _optional_ - Set of properties to return. Defaults to noAcl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.
    Possible values: full, noAcl.
* `userProject` - _optional_ - The project to be billed for this request.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Permanently deletes an empty bucket.

*Tags:* `buckets`

#### Input Parameters
* `bucket` - _required_ - Name of a bucket.
* `ifMetagenerationMatch` - _optional_ - If set, only deletes the bucket if its metageneration matches this value.
* `ifMetagenerationNotMatch` - _optional_ - If set, only deletes the bucket if its metageneration does not match this value.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns metadata for the specified bucket.

*Tags:* `buckets`

#### Input Parameters
* `bucket` - _required_ - Name of a bucket.
* `ifMetagenerationMatch` - _optional_ - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
* `ifMetagenerationNotMatch` - _optional_ - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
* `projection` - _optional_ - Set of properties to return. Defaults to noAcl.
    Possible values: full, noAcl.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.

*Tags:* `buckets`

#### Input Parameters
* `bucket` - _required_ - Name of a bucket.
* `ifMetagenerationMatch` - _optional_ - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
* `ifMetagenerationNotMatch` - _optional_ - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
* `predefinedAcl` - _optional_ - Apply a predefined set of access controls to this bucket.
    Possible values: authenticatedRead, private, projectPrivate, publicRead, publicReadWrite.
* `predefinedDefaultObjectAcl` - _optional_ - Apply a predefined set of default object access controls to this bucket.
    Possible values: authenticatedRead, bucketOwnerFullControl, bucketOwnerRead, private, projectPrivate, publicRead.
* `projection` - _optional_ - Set of properties to return. Defaults to full.
    Possible values: full, noAcl.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.

### Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.

*Tags:* `buckets`

#### Input Parameters
* `bucket` - _required_ - Name of a bucket.
* `ifMetagenerationMatch` - _optional_ - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
* `ifMetagenerationNotMatch` - _optional_ - Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
* `predefinedAcl` - _optional_ - Apply a predefined set of access controls to this bucket.
    Possible values: authenticatedRead, private, projectPrivate, publicRead, publicReadWrite.
* `predefinedDefaultObjectAcl` - _optional_ - Apply a predefined set of default object access controls to this bucket.
    Possible values: authenticatedRead, bucketOwnerFullControl, bucketOwnerRead, private, projectPrivate, publicRead.
* `projection` - _optional_ - Set of properties to return. Defaults to full.
    Possible values: full, noAcl.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.

### Retrieves ACL entries on the specified bucket.

*Tags:* `bucketAccessControls`

#### Input Parameters
* `bucket` - _required_ - Name of a bucket.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Creates a new ACL entry on the specified bucket.

*Tags:* `bucketAccessControls`

#### Input Parameters
* `bucket` - _required_ - Name of a bucket.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Permanently deletes the ACL entry for the specified entity on the specified bucket.

*Tags:* `bucketAccessControls`

#### Input Parameters
* `bucket` - _required_ - Name of a bucket.
* `entity` - _required_ - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns the ACL entry for the specified entity on the specified bucket.

*Tags:* `bucketAccessControls`

#### Input Parameters
* `bucket` - _required_ - Name of a bucket.
* `entity` - _required_ - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Patches an ACL entry on the specified bucket.

*Tags:* `bucketAccessControls`

#### Input Parameters
* `bucket` - _required_ - Name of a bucket.
* `entity` - _required_ - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an ACL entry on the specified bucket.

*Tags:* `bucketAccessControls`

#### Input Parameters
* `bucket` - _required_ - Name of a bucket.
* `entity` - _required_ - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves default object ACL entries on the specified bucket.

*Tags:* `defaultObjectAccessControls`

#### Input Parameters
* `bucket` - _required_ - Name of a bucket.
* `ifMetagenerationMatch` - _optional_ - If present, only return default ACL listing if the bucket's current metageneration matches this value.
* `ifMetagenerationNotMatch` - _optional_ - If present, only return default ACL listing if the bucket's current metageneration does not match the given value.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Creates a new default object ACL entry on the specified bucket.

*Tags:* `defaultObjectAccessControls`

#### Input Parameters
* `bucket` - _required_ - Name of a bucket.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Permanently deletes the default object ACL entry for the specified entity on the specified bucket.

*Tags:* `defaultObjectAccessControls`

#### Input Parameters
* `bucket` - _required_ - Name of a bucket.
* `entity` - _required_ - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns the default object ACL entry for the specified entity on the specified bucket.

*Tags:* `defaultObjectAccessControls`

#### Input Parameters
* `bucket` - _required_ - Name of a bucket.
* `entity` - _required_ - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Patches a default object ACL entry on the specified bucket.

*Tags:* `defaultObjectAccessControls`

#### Input Parameters
* `bucket` - _required_ - Name of a bucket.
* `entity` - _required_ - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates a default object ACL entry on the specified bucket.

*Tags:* `defaultObjectAccessControls`

#### Input Parameters
* `bucket` - _required_ - Name of a bucket.
* `entity` - _required_ - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns an IAM policy for the specified bucket.

*Tags:* `buckets`

#### Input Parameters
* `bucket` - _required_ - Name of a bucket.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an IAM policy for the specified bucket.

*Tags:* `buckets`

#### Input Parameters
* `bucket` - _required_ - Name of a bucket.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Tests a set of permissions on the given bucket to see which, if any, are held by the caller.

*Tags:* `buckets`

#### Input Parameters
* `bucket` - _required_ - Name of a bucket.
* `permissions` - _required_ - Permissions to test.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Locks retention policy on a bucket.

*Tags:* `buckets`

#### Input Parameters
* `bucket` - _required_ - Name of a bucket.
* `ifMetagenerationMatch` - _required_ - Makes the operation conditional on whether bucket's current metageneration matches the given value.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of notification subscriptions for a given bucket.

*Tags:* `notifications`

#### Input Parameters
* `bucket` - _required_ - Name of a Google Cloud Storage bucket.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Creates a notification subscription for a given bucket.

*Tags:* `notifications`

#### Input Parameters
* `bucket` - _required_ - The parent bucket of the notification.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Permanently deletes a notification subscription.

*Tags:* `notifications`

#### Input Parameters
* `bucket` - _required_ - The parent bucket of the notification.
* `notification` - _required_ - ID of the notification to delete.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### View a notification configuration.

*Tags:* `notifications`

#### Input Parameters
* `bucket` - _required_ - The parent bucket of the notification.
* `notification` - _required_ - Notification ID
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of objects matching the criteria.

*Tags:* `objects`

#### Input Parameters
* `bucket` - _required_ - Name of the bucket in which to look for objects.
* `delimiter` - _optional_ - Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
* `includeTrailingDelimiter` - _optional_ - If true, objects that end in exactly one instance of delimiter will have their metadata included in items in addition to prefixes.
* `maxResults` - _optional_ - Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller.
* `pageToken` - _optional_ - A previously-returned page token representing part of the larger set of results to view.
* `prefix` - _optional_ - Filter results to objects whose names begin with this prefix.
* `projection` - _optional_ - Set of properties to return. Defaults to noAcl.
    Possible values: full, noAcl.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `versions` - _optional_ - If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning.

### Stores a new object and metadata.

*Tags:* `objects`

#### Input Parameters
* `bucket` - _required_ - Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
* `contentEncoding` - _optional_ - If set, sets the contentEncoding property of the final object to this value. Setting this parameter is equivalent to setting the contentEncoding metadata property. This can be useful when uploading an object with uploadType=media to indicate the encoding of the content being uploaded.
* `ifGenerationMatch` - _optional_ - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
* `ifGenerationNotMatch` - _optional_ - Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
* `ifMetagenerationMatch` - _optional_ - Makes the operation conditional on whether the object's current metageneration matches the given value.
* `ifMetagenerationNotMatch` - _optional_ - Makes the operation conditional on whether the object's current metageneration does not match the given value.
* `kmsKeyName` - _optional_ - Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
* `name` - _optional_ - Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* `predefinedAcl` - _optional_ - Apply a predefined set of access controls to this object.
    Possible values: authenticatedRead, bucketOwnerFullControl, bucketOwnerRead, private, projectPrivate, publicRead.
* `projection` - _optional_ - Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
    Possible values: full, noAcl.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.

### Watch for changes on all objects in a bucket.

*Tags:* `objects`

#### Input Parameters
* `bucket` - _required_ - Name of the bucket in which to look for objects.
* `delimiter` - _optional_ - Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
* `includeTrailingDelimiter` - _optional_ - If true, objects that end in exactly one instance of delimiter will have their metadata included in items in addition to prefixes.
* `maxResults` - _optional_ - Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller.
* `pageToken` - _optional_ - A previously-returned page token representing part of the larger set of results to view.
* `prefix` - _optional_ - Filter results to objects whose names begin with this prefix.
* `projection` - _optional_ - Set of properties to return. Defaults to noAcl.
    Possible values: full, noAcl.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `versions` - _optional_ - If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning.

### Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.

*Tags:* `objects`

#### Input Parameters
* `bucket` - _required_ - Name of the bucket in which the object resides.
* `generation` - _optional_ - If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default).
* `ifGenerationMatch` - _optional_ - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
* `ifGenerationNotMatch` - _optional_ - Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
* `ifMetagenerationMatch` - _optional_ - Makes the operation conditional on whether the object's current metageneration matches the given value.
* `ifMetagenerationNotMatch` - _optional_ - Makes the operation conditional on whether the object's current metageneration does not match the given value.
* `object` - _required_ - Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.

### Retrieves an object or its metadata.

*Tags:* `objects`

#### Input Parameters
* `bucket` - _required_ - Name of the bucket in which the object resides.
* `generation` - _optional_ - If present, selects a specific revision of this object (as opposed to the latest version, the default).
* `ifGenerationMatch` - _optional_ - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
* `ifGenerationNotMatch` - _optional_ - Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
* `ifMetagenerationMatch` - _optional_ - Makes the operation conditional on whether the object's current metageneration matches the given value.
* `ifMetagenerationNotMatch` - _optional_ - Makes the operation conditional on whether the object's current metageneration does not match the given value.
* `object` - _required_ - Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* `projection` - _optional_ - Set of properties to return. Defaults to noAcl.
    Possible values: full, noAcl.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.

### Patches an object's metadata.

*Tags:* `objects`

#### Input Parameters
* `bucket` - _required_ - Name of the bucket in which the object resides.
* `generation` - _optional_ - If present, selects a specific revision of this object (as opposed to the latest version, the default).
* `ifGenerationMatch` - _optional_ - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
* `ifGenerationNotMatch` - _optional_ - Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
* `ifMetagenerationMatch` - _optional_ - Makes the operation conditional on whether the object's current metageneration matches the given value.
* `ifMetagenerationNotMatch` - _optional_ - Makes the operation conditional on whether the object's current metageneration does not match the given value.
* `object` - _required_ - Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* `predefinedAcl` - _optional_ - Apply a predefined set of access controls to this object.
    Possible values: authenticatedRead, bucketOwnerFullControl, bucketOwnerRead, private, projectPrivate, publicRead.
* `projection` - _optional_ - Set of properties to return. Defaults to full.
    Possible values: full, noAcl.
* `userProject` - _optional_ - The project to be billed for this request, for Requester Pays buckets.

### Updates an object's metadata.

*Tags:* `objects`

#### Input Parameters
* `bucket` - _required_ - Name of the bucket in which the object resides.
* `generation` - _optional_ - If present, selects a specific revision of this object (as opposed to the latest version, the default).
* `ifGenerationMatch` - _optional_ - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
* `ifGenerationNotMatch` - _optional_ - Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
* `ifMetagenerationMatch` - _optional_ - Makes the operation conditional on whether the object's current metageneration matches the given value.
* `ifMetagenerationNotMatch` - _optional_ - Makes the operation conditional on whether the object's current metageneration does not match the given value.
* `object` - _required_ - Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* `predefinedAcl` - _optional_ - Apply a predefined set of access controls to this object.
    Possible values: authenticatedRead, bucketOwnerFullControl, bucketOwnerRead, private, projectPrivate, publicRead.
* `projection` - _optional_ - Set of properties to return. Defaults to full.
    Possible values: full, noAcl.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.

### Retrieves ACL entries on the specified object.

*Tags:* `objectAccessControls`

#### Input Parameters
* `bucket` - _required_ - Name of a bucket.
* `generation` - _optional_ - If present, selects a specific revision of this object (as opposed to the latest version, the default).
* `object` - _required_ - Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Creates a new ACL entry on the specified object.

*Tags:* `objectAccessControls`

#### Input Parameters
* `bucket` - _required_ - Name of a bucket.
* `generation` - _optional_ - If present, selects a specific revision of this object (as opposed to the latest version, the default).
* `object` - _required_ - Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Permanently deletes the ACL entry for the specified entity on the specified object.

*Tags:* `objectAccessControls`

#### Input Parameters
* `bucket` - _required_ - Name of a bucket.
* `entity` - _required_ - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
* `generation` - _optional_ - If present, selects a specific revision of this object (as opposed to the latest version, the default).
* `object` - _required_ - Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns the ACL entry for the specified entity on the specified object.

*Tags:* `objectAccessControls`

#### Input Parameters
* `bucket` - _required_ - Name of a bucket.
* `entity` - _required_ - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
* `generation` - _optional_ - If present, selects a specific revision of this object (as opposed to the latest version, the default).
* `object` - _required_ - Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Patches an ACL entry on the specified object.

*Tags:* `objectAccessControls`

#### Input Parameters
* `bucket` - _required_ - Name of a bucket.
* `entity` - _required_ - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
* `generation` - _optional_ - If present, selects a specific revision of this object (as opposed to the latest version, the default).
* `object` - _required_ - Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an ACL entry on the specified object.

*Tags:* `objectAccessControls`

#### Input Parameters
* `bucket` - _required_ - Name of a bucket.
* `entity` - _required_ - The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
* `generation` - _optional_ - If present, selects a specific revision of this object (as opposed to the latest version, the default).
* `object` - _required_ - Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns an IAM policy for the specified object.

*Tags:* `objects`

#### Input Parameters
* `bucket` - _required_ - Name of the bucket in which the object resides.
* `generation` - _optional_ - If present, selects a specific revision of this object (as opposed to the latest version, the default).
* `object` - _required_ - Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an IAM policy for the specified object.

*Tags:* `objects`

#### Input Parameters
* `bucket` - _required_ - Name of the bucket in which the object resides.
* `generation` - _optional_ - If present, selects a specific revision of this object (as opposed to the latest version, the default).
* `object` - _required_ - Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Tests a set of permissions on the given object to see which, if any, are held by the caller.

*Tags:* `objects`

#### Input Parameters
* `bucket` - _required_ - Name of the bucket in which the object resides.
* `generation` - _optional_ - If present, selects a specific revision of this object (as opposed to the latest version, the default).
* `object` - _required_ - Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* `permissions` - _required_ - Permissions to test.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Concatenates a list of existing objects into a new object in the same bucket.

*Tags:* `objects`

#### Input Parameters
* `destinationBucket` - _required_ - Name of the bucket containing the source objects. The destination object is stored in this bucket.
* `destinationObject` - _required_ - Name of the new object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* `destinationPredefinedAcl` - _optional_ - Apply a predefined set of access controls to the destination object.
    Possible values: authenticatedRead, bucketOwnerFullControl, bucketOwnerRead, private, projectPrivate, publicRead.
* `ifGenerationMatch` - _optional_ - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
* `ifMetagenerationMatch` - _optional_ - Makes the operation conditional on whether the object's current metageneration matches the given value.
* `kmsKeyName` - _optional_ - Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.

### Copies a source object to a destination object. Optionally overrides metadata.

*Tags:* `objects`

#### Input Parameters
* `destinationBucket` - _required_ - Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* `destinationObject` - _required_ - Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
* `destinationPredefinedAcl` - _optional_ - Apply a predefined set of access controls to the destination object.
    Possible values: authenticatedRead, bucketOwnerFullControl, bucketOwnerRead, private, projectPrivate, publicRead.
* `ifGenerationMatch` - _optional_ - Makes the operation conditional on whether the destination object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
* `ifGenerationNotMatch` - _optional_ - Makes the operation conditional on whether the destination object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
* `ifMetagenerationMatch` - _optional_ - Makes the operation conditional on whether the destination object's current metageneration matches the given value.
* `ifMetagenerationNotMatch` - _optional_ - Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
* `ifSourceGenerationMatch` - _optional_ - Makes the operation conditional on whether the source object's current generation matches the given value.
* `ifSourceGenerationNotMatch` - _optional_ - Makes the operation conditional on whether the source object's current generation does not match the given value.
* `ifSourceMetagenerationMatch` - _optional_ - Makes the operation conditional on whether the source object's current metageneration matches the given value.
* `ifSourceMetagenerationNotMatch` - _optional_ - Makes the operation conditional on whether the source object's current metageneration does not match the given value.
* `projection` - _optional_ - Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
    Possible values: full, noAcl.
* `sourceBucket` - _required_ - Name of the bucket in which to find the source object.
* `sourceGeneration` - _optional_ - If present, selects a specific revision of the source object (as opposed to the latest version, the default).
* `sourceObject` - _required_ - Name of the source object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.

### Rewrites a source object to a destination object. Optionally overrides metadata.

*Tags:* `objects`

#### Input Parameters
* `destinationBucket` - _required_ - Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
* `destinationKmsKeyName` - _optional_ - Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
* `destinationObject` - _required_ - Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* `destinationPredefinedAcl` - _optional_ - Apply a predefined set of access controls to the destination object.
    Possible values: authenticatedRead, bucketOwnerFullControl, bucketOwnerRead, private, projectPrivate, publicRead.
* `ifGenerationMatch` - _optional_ - Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
* `ifGenerationNotMatch` - _optional_ - Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
* `ifMetagenerationMatch` - _optional_ - Makes the operation conditional on whether the destination object's current metageneration matches the given value.
* `ifMetagenerationNotMatch` - _optional_ - Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
* `ifSourceGenerationMatch` - _optional_ - Makes the operation conditional on whether the source object's current generation matches the given value.
* `ifSourceGenerationNotMatch` - _optional_ - Makes the operation conditional on whether the source object's current generation does not match the given value.
* `ifSourceMetagenerationMatch` - _optional_ - Makes the operation conditional on whether the source object's current metageneration matches the given value.
* `ifSourceMetagenerationNotMatch` - _optional_ - Makes the operation conditional on whether the source object's current metageneration does not match the given value.
* `maxBytesRewrittenPerCall` - _optional_ - The maximum number of bytes that will be rewritten per rewrite request. Most callers shouldn't need to specify this parameter - it is primarily in place to support testing. If specified the value must be an integral multiple of 1 MiB (1048576). Also, this only applies to requests where the source and destination span locations and/or storage classes. Finally, this value must not change across rewrite calls else you'll get an error that the rewriteToken is invalid.
* `projection` - _optional_ - Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
    Possible values: full, noAcl.
* `rewriteToken` - _optional_ - Include this field (from the previous rewrite response) on each rewrite request after the first one, until the rewrite response 'done' flag is true. Calls that provide a rewriteToken can omit all other request fields, but if included those fields must match the values provided in the first rewrite request.
* `sourceBucket` - _required_ - Name of the bucket in which to find the source object.
* `sourceGeneration` - _optional_ - If present, selects a specific revision of the source object (as opposed to the latest version, the default).
* `sourceObject` - _required_ - Name of the source object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
* `userProject` - _optional_ - The project to be billed for this request. Required for Requester Pays buckets.

### Stop watching resources through this channel

*Tags:* `channels`

#### Input Parameters
* `alt` - _optional_ - Data format for the response.
    Possible values: json.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Get the email address of this project's Google Cloud Storage service account.

*Tags:* `projects`

#### Input Parameters
* `projectId` - _required_ - Project ID
* `userProject` - _optional_ - The project to be billed for this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

## License

**flow**ground :- Telekom iPaaS / googleapis-com-storage-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
