/* eslint-disable */
import type { DocumentTypeDecoration } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
	[_ in K]?: never;
};
export type Incremental<T> =
	| T
	| { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	/** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
	Date: { input: unknown; output: unknown };
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
	DateTime: { input: unknown; output: unknown };
	Hex: { input: unknown; output: unknown };
	/** Raw JSON value */
	Json: { input: unknown; output: unknown };
	/** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
	Long: { input: unknown; output: unknown };
	RGBAHue: { input: unknown; output: unknown };
	RGBATransparency: { input: unknown; output: unknown };
	/** Slate-compatible RichText AST */
	RichTextAST: { input: unknown; output: unknown };
};

export type AssetConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: AssetWhereUniqueInput;
};

export type AssetCreateInput = {
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	fileName: Scalars["String"]["input"];
	handle: Scalars["String"]["input"];
	height?: InputMaybe<Scalars["Float"]["input"]>;
	imageCategory?: InputMaybe<CategoryCreateManyInlineInput>;
	imageCollection?: InputMaybe<CollectionCreateManyInlineInput>;
	/** Inline mutations for managing document localizations excluding the default locale */
	localizations?: InputMaybe<AssetCreateLocalizationsInput>;
	mimeType?: InputMaybe<Scalars["String"]["input"]>;
	productImages?: InputMaybe<ProductCreateManyInlineInput>;
	size?: InputMaybe<Scalars["Float"]["input"]>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssetCreateLocalizationDataInput = {
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	fileName: Scalars["String"]["input"];
	handle: Scalars["String"]["input"];
	height?: InputMaybe<Scalars["Float"]["input"]>;
	mimeType?: InputMaybe<Scalars["String"]["input"]>;
	size?: InputMaybe<Scalars["Float"]["input"]>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssetCreateLocalizationInput = {
	/** Localization input */
	data: AssetCreateLocalizationDataInput;
	locale: Locale;
};

export type AssetCreateLocalizationsInput = {
	/** Create localizations for the newly-created document */
	create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
	/** Connect multiple existing Asset documents */
	connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
	/** Create and connect multiple existing Asset documents */
	create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
	/** Connect one existing Asset document */
	connect?: InputMaybe<AssetWhereUniqueInput>;
	/** Create and connect one Asset document */
	create?: InputMaybe<AssetCreateInput>;
};

/** Identifies documents */
export type AssetManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<AssetWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<AssetWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<AssetWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<AssetWhereStageInput>;
	documentInStages_none?: InputMaybe<AssetWhereStageInput>;
	documentInStages_some?: InputMaybe<AssetWhereStageInput>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	imageCategory_every?: InputMaybe<CategoryWhereInput>;
	imageCategory_none?: InputMaybe<CategoryWhereInput>;
	imageCategory_some?: InputMaybe<CategoryWhereInput>;
	imageCollection_every?: InputMaybe<CollectionWhereInput>;
	imageCollection_none?: InputMaybe<CollectionWhereInput>;
	imageCollection_some?: InputMaybe<CollectionWhereInput>;
	productImages_every?: InputMaybe<ProductWhereInput>;
	productImages_none?: InputMaybe<ProductWhereInput>;
	productImages_some?: InputMaybe<ProductWhereInput>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export type AssetOrderByInput =
	| "createdAt_ASC"
	| "createdAt_DESC"
	| "fileName_ASC"
	| "fileName_DESC"
	| "handle_ASC"
	| "handle_DESC"
	| "height_ASC"
	| "height_DESC"
	| "id_ASC"
	| "id_DESC"
	| "mimeType_ASC"
	| "mimeType_DESC"
	| "publishedAt_ASC"
	| "publishedAt_DESC"
	| "size_ASC"
	| "size_DESC"
	| "updatedAt_ASC"
	| "updatedAt_DESC"
	| "width_ASC"
	| "width_DESC";

/** Transformations for Assets */
export type AssetTransformationInput = {
	document?: InputMaybe<DocumentTransformationInput>;
	image?: InputMaybe<ImageTransformationInput>;
	/** Pass true if you want to validate the passed transformation parameters */
	validateOptions?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AssetUpdateInput = {
	fileName?: InputMaybe<Scalars["String"]["input"]>;
	handle?: InputMaybe<Scalars["String"]["input"]>;
	height?: InputMaybe<Scalars["Float"]["input"]>;
	imageCategory?: InputMaybe<CategoryUpdateManyInlineInput>;
	imageCollection?: InputMaybe<CollectionUpdateManyInlineInput>;
	/** Manage document localizations */
	localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
	mimeType?: InputMaybe<Scalars["String"]["input"]>;
	productImages?: InputMaybe<ProductUpdateManyInlineInput>;
	size?: InputMaybe<Scalars["Float"]["input"]>;
	width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssetUpdateLocalizationDataInput = {
	fileName?: InputMaybe<Scalars["String"]["input"]>;
	handle?: InputMaybe<Scalars["String"]["input"]>;
	height?: InputMaybe<Scalars["Float"]["input"]>;
	mimeType?: InputMaybe<Scalars["String"]["input"]>;
	size?: InputMaybe<Scalars["Float"]["input"]>;
	width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssetUpdateLocalizationInput = {
	data: AssetUpdateLocalizationDataInput;
	locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
	/** Localizations to create */
	create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
	/** Localizations to delete */
	delete?: InputMaybe<Array<Locale>>;
	/** Localizations to update */
	update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
	upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
	/** Connect multiple existing Asset documents */
	connect?: InputMaybe<Array<AssetConnectInput>>;
	/** Create and connect multiple Asset documents */
	create?: InputMaybe<Array<AssetCreateInput>>;
	/** Delete multiple Asset documents */
	delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
	/** Disconnect multiple Asset documents */
	disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing Asset documents */
	set?: InputMaybe<Array<AssetWhereUniqueInput>>;
	/** Update multiple Asset documents */
	update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple Asset documents */
	upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
	fileName?: InputMaybe<Scalars["String"]["input"]>;
	height?: InputMaybe<Scalars["Float"]["input"]>;
	/** Optional updates to localizations */
	localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
	mimeType?: InputMaybe<Scalars["String"]["input"]>;
	size?: InputMaybe<Scalars["Float"]["input"]>;
	width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssetUpdateManyLocalizationDataInput = {
	fileName?: InputMaybe<Scalars["String"]["input"]>;
	height?: InputMaybe<Scalars["Float"]["input"]>;
	mimeType?: InputMaybe<Scalars["String"]["input"]>;
	size?: InputMaybe<Scalars["Float"]["input"]>;
	width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssetUpdateManyLocalizationInput = {
	data: AssetUpdateManyLocalizationDataInput;
	locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
	/** Localizations to update */
	update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: AssetUpdateManyInput;
	/** Document search */
	where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
	/** Connect existing Asset document */
	connect?: InputMaybe<AssetWhereUniqueInput>;
	/** Create and connect one Asset document */
	create?: InputMaybe<AssetCreateInput>;
	/** Delete currently connected Asset document */
	delete?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Disconnect currently connected Asset document */
	disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Update single Asset document */
	update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Asset document */
	upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: AssetUpdateInput;
	/** Unique document search */
	where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
	/** Create document if it didn't exist */
	create: AssetCreateInput;
	/** Update document if it exists */
	update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
	create: AssetCreateLocalizationDataInput;
	locale: Locale;
	update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: AssetUpsertInput;
	/** Unique document search */
	where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type AssetWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<AssetWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<AssetWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<AssetWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<AssetWhereStageInput>;
	documentInStages_none?: InputMaybe<AssetWhereStageInput>;
	documentInStages_some?: InputMaybe<AssetWhereStageInput>;
	fileName?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	fileName_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	fileName_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	fileName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	fileName_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	fileName_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	fileName_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	fileName_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	fileName_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	handle?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	handle_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	handle_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	handle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	handle_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	handle_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	handle_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	handle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	handle_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	handle_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	height?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values greater than the given value. */
	height_gt?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values greater than or equal the given value. */
	height_gte?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values that are contained in given list. */
	height_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
	/** All values less than the given value. */
	height_lt?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values less than or equal the given value. */
	height_lte?: InputMaybe<Scalars["Float"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	height_not?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values that are not contained in given list. */
	height_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	imageCategory_every?: InputMaybe<CategoryWhereInput>;
	imageCategory_none?: InputMaybe<CategoryWhereInput>;
	imageCategory_some?: InputMaybe<CategoryWhereInput>;
	imageCollection_every?: InputMaybe<CollectionWhereInput>;
	imageCollection_none?: InputMaybe<CollectionWhereInput>;
	imageCollection_some?: InputMaybe<CollectionWhereInput>;
	mimeType?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	mimeType_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	mimeType_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	mimeType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	mimeType_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	mimeType_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	mimeType_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	mimeType_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	mimeType_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	productImages_every?: InputMaybe<ProductWhereInput>;
	productImages_none?: InputMaybe<ProductWhereInput>;
	productImages_some?: InputMaybe<ProductWhereInput>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	size?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values greater than the given value. */
	size_gt?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values greater than or equal the given value. */
	size_gte?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values that are contained in given list. */
	size_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
	/** All values less than the given value. */
	size_lt?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values less than or equal the given value. */
	size_lte?: InputMaybe<Scalars["Float"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	size_not?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values that are not contained in given list. */
	size_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
	width?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values greater than the given value. */
	width_gt?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values greater than or equal the given value. */
	width_gte?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values that are contained in given list. */
	width_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
	/** All values less than the given value. */
	width_lt?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values less than or equal the given value. */
	width_lte?: InputMaybe<Scalars["Float"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	width_not?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values that are not contained in given list. */
	width_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<AssetWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<AssetWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<AssetWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type CategoryConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: CategoryWhereUniqueInput;
};

export type CategoryCreateInput = {
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** description input for default locale (en) */
	description?: InputMaybe<Scalars["String"]["input"]>;
	image: AssetCreateOneInlineInput;
	/** Inline mutations for managing document localizations excluding the default locale */
	localizations?: InputMaybe<CategoryCreateLocalizationsInput>;
	/** name input for default locale (en) */
	name: Scalars["String"]["input"];
	products?: InputMaybe<ProductCreateManyInlineInput>;
	slug: Scalars["String"]["input"];
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CategoryCreateLocalizationDataInput = {
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	name: Scalars["String"]["input"];
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CategoryCreateLocalizationInput = {
	/** Localization input */
	data: CategoryCreateLocalizationDataInput;
	locale: Locale;
};

export type CategoryCreateLocalizationsInput = {
	/** Create localizations for the newly-created document */
	create?: InputMaybe<Array<CategoryCreateLocalizationInput>>;
};

export type CategoryCreateManyInlineInput = {
	/** Connect multiple existing Category documents */
	connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
	/** Create and connect multiple existing Category documents */
	create?: InputMaybe<Array<CategoryCreateInput>>;
};

export type CategoryCreateOneInlineInput = {
	/** Connect one existing Category document */
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	/** Create and connect one Category document */
	create?: InputMaybe<CategoryCreateInput>;
};

/** Identifies documents */
export type CategoryManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<CategoryWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<CategoryWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<CategoryWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<CategoryWhereStageInput>;
	documentInStages_none?: InputMaybe<CategoryWhereStageInput>;
	documentInStages_some?: InputMaybe<CategoryWhereStageInput>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	image?: InputMaybe<AssetWhereInput>;
	products_every?: InputMaybe<ProductWhereInput>;
	products_none?: InputMaybe<ProductWhereInput>;
	products_some?: InputMaybe<ProductWhereInput>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	slug_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	slug_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	slug_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	slug_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	slug_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	slug_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export type CategoryOrderByInput =
	| "createdAt_ASC"
	| "createdAt_DESC"
	| "description_ASC"
	| "description_DESC"
	| "id_ASC"
	| "id_DESC"
	| "name_ASC"
	| "name_DESC"
	| "publishedAt_ASC"
	| "publishedAt_DESC"
	| "slug_ASC"
	| "slug_DESC"
	| "updatedAt_ASC"
	| "updatedAt_DESC";

export type CategoryUpdateInput = {
	/** description input for default locale (en) */
	description?: InputMaybe<Scalars["String"]["input"]>;
	image?: InputMaybe<AssetUpdateOneInlineInput>;
	/** Manage document localizations */
	localizations?: InputMaybe<CategoryUpdateLocalizationsInput>;
	/** name input for default locale (en) */
	name?: InputMaybe<Scalars["String"]["input"]>;
	products?: InputMaybe<ProductUpdateManyInlineInput>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type CategoryUpdateLocalizationDataInput = {
	description?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
};

export type CategoryUpdateLocalizationInput = {
	data: CategoryUpdateLocalizationDataInput;
	locale: Locale;
};

export type CategoryUpdateLocalizationsInput = {
	/** Localizations to create */
	create?: InputMaybe<Array<CategoryCreateLocalizationInput>>;
	/** Localizations to delete */
	delete?: InputMaybe<Array<Locale>>;
	/** Localizations to update */
	update?: InputMaybe<Array<CategoryUpdateLocalizationInput>>;
	upsert?: InputMaybe<Array<CategoryUpsertLocalizationInput>>;
};

export type CategoryUpdateManyInlineInput = {
	/** Connect multiple existing Category documents */
	connect?: InputMaybe<Array<CategoryConnectInput>>;
	/** Create and connect multiple Category documents */
	create?: InputMaybe<Array<CategoryCreateInput>>;
	/** Delete multiple Category documents */
	delete?: InputMaybe<Array<CategoryWhereUniqueInput>>;
	/** Disconnect multiple Category documents */
	disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing Category documents */
	set?: InputMaybe<Array<CategoryWhereUniqueInput>>;
	/** Update multiple Category documents */
	update?: InputMaybe<Array<CategoryUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple Category documents */
	upsert?: InputMaybe<Array<CategoryUpsertWithNestedWhereUniqueInput>>;
};

export type CategoryUpdateManyInput = {
	/** description input for default locale (en) */
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** Optional updates to localizations */
	localizations?: InputMaybe<CategoryUpdateManyLocalizationsInput>;
};

export type CategoryUpdateManyLocalizationDataInput = {
	description?: InputMaybe<Scalars["String"]["input"]>;
};

export type CategoryUpdateManyLocalizationInput = {
	data: CategoryUpdateManyLocalizationDataInput;
	locale: Locale;
};

export type CategoryUpdateManyLocalizationsInput = {
	/** Localizations to update */
	update?: InputMaybe<Array<CategoryUpdateManyLocalizationInput>>;
};

export type CategoryUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: CategoryUpdateManyInput;
	/** Document search */
	where: CategoryWhereInput;
};

export type CategoryUpdateOneInlineInput = {
	/** Connect existing Category document */
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	/** Create and connect one Category document */
	create?: InputMaybe<CategoryCreateInput>;
	/** Delete currently connected Category document */
	delete?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Disconnect currently connected Category document */
	disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Update single Category document */
	update?: InputMaybe<CategoryUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Category document */
	upsert?: InputMaybe<CategoryUpsertWithNestedWhereUniqueInput>;
};

export type CategoryUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: CategoryUpdateInput;
	/** Unique document search */
	where: CategoryWhereUniqueInput;
};

export type CategoryUpsertInput = {
	/** Create document if it didn't exist */
	create: CategoryCreateInput;
	/** Update document if it exists */
	update: CategoryUpdateInput;
};

export type CategoryUpsertLocalizationInput = {
	create: CategoryCreateLocalizationDataInput;
	locale: Locale;
	update: CategoryUpdateLocalizationDataInput;
};

export type CategoryUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: CategoryUpsertInput;
	/** Unique document search */
	where: CategoryWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CategoryWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type CategoryWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<CategoryWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<CategoryWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<CategoryWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	documentInStages_every?: InputMaybe<CategoryWhereStageInput>;
	documentInStages_none?: InputMaybe<CategoryWhereStageInput>;
	documentInStages_some?: InputMaybe<CategoryWhereStageInput>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	image?: InputMaybe<AssetWhereInput>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	name_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	products_every?: InputMaybe<ProductWhereInput>;
	products_none?: InputMaybe<ProductWhereInput>;
	products_some?: InputMaybe<ProductWhereInput>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	slug_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	slug_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	slug_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	slug_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	slug_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	slug_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CategoryWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<CategoryWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<CategoryWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<CategoryWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<CategoryWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References Category record uniquely */
export type CategoryWhereUniqueInput = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type CollectionConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: CollectionWhereUniqueInput;
};

export type CollectionCreateInput = {
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** description input for default locale (en) */
	description?: InputMaybe<Scalars["String"]["input"]>;
	image: AssetCreateOneInlineInput;
	/** Inline mutations for managing document localizations excluding the default locale */
	localizations?: InputMaybe<CollectionCreateLocalizationsInput>;
	/** name input for default locale (en) */
	name: Scalars["String"]["input"];
	products?: InputMaybe<ProductCreateManyInlineInput>;
	slug: Scalars["String"]["input"];
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CollectionCreateLocalizationDataInput = {
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	name: Scalars["String"]["input"];
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CollectionCreateLocalizationInput = {
	/** Localization input */
	data: CollectionCreateLocalizationDataInput;
	locale: Locale;
};

export type CollectionCreateLocalizationsInput = {
	/** Create localizations for the newly-created document */
	create?: InputMaybe<Array<CollectionCreateLocalizationInput>>;
};

export type CollectionCreateManyInlineInput = {
	/** Connect multiple existing Collection documents */
	connect?: InputMaybe<Array<CollectionWhereUniqueInput>>;
	/** Create and connect multiple existing Collection documents */
	create?: InputMaybe<Array<CollectionCreateInput>>;
};

export type CollectionCreateOneInlineInput = {
	/** Connect one existing Collection document */
	connect?: InputMaybe<CollectionWhereUniqueInput>;
	/** Create and connect one Collection document */
	create?: InputMaybe<CollectionCreateInput>;
};

/** Identifies documents */
export type CollectionManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<CollectionWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<CollectionWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<CollectionWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<CollectionWhereStageInput>;
	documentInStages_none?: InputMaybe<CollectionWhereStageInput>;
	documentInStages_some?: InputMaybe<CollectionWhereStageInput>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	image?: InputMaybe<AssetWhereInput>;
	products_every?: InputMaybe<ProductWhereInput>;
	products_none?: InputMaybe<ProductWhereInput>;
	products_some?: InputMaybe<ProductWhereInput>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	slug_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	slug_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	slug_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	slug_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	slug_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	slug_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export type CollectionOrderByInput =
	| "createdAt_ASC"
	| "createdAt_DESC"
	| "description_ASC"
	| "description_DESC"
	| "id_ASC"
	| "id_DESC"
	| "name_ASC"
	| "name_DESC"
	| "publishedAt_ASC"
	| "publishedAt_DESC"
	| "slug_ASC"
	| "slug_DESC"
	| "updatedAt_ASC"
	| "updatedAt_DESC";

export type CollectionUpdateInput = {
	/** description input for default locale (en) */
	description?: InputMaybe<Scalars["String"]["input"]>;
	image?: InputMaybe<AssetUpdateOneInlineInput>;
	/** Manage document localizations */
	localizations?: InputMaybe<CollectionUpdateLocalizationsInput>;
	/** name input for default locale (en) */
	name?: InputMaybe<Scalars["String"]["input"]>;
	products?: InputMaybe<ProductUpdateManyInlineInput>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type CollectionUpdateLocalizationDataInput = {
	description?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
};

export type CollectionUpdateLocalizationInput = {
	data: CollectionUpdateLocalizationDataInput;
	locale: Locale;
};

export type CollectionUpdateLocalizationsInput = {
	/** Localizations to create */
	create?: InputMaybe<Array<CollectionCreateLocalizationInput>>;
	/** Localizations to delete */
	delete?: InputMaybe<Array<Locale>>;
	/** Localizations to update */
	update?: InputMaybe<Array<CollectionUpdateLocalizationInput>>;
	upsert?: InputMaybe<Array<CollectionUpsertLocalizationInput>>;
};

export type CollectionUpdateManyInlineInput = {
	/** Connect multiple existing Collection documents */
	connect?: InputMaybe<Array<CollectionConnectInput>>;
	/** Create and connect multiple Collection documents */
	create?: InputMaybe<Array<CollectionCreateInput>>;
	/** Delete multiple Collection documents */
	delete?: InputMaybe<Array<CollectionWhereUniqueInput>>;
	/** Disconnect multiple Collection documents */
	disconnect?: InputMaybe<Array<CollectionWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing Collection documents */
	set?: InputMaybe<Array<CollectionWhereUniqueInput>>;
	/** Update multiple Collection documents */
	update?: InputMaybe<Array<CollectionUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple Collection documents */
	upsert?: InputMaybe<Array<CollectionUpsertWithNestedWhereUniqueInput>>;
};

export type CollectionUpdateManyInput = {
	/** description input for default locale (en) */
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** Optional updates to localizations */
	localizations?: InputMaybe<CollectionUpdateManyLocalizationsInput>;
};

export type CollectionUpdateManyLocalizationDataInput = {
	description?: InputMaybe<Scalars["String"]["input"]>;
};

export type CollectionUpdateManyLocalizationInput = {
	data: CollectionUpdateManyLocalizationDataInput;
	locale: Locale;
};

export type CollectionUpdateManyLocalizationsInput = {
	/** Localizations to update */
	update?: InputMaybe<Array<CollectionUpdateManyLocalizationInput>>;
};

export type CollectionUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: CollectionUpdateManyInput;
	/** Document search */
	where: CollectionWhereInput;
};

export type CollectionUpdateOneInlineInput = {
	/** Connect existing Collection document */
	connect?: InputMaybe<CollectionWhereUniqueInput>;
	/** Create and connect one Collection document */
	create?: InputMaybe<CollectionCreateInput>;
	/** Delete currently connected Collection document */
	delete?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Disconnect currently connected Collection document */
	disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Update single Collection document */
	update?: InputMaybe<CollectionUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Collection document */
	upsert?: InputMaybe<CollectionUpsertWithNestedWhereUniqueInput>;
};

export type CollectionUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: CollectionUpdateInput;
	/** Unique document search */
	where: CollectionWhereUniqueInput;
};

export type CollectionUpsertInput = {
	/** Create document if it didn't exist */
	create: CollectionCreateInput;
	/** Update document if it exists */
	update: CollectionUpdateInput;
};

export type CollectionUpsertLocalizationInput = {
	create: CollectionCreateLocalizationDataInput;
	locale: Locale;
	update: CollectionUpdateLocalizationDataInput;
};

export type CollectionUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: CollectionUpsertInput;
	/** Unique document search */
	where: CollectionWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CollectionWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type CollectionWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<CollectionWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<CollectionWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<CollectionWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	documentInStages_every?: InputMaybe<CollectionWhereStageInput>;
	documentInStages_none?: InputMaybe<CollectionWhereStageInput>;
	documentInStages_some?: InputMaybe<CollectionWhereStageInput>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	image?: InputMaybe<AssetWhereInput>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	name_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	products_every?: InputMaybe<ProductWhereInput>;
	products_none?: InputMaybe<ProductWhereInput>;
	products_some?: InputMaybe<ProductWhereInput>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	slug_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	slug_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	slug_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	slug_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	slug_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	slug_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CollectionWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<CollectionWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<CollectionWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<CollectionWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<CollectionWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References Collection record uniquely */
export type CollectionWhereUniqueInput = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
	hex?: InputMaybe<Scalars["Hex"]["input"]>;
	rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
	/** Connect document after specified document */
	after?: InputMaybe<Scalars["ID"]["input"]>;
	/** Connect document before specified document */
	before?: InputMaybe<Scalars["ID"]["input"]>;
	/** Connect document at last position */
	end?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Connect document at first position */
	start?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CurrencyConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: CurrencyWhereUniqueInput;
};

export type CurrencyCreateInput = {
	code: Scalars["String"]["input"];
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	default: Scalars["Boolean"]["input"];
	rate: Scalars["Float"]["input"];
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CurrencyCreateManyInlineInput = {
	/** Connect multiple existing Currency documents */
	connect?: InputMaybe<Array<CurrencyWhereUniqueInput>>;
	/** Create and connect multiple existing Currency documents */
	create?: InputMaybe<Array<CurrencyCreateInput>>;
};

export type CurrencyCreateOneInlineInput = {
	/** Connect one existing Currency document */
	connect?: InputMaybe<CurrencyWhereUniqueInput>;
	/** Create and connect one Currency document */
	create?: InputMaybe<CurrencyCreateInput>;
};

/** Identifies documents */
export type CurrencyManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<CurrencyWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<CurrencyWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<CurrencyWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars["String"]["input"]>;
	code?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	code_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	code_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	code_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	code_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	code_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	code_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	code_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	code_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	code_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	default?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	default_not?: InputMaybe<Scalars["Boolean"]["input"]>;
	documentInStages_every?: InputMaybe<CurrencyWhereStageInput>;
	documentInStages_none?: InputMaybe<CurrencyWhereStageInput>;
	documentInStages_some?: InputMaybe<CurrencyWhereStageInput>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	rate?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values greater than the given value. */
	rate_gt?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values greater than or equal the given value. */
	rate_gte?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values that are contained in given list. */
	rate_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
	/** All values less than the given value. */
	rate_lt?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values less than or equal the given value. */
	rate_lte?: InputMaybe<Scalars["Float"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	rate_not?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values that are not contained in given list. */
	rate_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export type CurrencyOrderByInput =
	| "code_ASC"
	| "code_DESC"
	| "createdAt_ASC"
	| "createdAt_DESC"
	| "default_ASC"
	| "default_DESC"
	| "id_ASC"
	| "id_DESC"
	| "publishedAt_ASC"
	| "publishedAt_DESC"
	| "rate_ASC"
	| "rate_DESC"
	| "updatedAt_ASC"
	| "updatedAt_DESC";

export type CurrencyUpdateInput = {
	code?: InputMaybe<Scalars["String"]["input"]>;
	default?: InputMaybe<Scalars["Boolean"]["input"]>;
	rate?: InputMaybe<Scalars["Float"]["input"]>;
};

export type CurrencyUpdateManyInlineInput = {
	/** Connect multiple existing Currency documents */
	connect?: InputMaybe<Array<CurrencyConnectInput>>;
	/** Create and connect multiple Currency documents */
	create?: InputMaybe<Array<CurrencyCreateInput>>;
	/** Delete multiple Currency documents */
	delete?: InputMaybe<Array<CurrencyWhereUniqueInput>>;
	/** Disconnect multiple Currency documents */
	disconnect?: InputMaybe<Array<CurrencyWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing Currency documents */
	set?: InputMaybe<Array<CurrencyWhereUniqueInput>>;
	/** Update multiple Currency documents */
	update?: InputMaybe<Array<CurrencyUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple Currency documents */
	upsert?: InputMaybe<Array<CurrencyUpsertWithNestedWhereUniqueInput>>;
};

export type CurrencyUpdateManyInput = {
	rate?: InputMaybe<Scalars["Float"]["input"]>;
};

export type CurrencyUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: CurrencyUpdateManyInput;
	/** Document search */
	where: CurrencyWhereInput;
};

export type CurrencyUpdateOneInlineInput = {
	/** Connect existing Currency document */
	connect?: InputMaybe<CurrencyWhereUniqueInput>;
	/** Create and connect one Currency document */
	create?: InputMaybe<CurrencyCreateInput>;
	/** Delete currently connected Currency document */
	delete?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Disconnect currently connected Currency document */
	disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Update single Currency document */
	update?: InputMaybe<CurrencyUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Currency document */
	upsert?: InputMaybe<CurrencyUpsertWithNestedWhereUniqueInput>;
};

export type CurrencyUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: CurrencyUpdateInput;
	/** Unique document search */
	where: CurrencyWhereUniqueInput;
};

export type CurrencyUpsertInput = {
	/** Create document if it didn't exist */
	create: CurrencyCreateInput;
	/** Update document if it exists */
	update: CurrencyUpdateInput;
};

export type CurrencyUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: CurrencyUpsertInput;
	/** Unique document search */
	where: CurrencyWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CurrencyWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type CurrencyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<CurrencyWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<CurrencyWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<CurrencyWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars["String"]["input"]>;
	code?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	code_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	code_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	code_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	code_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	code_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	code_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	code_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	code_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	code_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	default?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	default_not?: InputMaybe<Scalars["Boolean"]["input"]>;
	documentInStages_every?: InputMaybe<CurrencyWhereStageInput>;
	documentInStages_none?: InputMaybe<CurrencyWhereStageInput>;
	documentInStages_some?: InputMaybe<CurrencyWhereStageInput>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	rate?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values greater than the given value. */
	rate_gt?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values greater than or equal the given value. */
	rate_gte?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values that are contained in given list. */
	rate_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
	/** All values less than the given value. */
	rate_lt?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values less than or equal the given value. */
	rate_lte?: InputMaybe<Scalars["Float"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	rate_not?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values that are not contained in given list. */
	rate_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CurrencyWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<CurrencyWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<CurrencyWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<CurrencyWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<CurrencyWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References Currency record uniquely */
export type CurrencyWhereUniqueInput = {
	code?: InputMaybe<Scalars["String"]["input"]>;
	default?: InputMaybe<Scalars["Boolean"]["input"]>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type DocumentFileTypes =
	| "doc"
	| "docx"
	| "html"
	| "jpg"
	| "odp"
	| "ods"
	| "odt"
	| "pdf"
	| "png"
	| "ppt"
	| "pptx"
	| "svg"
	| "txt"
	| "webp"
	| "xls"
	| "xlsx";

export type DocumentOutputInput = {
	/**
	 * Transforms a document into a desired file type.
	 * See this matrix for format support:
	 *
	 * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
	 * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
	 * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
	 * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
	 * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
	 * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
	 * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
	 * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
	 * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
	 * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
	 * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
	 * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * SVG:	jpg, odp, ods, odt, pdf, png, and webp
	 * HTML:	jpg, odt, pdf, svg, txt, and webp
	 * TXT:	jpg, html, odt, pdf, svg, and webp
	 */
	format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
	/** Changes the output for the file. */
	output?: InputMaybe<DocumentOutputInput>;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export type EntityTypeName =
	/** Asset system model */
	| "Asset"
	/** Category of products, e.g. Menswear. */
	| "Category"
	/** Collection of products, e.g. Winter Sale. */
	| "Collection"
	| "Currency"
	| "Order"
	| "OrderItem"
	| "Product"
	| "ProductColorVariant"
	| "ProductSizeVariant"
	| "Review"
	/** Scheduled Operation system model */
	| "ScheduledOperation"
	/** Scheduled Release system model */
	| "ScheduledRelease"
	/** User system model */
	| "User";

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
	/** The ID of an object */
	id: Scalars["ID"]["input"];
	locale?: InputMaybe<Locale>;
	stage: Stage;
	/** The Type name of an object */
	typename: EntityTypeName;
};

export type ImageFit =
	/** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
	| "clip"
	/** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
	| "crop"
	/** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
	| "max"
	/** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
	| "scale";

export type ImageResizeInput = {
	/** The default value for the fit parameter is fit:clip. */
	fit?: InputMaybe<ImageFit>;
	/** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
	height?: InputMaybe<Scalars["Int"]["input"]>;
	/** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
	width?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
	/** Resizes the image */
	resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export type Locale =
	/** System locale */
	"en";

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
	latitude: Scalars["Float"]["input"];
	longitude: Scalars["Float"]["input"];
};

export type OrderConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: OrderWhereUniqueInput;
};

export type OrderCreateInput = {
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	email?: InputMaybe<Scalars["String"]["input"]>;
	orderItems?: InputMaybe<OrderItemCreateManyInlineInput>;
	stripeCheckoutId?: InputMaybe<Scalars["String"]["input"]>;
	total: Scalars["Int"]["input"];
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type OrderCreateManyInlineInput = {
	/** Connect multiple existing Order documents */
	connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
	/** Create and connect multiple existing Order documents */
	create?: InputMaybe<Array<OrderCreateInput>>;
};

export type OrderCreateOneInlineInput = {
	/** Connect one existing Order document */
	connect?: InputMaybe<OrderWhereUniqueInput>;
	/** Create and connect one Order document */
	create?: InputMaybe<OrderCreateInput>;
};

export type OrderItemConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: OrderItemWhereUniqueInput;
};

export type OrderItemCreateInput = {
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	order?: InputMaybe<OrderCreateOneInlineInput>;
	product?: InputMaybe<ProductCreateOneInlineInput>;
	quantity: Scalars["Int"]["input"];
	total: Scalars["Int"]["input"];
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type OrderItemCreateManyInlineInput = {
	/** Connect multiple existing OrderItem documents */
	connect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
	/** Create and connect multiple existing OrderItem documents */
	create?: InputMaybe<Array<OrderItemCreateInput>>;
};

export type OrderItemCreateOneInlineInput = {
	/** Connect one existing OrderItem document */
	connect?: InputMaybe<OrderItemWhereUniqueInput>;
	/** Create and connect one OrderItem document */
	create?: InputMaybe<OrderItemCreateInput>;
};

/** Identifies documents */
export type OrderItemManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<OrderItemWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<OrderItemWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<OrderItemWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<OrderItemWhereStageInput>;
	documentInStages_none?: InputMaybe<OrderItemWhereStageInput>;
	documentInStages_some?: InputMaybe<OrderItemWhereStageInput>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	order?: InputMaybe<OrderWhereInput>;
	product?: InputMaybe<ProductWhereInput>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	quantity?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values greater than the given value. */
	quantity_gt?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values greater than or equal the given value. */
	quantity_gte?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values that are contained in given list. */
	quantity_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	/** All values less than the given value. */
	quantity_lt?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values less than or equal the given value. */
	quantity_lte?: InputMaybe<Scalars["Int"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	quantity_not?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values that are not contained in given list. */
	quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	total?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values greater than the given value. */
	total_gt?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values greater than or equal the given value. */
	total_gte?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values that are contained in given list. */
	total_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	/** All values less than the given value. */
	total_lt?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values less than or equal the given value. */
	total_lte?: InputMaybe<Scalars["Int"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	total_not?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values that are not contained in given list. */
	total_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export type OrderItemOrderByInput =
	| "createdAt_ASC"
	| "createdAt_DESC"
	| "id_ASC"
	| "id_DESC"
	| "publishedAt_ASC"
	| "publishedAt_DESC"
	| "quantity_ASC"
	| "quantity_DESC"
	| "total_ASC"
	| "total_DESC"
	| "updatedAt_ASC"
	| "updatedAt_DESC";

export type OrderItemUpdateInput = {
	order?: InputMaybe<OrderUpdateOneInlineInput>;
	product?: InputMaybe<ProductUpdateOneInlineInput>;
	quantity?: InputMaybe<Scalars["Int"]["input"]>;
	total?: InputMaybe<Scalars["Int"]["input"]>;
};

export type OrderItemUpdateManyInlineInput = {
	/** Connect multiple existing OrderItem documents */
	connect?: InputMaybe<Array<OrderItemConnectInput>>;
	/** Create and connect multiple OrderItem documents */
	create?: InputMaybe<Array<OrderItemCreateInput>>;
	/** Delete multiple OrderItem documents */
	delete?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
	/** Disconnect multiple OrderItem documents */
	disconnect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing OrderItem documents */
	set?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
	/** Update multiple OrderItem documents */
	update?: InputMaybe<Array<OrderItemUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple OrderItem documents */
	upsert?: InputMaybe<Array<OrderItemUpsertWithNestedWhereUniqueInput>>;
};

export type OrderItemUpdateManyInput = {
	quantity?: InputMaybe<Scalars["Int"]["input"]>;
	total?: InputMaybe<Scalars["Int"]["input"]>;
};

export type OrderItemUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: OrderItemUpdateManyInput;
	/** Document search */
	where: OrderItemWhereInput;
};

export type OrderItemUpdateOneInlineInput = {
	/** Connect existing OrderItem document */
	connect?: InputMaybe<OrderItemWhereUniqueInput>;
	/** Create and connect one OrderItem document */
	create?: InputMaybe<OrderItemCreateInput>;
	/** Delete currently connected OrderItem document */
	delete?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Disconnect currently connected OrderItem document */
	disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Update single OrderItem document */
	update?: InputMaybe<OrderItemUpdateWithNestedWhereUniqueInput>;
	/** Upsert single OrderItem document */
	upsert?: InputMaybe<OrderItemUpsertWithNestedWhereUniqueInput>;
};

export type OrderItemUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: OrderItemUpdateInput;
	/** Unique document search */
	where: OrderItemWhereUniqueInput;
};

export type OrderItemUpsertInput = {
	/** Create document if it didn't exist */
	create: OrderItemCreateInput;
	/** Update document if it exists */
	update: OrderItemUpdateInput;
};

export type OrderItemUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: OrderItemUpsertInput;
	/** Unique document search */
	where: OrderItemWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type OrderItemWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type OrderItemWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<OrderItemWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<OrderItemWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<OrderItemWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<OrderItemWhereStageInput>;
	documentInStages_none?: InputMaybe<OrderItemWhereStageInput>;
	documentInStages_some?: InputMaybe<OrderItemWhereStageInput>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	order?: InputMaybe<OrderWhereInput>;
	product?: InputMaybe<ProductWhereInput>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	quantity?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values greater than the given value. */
	quantity_gt?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values greater than or equal the given value. */
	quantity_gte?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values that are contained in given list. */
	quantity_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	/** All values less than the given value. */
	quantity_lt?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values less than or equal the given value. */
	quantity_lte?: InputMaybe<Scalars["Int"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	quantity_not?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values that are not contained in given list. */
	quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	total?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values greater than the given value. */
	total_gt?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values greater than or equal the given value. */
	total_gte?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values that are contained in given list. */
	total_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	/** All values less than the given value. */
	total_lt?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values less than or equal the given value. */
	total_lte?: InputMaybe<Scalars["Int"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	total_not?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values that are not contained in given list. */
	total_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type OrderItemWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<OrderItemWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<OrderItemWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<OrderItemWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<OrderItemWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References OrderItem record uniquely */
export type OrderItemWhereUniqueInput = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Identifies documents */
export type OrderManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<OrderWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<OrderWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<OrderWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<OrderWhereStageInput>;
	documentInStages_none?: InputMaybe<OrderWhereStageInput>;
	documentInStages_some?: InputMaybe<OrderWhereStageInput>;
	email?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	email_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	email_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	email_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	email_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	email_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	email_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	email_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	orderItems_every?: InputMaybe<OrderItemWhereInput>;
	orderItems_none?: InputMaybe<OrderItemWhereInput>;
	orderItems_some?: InputMaybe<OrderItemWhereInput>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	stripeCheckoutId?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	stripeCheckoutId_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	stripeCheckoutId_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	stripeCheckoutId_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	stripeCheckoutId_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	stripeCheckoutId_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	stripeCheckoutId_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	stripeCheckoutId_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	stripeCheckoutId_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	stripeCheckoutId_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	total?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values greater than the given value. */
	total_gt?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values greater than or equal the given value. */
	total_gte?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values that are contained in given list. */
	total_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	/** All values less than the given value. */
	total_lt?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values less than or equal the given value. */
	total_lte?: InputMaybe<Scalars["Int"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	total_not?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values that are not contained in given list. */
	total_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export type OrderOrderByInput =
	| "createdAt_ASC"
	| "createdAt_DESC"
	| "email_ASC"
	| "email_DESC"
	| "id_ASC"
	| "id_DESC"
	| "publishedAt_ASC"
	| "publishedAt_DESC"
	| "stripeCheckoutId_ASC"
	| "stripeCheckoutId_DESC"
	| "total_ASC"
	| "total_DESC"
	| "updatedAt_ASC"
	| "updatedAt_DESC";

export type OrderUpdateInput = {
	email?: InputMaybe<Scalars["String"]["input"]>;
	orderItems?: InputMaybe<OrderItemUpdateManyInlineInput>;
	stripeCheckoutId?: InputMaybe<Scalars["String"]["input"]>;
	total?: InputMaybe<Scalars["Int"]["input"]>;
};

export type OrderUpdateManyInlineInput = {
	/** Connect multiple existing Order documents */
	connect?: InputMaybe<Array<OrderConnectInput>>;
	/** Create and connect multiple Order documents */
	create?: InputMaybe<Array<OrderCreateInput>>;
	/** Delete multiple Order documents */
	delete?: InputMaybe<Array<OrderWhereUniqueInput>>;
	/** Disconnect multiple Order documents */
	disconnect?: InputMaybe<Array<OrderWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing Order documents */
	set?: InputMaybe<Array<OrderWhereUniqueInput>>;
	/** Update multiple Order documents */
	update?: InputMaybe<Array<OrderUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple Order documents */
	upsert?: InputMaybe<Array<OrderUpsertWithNestedWhereUniqueInput>>;
};

export type OrderUpdateManyInput = {
	email?: InputMaybe<Scalars["String"]["input"]>;
	stripeCheckoutId?: InputMaybe<Scalars["String"]["input"]>;
	total?: InputMaybe<Scalars["Int"]["input"]>;
};

export type OrderUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: OrderUpdateManyInput;
	/** Document search */
	where: OrderWhereInput;
};

export type OrderUpdateOneInlineInput = {
	/** Connect existing Order document */
	connect?: InputMaybe<OrderWhereUniqueInput>;
	/** Create and connect one Order document */
	create?: InputMaybe<OrderCreateInput>;
	/** Delete currently connected Order document */
	delete?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Disconnect currently connected Order document */
	disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Update single Order document */
	update?: InputMaybe<OrderUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Order document */
	upsert?: InputMaybe<OrderUpsertWithNestedWhereUniqueInput>;
};

export type OrderUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: OrderUpdateInput;
	/** Unique document search */
	where: OrderWhereUniqueInput;
};

export type OrderUpsertInput = {
	/** Create document if it didn't exist */
	create: OrderCreateInput;
	/** Update document if it exists */
	update: OrderUpdateInput;
};

export type OrderUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: OrderUpsertInput;
	/** Unique document search */
	where: OrderWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type OrderWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type OrderWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<OrderWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<OrderWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<OrderWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<OrderWhereStageInput>;
	documentInStages_none?: InputMaybe<OrderWhereStageInput>;
	documentInStages_some?: InputMaybe<OrderWhereStageInput>;
	email?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	email_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	email_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	email_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	email_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	email_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	email_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	email_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	orderItems_every?: InputMaybe<OrderItemWhereInput>;
	orderItems_none?: InputMaybe<OrderItemWhereInput>;
	orderItems_some?: InputMaybe<OrderItemWhereInput>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	stripeCheckoutId?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	stripeCheckoutId_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	stripeCheckoutId_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	stripeCheckoutId_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	stripeCheckoutId_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	stripeCheckoutId_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	stripeCheckoutId_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	stripeCheckoutId_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	stripeCheckoutId_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	stripeCheckoutId_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	total?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values greater than the given value. */
	total_gt?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values greater than or equal the given value. */
	total_gte?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values that are contained in given list. */
	total_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	/** All values less than the given value. */
	total_lt?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values less than or equal the given value. */
	total_lte?: InputMaybe<Scalars["Int"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	total_not?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values that are not contained in given list. */
	total_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type OrderWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<OrderWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<OrderWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<OrderWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<OrderWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References Order record uniquely */
export type OrderWhereUniqueInput = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ProductColor =
	| "BLACK"
	| "BLUE"
	| "GRAY"
	| "GREEN"
	| "ORANGE"
	| "PINK"
	| "PURPLE"
	| "RED"
	| "WHITE"
	| "YELLOW";

export type ProductColorVariantConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: ProductColorVariantWhereUniqueInput;
};

export type ProductColorVariantCreateInput = {
	color: ProductColor;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Inline mutations for managing document localizations excluding the default locale */
	localizations?: InputMaybe<ProductColorVariantCreateLocalizationsInput>;
	/** name input for default locale (en) */
	name: Scalars["String"]["input"];
	products?: InputMaybe<ProductCreateManyInlineInput>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ProductColorVariantCreateLocalizationDataInput = {
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	name: Scalars["String"]["input"];
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ProductColorVariantCreateLocalizationInput = {
	/** Localization input */
	data: ProductColorVariantCreateLocalizationDataInput;
	locale: Locale;
};

export type ProductColorVariantCreateLocalizationsInput = {
	/** Create localizations for the newly-created document */
	create?: InputMaybe<Array<ProductColorVariantCreateLocalizationInput>>;
};

export type ProductColorVariantCreateManyInlineInput = {
	/** Connect multiple existing ProductColorVariant documents */
	connect?: InputMaybe<Array<ProductColorVariantWhereUniqueInput>>;
	/** Create and connect multiple existing ProductColorVariant documents */
	create?: InputMaybe<Array<ProductColorVariantCreateInput>>;
};

export type ProductColorVariantCreateOneInlineInput = {
	/** Connect one existing ProductColorVariant document */
	connect?: InputMaybe<ProductColorVariantWhereUniqueInput>;
	/** Create and connect one ProductColorVariant document */
	create?: InputMaybe<ProductColorVariantCreateInput>;
};

/** Identifies documents */
export type ProductColorVariantManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ProductColorVariantWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ProductColorVariantWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ProductColorVariantWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars["String"]["input"]>;
	color?: InputMaybe<ProductColor>;
	/** All values that are contained in given list. */
	color_in?: InputMaybe<Array<InputMaybe<ProductColor>>>;
	/** Any other value that exists and is not equal to the given value. */
	color_not?: InputMaybe<ProductColor>;
	/** All values that are not contained in given list. */
	color_not_in?: InputMaybe<Array<InputMaybe<ProductColor>>>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<ProductColorVariantWhereStageInput>;
	documentInStages_none?: InputMaybe<ProductColorVariantWhereStageInput>;
	documentInStages_some?: InputMaybe<ProductColorVariantWhereStageInput>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	products_every?: InputMaybe<ProductWhereInput>;
	products_none?: InputMaybe<ProductWhereInput>;
	products_some?: InputMaybe<ProductWhereInput>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export type ProductColorVariantOrderByInput =
	| "color_ASC"
	| "color_DESC"
	| "createdAt_ASC"
	| "createdAt_DESC"
	| "id_ASC"
	| "id_DESC"
	| "name_ASC"
	| "name_DESC"
	| "publishedAt_ASC"
	| "publishedAt_DESC"
	| "updatedAt_ASC"
	| "updatedAt_DESC";

export type ProductColorVariantUpdateInput = {
	color?: InputMaybe<ProductColor>;
	/** Manage document localizations */
	localizations?: InputMaybe<ProductColorVariantUpdateLocalizationsInput>;
	/** name input for default locale (en) */
	name?: InputMaybe<Scalars["String"]["input"]>;
	products?: InputMaybe<ProductUpdateManyInlineInput>;
};

export type ProductColorVariantUpdateLocalizationDataInput = {
	name?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductColorVariantUpdateLocalizationInput = {
	data: ProductColorVariantUpdateLocalizationDataInput;
	locale: Locale;
};

export type ProductColorVariantUpdateLocalizationsInput = {
	/** Localizations to create */
	create?: InputMaybe<Array<ProductColorVariantCreateLocalizationInput>>;
	/** Localizations to delete */
	delete?: InputMaybe<Array<Locale>>;
	/** Localizations to update */
	update?: InputMaybe<Array<ProductColorVariantUpdateLocalizationInput>>;
	upsert?: InputMaybe<Array<ProductColorVariantUpsertLocalizationInput>>;
};

export type ProductColorVariantUpdateManyInlineInput = {
	/** Connect multiple existing ProductColorVariant documents */
	connect?: InputMaybe<Array<ProductColorVariantConnectInput>>;
	/** Create and connect multiple ProductColorVariant documents */
	create?: InputMaybe<Array<ProductColorVariantCreateInput>>;
	/** Delete multiple ProductColorVariant documents */
	delete?: InputMaybe<Array<ProductColorVariantWhereUniqueInput>>;
	/** Disconnect multiple ProductColorVariant documents */
	disconnect?: InputMaybe<Array<ProductColorVariantWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing ProductColorVariant documents */
	set?: InputMaybe<Array<ProductColorVariantWhereUniqueInput>>;
	/** Update multiple ProductColorVariant documents */
	update?: InputMaybe<Array<ProductColorVariantUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple ProductColorVariant documents */
	upsert?: InputMaybe<Array<ProductColorVariantUpsertWithNestedWhereUniqueInput>>;
};

export type ProductColorVariantUpdateManyInput = {
	color?: InputMaybe<ProductColor>;
	/** Optional updates to localizations */
	localizations?: InputMaybe<ProductColorVariantUpdateManyLocalizationsInput>;
	/** name input for default locale (en) */
	name?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductColorVariantUpdateManyLocalizationDataInput = {
	name?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductColorVariantUpdateManyLocalizationInput = {
	data: ProductColorVariantUpdateManyLocalizationDataInput;
	locale: Locale;
};

export type ProductColorVariantUpdateManyLocalizationsInput = {
	/** Localizations to update */
	update?: InputMaybe<Array<ProductColorVariantUpdateManyLocalizationInput>>;
};

export type ProductColorVariantUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: ProductColorVariantUpdateManyInput;
	/** Document search */
	where: ProductColorVariantWhereInput;
};

export type ProductColorVariantUpdateOneInlineInput = {
	/** Connect existing ProductColorVariant document */
	connect?: InputMaybe<ProductColorVariantWhereUniqueInput>;
	/** Create and connect one ProductColorVariant document */
	create?: InputMaybe<ProductColorVariantCreateInput>;
	/** Delete currently connected ProductColorVariant document */
	delete?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Disconnect currently connected ProductColorVariant document */
	disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Update single ProductColorVariant document */
	update?: InputMaybe<ProductColorVariantUpdateWithNestedWhereUniqueInput>;
	/** Upsert single ProductColorVariant document */
	upsert?: InputMaybe<ProductColorVariantUpsertWithNestedWhereUniqueInput>;
};

export type ProductColorVariantUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: ProductColorVariantUpdateInput;
	/** Unique document search */
	where: ProductColorVariantWhereUniqueInput;
};

export type ProductColorVariantUpsertInput = {
	/** Create document if it didn't exist */
	create: ProductColorVariantCreateInput;
	/** Update document if it exists */
	update: ProductColorVariantUpdateInput;
};

export type ProductColorVariantUpsertLocalizationInput = {
	create: ProductColorVariantCreateLocalizationDataInput;
	locale: Locale;
	update: ProductColorVariantUpdateLocalizationDataInput;
};

export type ProductColorVariantUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: ProductColorVariantUpsertInput;
	/** Unique document search */
	where: ProductColorVariantWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProductColorVariantWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type ProductColorVariantWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ProductColorVariantWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ProductColorVariantWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ProductColorVariantWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars["String"]["input"]>;
	color?: InputMaybe<ProductColor>;
	/** All values that are contained in given list. */
	color_in?: InputMaybe<Array<InputMaybe<ProductColor>>>;
	/** Any other value that exists and is not equal to the given value. */
	color_not?: InputMaybe<ProductColor>;
	/** All values that are not contained in given list. */
	color_not_in?: InputMaybe<Array<InputMaybe<ProductColor>>>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<ProductColorVariantWhereStageInput>;
	documentInStages_none?: InputMaybe<ProductColorVariantWhereStageInput>;
	documentInStages_some?: InputMaybe<ProductColorVariantWhereStageInput>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	name_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	products_every?: InputMaybe<ProductWhereInput>;
	products_none?: InputMaybe<ProductWhereInput>;
	products_some?: InputMaybe<ProductWhereInput>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProductColorVariantWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ProductColorVariantWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ProductColorVariantWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ProductColorVariantWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<ProductColorVariantWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References ProductColorVariant record uniquely */
export type ProductColorVariantWhereUniqueInput = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ProductConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: ProductWhereUniqueInput;
};

export type ProductCreateInput = {
	categories?: InputMaybe<CategoryCreateManyInlineInput>;
	collections?: InputMaybe<CollectionCreateManyInlineInput>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** description input for default locale (en) */
	description: Scalars["String"]["input"];
	images: AssetCreateManyInlineInput;
	/** Inline mutations for managing document localizations excluding the default locale */
	localizations?: InputMaybe<ProductCreateLocalizationsInput>;
	/** name input for default locale (en) */
	name: Scalars["String"]["input"];
	orderItems?: InputMaybe<OrderItemCreateManyInlineInput>;
	/** price input for default locale (en) */
	price: Scalars["Int"]["input"];
	productColorVariants?: InputMaybe<ProductColorVariantCreateManyInlineInput>;
	productSizeVariants?: InputMaybe<ProductSizeVariantCreateManyInlineInput>;
	rating?: InputMaybe<Scalars["Float"]["input"]>;
	reviews?: InputMaybe<ReviewCreateManyInlineInput>;
	slug: Scalars["String"]["input"];
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ProductCreateLocalizationDataInput = {
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	description: Scalars["String"]["input"];
	name: Scalars["String"]["input"];
	price: Scalars["Int"]["input"];
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ProductCreateLocalizationInput = {
	/** Localization input */
	data: ProductCreateLocalizationDataInput;
	locale: Locale;
};

export type ProductCreateLocalizationsInput = {
	/** Create localizations for the newly-created document */
	create?: InputMaybe<Array<ProductCreateLocalizationInput>>;
};

export type ProductCreateManyInlineInput = {
	/** Connect multiple existing Product documents */
	connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
	/** Create and connect multiple existing Product documents */
	create?: InputMaybe<Array<ProductCreateInput>>;
};

export type ProductCreateOneInlineInput = {
	/** Connect one existing Product document */
	connect?: InputMaybe<ProductWhereUniqueInput>;
	/** Create and connect one Product document */
	create?: InputMaybe<ProductCreateInput>;
};

/** Identifies documents */
export type ProductManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ProductWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ProductWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ProductWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars["String"]["input"]>;
	categories_every?: InputMaybe<CategoryWhereInput>;
	categories_none?: InputMaybe<CategoryWhereInput>;
	categories_some?: InputMaybe<CategoryWhereInput>;
	collections_every?: InputMaybe<CollectionWhereInput>;
	collections_none?: InputMaybe<CollectionWhereInput>;
	collections_some?: InputMaybe<CollectionWhereInput>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<ProductWhereStageInput>;
	documentInStages_none?: InputMaybe<ProductWhereStageInput>;
	documentInStages_some?: InputMaybe<ProductWhereStageInput>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	images_every?: InputMaybe<AssetWhereInput>;
	images_none?: InputMaybe<AssetWhereInput>;
	images_some?: InputMaybe<AssetWhereInput>;
	orderItems_every?: InputMaybe<OrderItemWhereInput>;
	orderItems_none?: InputMaybe<OrderItemWhereInput>;
	orderItems_some?: InputMaybe<OrderItemWhereInput>;
	productColorVariants_every?: InputMaybe<ProductColorVariantWhereInput>;
	productColorVariants_none?: InputMaybe<ProductColorVariantWhereInput>;
	productColorVariants_some?: InputMaybe<ProductColorVariantWhereInput>;
	productSizeVariants_every?: InputMaybe<ProductSizeVariantWhereInput>;
	productSizeVariants_none?: InputMaybe<ProductSizeVariantWhereInput>;
	productSizeVariants_some?: InputMaybe<ProductSizeVariantWhereInput>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	rating?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values greater than the given value. */
	rating_gt?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values greater than or equal the given value. */
	rating_gte?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values that are contained in given list. */
	rating_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
	/** All values less than the given value. */
	rating_lt?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values less than or equal the given value. */
	rating_lte?: InputMaybe<Scalars["Float"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	rating_not?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values that are not contained in given list. */
	rating_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
	reviews_every?: InputMaybe<ReviewWhereInput>;
	reviews_none?: InputMaybe<ReviewWhereInput>;
	reviews_some?: InputMaybe<ReviewWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	slug_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	slug_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	slug_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	slug_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	slug_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	slug_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export type ProductOrderByInput =
	| "createdAt_ASC"
	| "createdAt_DESC"
	| "description_ASC"
	| "description_DESC"
	| "id_ASC"
	| "id_DESC"
	| "name_ASC"
	| "name_DESC"
	| "price_ASC"
	| "price_DESC"
	| "publishedAt_ASC"
	| "publishedAt_DESC"
	| "rating_ASC"
	| "rating_DESC"
	| "slug_ASC"
	| "slug_DESC"
	| "updatedAt_ASC"
	| "updatedAt_DESC";

export type ProductSize = "LARGE" | "MEDIUM" | "SMALL" | "XL" | "XS";

export type ProductSizeVariantConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: ProductSizeVariantWhereUniqueInput;
};

export type ProductSizeVariantCreateInput = {
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Inline mutations for managing document localizations excluding the default locale */
	localizations?: InputMaybe<ProductSizeVariantCreateLocalizationsInput>;
	/** name input for default locale (en) */
	name: Scalars["String"]["input"];
	products?: InputMaybe<ProductCreateManyInlineInput>;
	size: ProductSize;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ProductSizeVariantCreateLocalizationDataInput = {
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	name: Scalars["String"]["input"];
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ProductSizeVariantCreateLocalizationInput = {
	/** Localization input */
	data: ProductSizeVariantCreateLocalizationDataInput;
	locale: Locale;
};

export type ProductSizeVariantCreateLocalizationsInput = {
	/** Create localizations for the newly-created document */
	create?: InputMaybe<Array<ProductSizeVariantCreateLocalizationInput>>;
};

export type ProductSizeVariantCreateManyInlineInput = {
	/** Connect multiple existing ProductSizeVariant documents */
	connect?: InputMaybe<Array<ProductSizeVariantWhereUniqueInput>>;
	/** Create and connect multiple existing ProductSizeVariant documents */
	create?: InputMaybe<Array<ProductSizeVariantCreateInput>>;
};

export type ProductSizeVariantCreateOneInlineInput = {
	/** Connect one existing ProductSizeVariant document */
	connect?: InputMaybe<ProductSizeVariantWhereUniqueInput>;
	/** Create and connect one ProductSizeVariant document */
	create?: InputMaybe<ProductSizeVariantCreateInput>;
};

/** Identifies documents */
export type ProductSizeVariantManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ProductSizeVariantWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ProductSizeVariantWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ProductSizeVariantWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<ProductSizeVariantWhereStageInput>;
	documentInStages_none?: InputMaybe<ProductSizeVariantWhereStageInput>;
	documentInStages_some?: InputMaybe<ProductSizeVariantWhereStageInput>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	products_every?: InputMaybe<ProductWhereInput>;
	products_none?: InputMaybe<ProductWhereInput>;
	products_some?: InputMaybe<ProductWhereInput>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	size?: InputMaybe<ProductSize>;
	/** All values that are contained in given list. */
	size_in?: InputMaybe<Array<InputMaybe<ProductSize>>>;
	/** Any other value that exists and is not equal to the given value. */
	size_not?: InputMaybe<ProductSize>;
	/** All values that are not contained in given list. */
	size_not_in?: InputMaybe<Array<InputMaybe<ProductSize>>>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export type ProductSizeVariantOrderByInput =
	| "createdAt_ASC"
	| "createdAt_DESC"
	| "id_ASC"
	| "id_DESC"
	| "name_ASC"
	| "name_DESC"
	| "publishedAt_ASC"
	| "publishedAt_DESC"
	| "size_ASC"
	| "size_DESC"
	| "updatedAt_ASC"
	| "updatedAt_DESC";

export type ProductSizeVariantUpdateInput = {
	/** Manage document localizations */
	localizations?: InputMaybe<ProductSizeVariantUpdateLocalizationsInput>;
	/** name input for default locale (en) */
	name?: InputMaybe<Scalars["String"]["input"]>;
	products?: InputMaybe<ProductUpdateManyInlineInput>;
	size?: InputMaybe<ProductSize>;
};

export type ProductSizeVariantUpdateLocalizationDataInput = {
	name?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductSizeVariantUpdateLocalizationInput = {
	data: ProductSizeVariantUpdateLocalizationDataInput;
	locale: Locale;
};

export type ProductSizeVariantUpdateLocalizationsInput = {
	/** Localizations to create */
	create?: InputMaybe<Array<ProductSizeVariantCreateLocalizationInput>>;
	/** Localizations to delete */
	delete?: InputMaybe<Array<Locale>>;
	/** Localizations to update */
	update?: InputMaybe<Array<ProductSizeVariantUpdateLocalizationInput>>;
	upsert?: InputMaybe<Array<ProductSizeVariantUpsertLocalizationInput>>;
};

export type ProductSizeVariantUpdateManyInlineInput = {
	/** Connect multiple existing ProductSizeVariant documents */
	connect?: InputMaybe<Array<ProductSizeVariantConnectInput>>;
	/** Create and connect multiple ProductSizeVariant documents */
	create?: InputMaybe<Array<ProductSizeVariantCreateInput>>;
	/** Delete multiple ProductSizeVariant documents */
	delete?: InputMaybe<Array<ProductSizeVariantWhereUniqueInput>>;
	/** Disconnect multiple ProductSizeVariant documents */
	disconnect?: InputMaybe<Array<ProductSizeVariantWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing ProductSizeVariant documents */
	set?: InputMaybe<Array<ProductSizeVariantWhereUniqueInput>>;
	/** Update multiple ProductSizeVariant documents */
	update?: InputMaybe<Array<ProductSizeVariantUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple ProductSizeVariant documents */
	upsert?: InputMaybe<Array<ProductSizeVariantUpsertWithNestedWhereUniqueInput>>;
};

export type ProductSizeVariantUpdateManyInput = {
	/** Optional updates to localizations */
	localizations?: InputMaybe<ProductSizeVariantUpdateManyLocalizationsInput>;
	/** name input for default locale (en) */
	name?: InputMaybe<Scalars["String"]["input"]>;
	size?: InputMaybe<ProductSize>;
};

export type ProductSizeVariantUpdateManyLocalizationDataInput = {
	name?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductSizeVariantUpdateManyLocalizationInput = {
	data: ProductSizeVariantUpdateManyLocalizationDataInput;
	locale: Locale;
};

export type ProductSizeVariantUpdateManyLocalizationsInput = {
	/** Localizations to update */
	update?: InputMaybe<Array<ProductSizeVariantUpdateManyLocalizationInput>>;
};

export type ProductSizeVariantUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: ProductSizeVariantUpdateManyInput;
	/** Document search */
	where: ProductSizeVariantWhereInput;
};

export type ProductSizeVariantUpdateOneInlineInput = {
	/** Connect existing ProductSizeVariant document */
	connect?: InputMaybe<ProductSizeVariantWhereUniqueInput>;
	/** Create and connect one ProductSizeVariant document */
	create?: InputMaybe<ProductSizeVariantCreateInput>;
	/** Delete currently connected ProductSizeVariant document */
	delete?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Disconnect currently connected ProductSizeVariant document */
	disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Update single ProductSizeVariant document */
	update?: InputMaybe<ProductSizeVariantUpdateWithNestedWhereUniqueInput>;
	/** Upsert single ProductSizeVariant document */
	upsert?: InputMaybe<ProductSizeVariantUpsertWithNestedWhereUniqueInput>;
};

export type ProductSizeVariantUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: ProductSizeVariantUpdateInput;
	/** Unique document search */
	where: ProductSizeVariantWhereUniqueInput;
};

export type ProductSizeVariantUpsertInput = {
	/** Create document if it didn't exist */
	create: ProductSizeVariantCreateInput;
	/** Update document if it exists */
	update: ProductSizeVariantUpdateInput;
};

export type ProductSizeVariantUpsertLocalizationInput = {
	create: ProductSizeVariantCreateLocalizationDataInput;
	locale: Locale;
	update: ProductSizeVariantUpdateLocalizationDataInput;
};

export type ProductSizeVariantUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: ProductSizeVariantUpsertInput;
	/** Unique document search */
	where: ProductSizeVariantWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProductSizeVariantWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type ProductSizeVariantWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ProductSizeVariantWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ProductSizeVariantWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ProductSizeVariantWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<ProductSizeVariantWhereStageInput>;
	documentInStages_none?: InputMaybe<ProductSizeVariantWhereStageInput>;
	documentInStages_some?: InputMaybe<ProductSizeVariantWhereStageInput>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	name_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	products_every?: InputMaybe<ProductWhereInput>;
	products_none?: InputMaybe<ProductWhereInput>;
	products_some?: InputMaybe<ProductWhereInput>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	size?: InputMaybe<ProductSize>;
	/** All values that are contained in given list. */
	size_in?: InputMaybe<Array<InputMaybe<ProductSize>>>;
	/** Any other value that exists and is not equal to the given value. */
	size_not?: InputMaybe<ProductSize>;
	/** All values that are not contained in given list. */
	size_not_in?: InputMaybe<Array<InputMaybe<ProductSize>>>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProductSizeVariantWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ProductSizeVariantWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ProductSizeVariantWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ProductSizeVariantWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<ProductSizeVariantWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References ProductSizeVariant record uniquely */
export type ProductSizeVariantWhereUniqueInput = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ProductUpdateInput = {
	categories?: InputMaybe<CategoryUpdateManyInlineInput>;
	collections?: InputMaybe<CollectionUpdateManyInlineInput>;
	/** description input for default locale (en) */
	description?: InputMaybe<Scalars["String"]["input"]>;
	images?: InputMaybe<AssetUpdateManyInlineInput>;
	/** Manage document localizations */
	localizations?: InputMaybe<ProductUpdateLocalizationsInput>;
	/** name input for default locale (en) */
	name?: InputMaybe<Scalars["String"]["input"]>;
	orderItems?: InputMaybe<OrderItemUpdateManyInlineInput>;
	/** price input for default locale (en) */
	price?: InputMaybe<Scalars["Int"]["input"]>;
	productColorVariants?: InputMaybe<ProductColorVariantUpdateManyInlineInput>;
	productSizeVariants?: InputMaybe<ProductSizeVariantUpdateManyInlineInput>;
	rating?: InputMaybe<Scalars["Float"]["input"]>;
	reviews?: InputMaybe<ReviewUpdateManyInlineInput>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductUpdateLocalizationDataInput = {
	description?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	price?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProductUpdateLocalizationInput = {
	data: ProductUpdateLocalizationDataInput;
	locale: Locale;
};

export type ProductUpdateLocalizationsInput = {
	/** Localizations to create */
	create?: InputMaybe<Array<ProductCreateLocalizationInput>>;
	/** Localizations to delete */
	delete?: InputMaybe<Array<Locale>>;
	/** Localizations to update */
	update?: InputMaybe<Array<ProductUpdateLocalizationInput>>;
	upsert?: InputMaybe<Array<ProductUpsertLocalizationInput>>;
};

export type ProductUpdateManyInlineInput = {
	/** Connect multiple existing Product documents */
	connect?: InputMaybe<Array<ProductConnectInput>>;
	/** Create and connect multiple Product documents */
	create?: InputMaybe<Array<ProductCreateInput>>;
	/** Delete multiple Product documents */
	delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
	/** Disconnect multiple Product documents */
	disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing Product documents */
	set?: InputMaybe<Array<ProductWhereUniqueInput>>;
	/** Update multiple Product documents */
	update?: InputMaybe<Array<ProductUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple Product documents */
	upsert?: InputMaybe<Array<ProductUpsertWithNestedWhereUniqueInput>>;
};

export type ProductUpdateManyInput = {
	/** description input for default locale (en) */
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** Optional updates to localizations */
	localizations?: InputMaybe<ProductUpdateManyLocalizationsInput>;
	/** price input for default locale (en) */
	price?: InputMaybe<Scalars["Int"]["input"]>;
	rating?: InputMaybe<Scalars["Float"]["input"]>;
};

export type ProductUpdateManyLocalizationDataInput = {
	description?: InputMaybe<Scalars["String"]["input"]>;
	price?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProductUpdateManyLocalizationInput = {
	data: ProductUpdateManyLocalizationDataInput;
	locale: Locale;
};

export type ProductUpdateManyLocalizationsInput = {
	/** Localizations to update */
	update?: InputMaybe<Array<ProductUpdateManyLocalizationInput>>;
};

export type ProductUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: ProductUpdateManyInput;
	/** Document search */
	where: ProductWhereInput;
};

export type ProductUpdateOneInlineInput = {
	/** Connect existing Product document */
	connect?: InputMaybe<ProductWhereUniqueInput>;
	/** Create and connect one Product document */
	create?: InputMaybe<ProductCreateInput>;
	/** Delete currently connected Product document */
	delete?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Disconnect currently connected Product document */
	disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Update single Product document */
	update?: InputMaybe<ProductUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Product document */
	upsert?: InputMaybe<ProductUpsertWithNestedWhereUniqueInput>;
};

export type ProductUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: ProductUpdateInput;
	/** Unique document search */
	where: ProductWhereUniqueInput;
};

export type ProductUpsertInput = {
	/** Create document if it didn't exist */
	create: ProductCreateInput;
	/** Update document if it exists */
	update: ProductUpdateInput;
};

export type ProductUpsertLocalizationInput = {
	create: ProductCreateLocalizationDataInput;
	locale: Locale;
	update: ProductUpdateLocalizationDataInput;
};

export type ProductUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: ProductUpsertInput;
	/** Unique document search */
	where: ProductWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProductWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type ProductWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ProductWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ProductWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ProductWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars["String"]["input"]>;
	categories_every?: InputMaybe<CategoryWhereInput>;
	categories_none?: InputMaybe<CategoryWhereInput>;
	categories_some?: InputMaybe<CategoryWhereInput>;
	collections_every?: InputMaybe<CollectionWhereInput>;
	collections_none?: InputMaybe<CollectionWhereInput>;
	collections_some?: InputMaybe<CollectionWhereInput>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	documentInStages_every?: InputMaybe<ProductWhereStageInput>;
	documentInStages_none?: InputMaybe<ProductWhereStageInput>;
	documentInStages_some?: InputMaybe<ProductWhereStageInput>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	images_every?: InputMaybe<AssetWhereInput>;
	images_none?: InputMaybe<AssetWhereInput>;
	images_some?: InputMaybe<AssetWhereInput>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	name_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	orderItems_every?: InputMaybe<OrderItemWhereInput>;
	orderItems_none?: InputMaybe<OrderItemWhereInput>;
	orderItems_some?: InputMaybe<OrderItemWhereInput>;
	price?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values greater than the given value. */
	price_gt?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values greater than or equal the given value. */
	price_gte?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values that are contained in given list. */
	price_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	/** All values less than the given value. */
	price_lt?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values less than or equal the given value. */
	price_lte?: InputMaybe<Scalars["Int"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	price_not?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values that are not contained in given list. */
	price_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	productColorVariants_every?: InputMaybe<ProductColorVariantWhereInput>;
	productColorVariants_none?: InputMaybe<ProductColorVariantWhereInput>;
	productColorVariants_some?: InputMaybe<ProductColorVariantWhereInput>;
	productSizeVariants_every?: InputMaybe<ProductSizeVariantWhereInput>;
	productSizeVariants_none?: InputMaybe<ProductSizeVariantWhereInput>;
	productSizeVariants_some?: InputMaybe<ProductSizeVariantWhereInput>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	rating?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values greater than the given value. */
	rating_gt?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values greater than or equal the given value. */
	rating_gte?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values that are contained in given list. */
	rating_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
	/** All values less than the given value. */
	rating_lt?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values less than or equal the given value. */
	rating_lte?: InputMaybe<Scalars["Float"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	rating_not?: InputMaybe<Scalars["Float"]["input"]>;
	/** All values that are not contained in given list. */
	rating_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
	reviews_every?: InputMaybe<ReviewWhereInput>;
	reviews_none?: InputMaybe<ReviewWhereInput>;
	reviews_some?: InputMaybe<ReviewWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	slug_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	slug_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	slug_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	slug_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	slug_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	slug_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProductWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ProductWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ProductWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ProductWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<ProductWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References Product record uniquely */
export type ProductWhereUniqueInput = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type PublishLocaleInput = {
	/** Locales to publish */
	locale: Locale;
	/** Stages to publish selected locales to */
	stages: Array<Stage>;
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
	a: Scalars["RGBATransparency"]["input"];
	b: Scalars["RGBAHue"]["input"];
	g: Scalars["RGBAHue"]["input"];
	r: Scalars["RGBAHue"]["input"];
};

export type ReviewConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: ReviewWhereUniqueInput;
};

export type ReviewCreateInput = {
	content: Scalars["String"]["input"];
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	email: Scalars["String"]["input"];
	headline: Scalars["String"]["input"];
	name: Scalars["String"]["input"];
	product?: InputMaybe<ProductCreateOneInlineInput>;
	rating: Scalars["Int"]["input"];
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ReviewCreateManyInlineInput = {
	/** Connect multiple existing Review documents */
	connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
	/** Create and connect multiple existing Review documents */
	create?: InputMaybe<Array<ReviewCreateInput>>;
};

export type ReviewCreateOneInlineInput = {
	/** Connect one existing Review document */
	connect?: InputMaybe<ReviewWhereUniqueInput>;
	/** Create and connect one Review document */
	create?: InputMaybe<ReviewCreateInput>;
};

/** Identifies documents */
export type ReviewManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ReviewWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ReviewWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ReviewWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars["String"]["input"]>;
	content?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	content_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	content_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	content_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	content_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	content_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	content_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	content_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<ReviewWhereStageInput>;
	documentInStages_none?: InputMaybe<ReviewWhereStageInput>;
	documentInStages_some?: InputMaybe<ReviewWhereStageInput>;
	email?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	email_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	email_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	email_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	email_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	email_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	email_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	email_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	headline?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	headline_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	headline_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	headline_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	headline_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	headline_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	headline_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	headline_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	headline_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	headline_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	name_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	product?: InputMaybe<ProductWhereInput>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	rating?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values greater than the given value. */
	rating_gt?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values greater than or equal the given value. */
	rating_gte?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values that are contained in given list. */
	rating_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	/** All values less than the given value. */
	rating_lt?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values less than or equal the given value. */
	rating_lte?: InputMaybe<Scalars["Int"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	rating_not?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values that are not contained in given list. */
	rating_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export type ReviewOrderByInput =
	| "content_ASC"
	| "content_DESC"
	| "createdAt_ASC"
	| "createdAt_DESC"
	| "email_ASC"
	| "email_DESC"
	| "headline_ASC"
	| "headline_DESC"
	| "id_ASC"
	| "id_DESC"
	| "name_ASC"
	| "name_DESC"
	| "publishedAt_ASC"
	| "publishedAt_DESC"
	| "rating_ASC"
	| "rating_DESC"
	| "updatedAt_ASC"
	| "updatedAt_DESC";

export type ReviewUpdateInput = {
	content?: InputMaybe<Scalars["String"]["input"]>;
	email?: InputMaybe<Scalars["String"]["input"]>;
	headline?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	product?: InputMaybe<ProductUpdateOneInlineInput>;
	rating?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ReviewUpdateManyInlineInput = {
	/** Connect multiple existing Review documents */
	connect?: InputMaybe<Array<ReviewConnectInput>>;
	/** Create and connect multiple Review documents */
	create?: InputMaybe<Array<ReviewCreateInput>>;
	/** Delete multiple Review documents */
	delete?: InputMaybe<Array<ReviewWhereUniqueInput>>;
	/** Disconnect multiple Review documents */
	disconnect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing Review documents */
	set?: InputMaybe<Array<ReviewWhereUniqueInput>>;
	/** Update multiple Review documents */
	update?: InputMaybe<Array<ReviewUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple Review documents */
	upsert?: InputMaybe<Array<ReviewUpsertWithNestedWhereUniqueInput>>;
};

export type ReviewUpdateManyInput = {
	content?: InputMaybe<Scalars["String"]["input"]>;
	email?: InputMaybe<Scalars["String"]["input"]>;
	headline?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	rating?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ReviewUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: ReviewUpdateManyInput;
	/** Document search */
	where: ReviewWhereInput;
};

export type ReviewUpdateOneInlineInput = {
	/** Connect existing Review document */
	connect?: InputMaybe<ReviewWhereUniqueInput>;
	/** Create and connect one Review document */
	create?: InputMaybe<ReviewCreateInput>;
	/** Delete currently connected Review document */
	delete?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Disconnect currently connected Review document */
	disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Update single Review document */
	update?: InputMaybe<ReviewUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Review document */
	upsert?: InputMaybe<ReviewUpsertWithNestedWhereUniqueInput>;
};

export type ReviewUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: ReviewUpdateInput;
	/** Unique document search */
	where: ReviewWhereUniqueInput;
};

export type ReviewUpsertInput = {
	/** Create document if it didn't exist */
	create: ReviewCreateInput;
	/** Update document if it exists */
	update: ReviewUpdateInput;
};

export type ReviewUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: ReviewUpsertInput;
	/** Unique document search */
	where: ReviewWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ReviewWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type ReviewWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ReviewWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ReviewWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ReviewWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars["String"]["input"]>;
	content?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	content_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	content_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	content_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	content_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	content_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	content_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	content_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<ReviewWhereStageInput>;
	documentInStages_none?: InputMaybe<ReviewWhereStageInput>;
	documentInStages_some?: InputMaybe<ReviewWhereStageInput>;
	email?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	email_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	email_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	email_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	email_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	email_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	email_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	email_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	headline?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	headline_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	headline_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	headline_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	headline_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	headline_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	headline_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	headline_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	headline_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	headline_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	name_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	product?: InputMaybe<ProductWhereInput>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	rating?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values greater than the given value. */
	rating_gt?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values greater than or equal the given value. */
	rating_gte?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values that are contained in given list. */
	rating_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	/** All values less than the given value. */
	rating_lt?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values less than or equal the given value. */
	rating_lte?: InputMaybe<Scalars["Int"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	rating_not?: InputMaybe<Scalars["Int"]["input"]>;
	/** All values that are not contained in given list. */
	rating_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ReviewWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ReviewWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ReviewWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ReviewWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<ReviewWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References Review record uniquely */
export type ReviewWhereUniqueInput = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ScheduledOperationConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: ScheduledOperationWhereUniqueInput;
};

export type ScheduledOperationCreateManyInlineInput = {
	/** Connect multiple existing ScheduledOperation documents */
	connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
	/** Connect one existing ScheduledOperation document */
	connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	errorMessage?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	errorMessage_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	errorMessage_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	errorMessage_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	errorMessage_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	errorMessage_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	errorMessage_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	errorMessage_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	/** All values containing the given json path. */
	rawPayload_json_path_exists?: InputMaybe<Scalars["String"]["input"]>;
	/**
	 * Recursively tries to find the provided JSON scalar value inside the field.
	 * It does use an exact match when comparing values.
	 * If you pass `null` as value the filter will be ignored.
	 * Note: This filter fails if you try to look for a non scalar JSON value!
	 */
	rawPayload_value_recursive?: InputMaybe<Scalars["Json"]["input"]>;
	release?: InputMaybe<ScheduledReleaseWhereInput>;
	status?: InputMaybe<ScheduledOperationStatus>;
	/** All values that are contained in given list. */
	status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
	/** Any other value that exists and is not equal to the given value. */
	status_not?: InputMaybe<ScheduledOperationStatus>;
	/** All values that are not contained in given list. */
	status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export type ScheduledOperationOrderByInput =
	| "createdAt_ASC"
	| "createdAt_DESC"
	| "description_ASC"
	| "description_DESC"
	| "errorMessage_ASC"
	| "errorMessage_DESC"
	| "id_ASC"
	| "id_DESC"
	| "publishedAt_ASC"
	| "publishedAt_DESC"
	| "status_ASC"
	| "status_DESC"
	| "updatedAt_ASC"
	| "updatedAt_DESC";

/** System Scheduled Operation Status */
export type ScheduledOperationStatus =
	| "CANCELED"
	| "COMPLETED"
	| "FAILED"
	| "IN_PROGRESS"
	| "PENDING";

export type ScheduledOperationUpdateManyInlineInput = {
	/** Connect multiple existing ScheduledOperation documents */
	connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
	/** Disconnect multiple ScheduledOperation documents */
	disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing ScheduledOperation documents */
	set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
	/** Connect existing ScheduledOperation document */
	connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
	/** Disconnect currently connected ScheduledOperation document */
	disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	errorMessage?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	errorMessage_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	errorMessage_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	errorMessage_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	errorMessage_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	errorMessage_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	errorMessage_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	errorMessage_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	/** All values containing the given json path. */
	rawPayload_json_path_exists?: InputMaybe<Scalars["String"]["input"]>;
	/**
	 * Recursively tries to find the provided JSON scalar value inside the field.
	 * It does use an exact match when comparing values.
	 * If you pass `null` as value the filter will be ignored.
	 * Note: This filter fails if you try to look for a non scalar JSON value!
	 */
	rawPayload_value_recursive?: InputMaybe<Scalars["Json"]["input"]>;
	release?: InputMaybe<ScheduledReleaseWhereInput>;
	status?: InputMaybe<ScheduledOperationStatus>;
	/** All values that are contained in given list. */
	status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
	/** Any other value that exists and is not equal to the given value. */
	status_not?: InputMaybe<ScheduledOperationStatus>;
	/** All values that are not contained in given list. */
	status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ScheduledReleaseConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseCreateInput = {
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	errorMessage?: InputMaybe<Scalars["String"]["input"]>;
	isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
	releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	title?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ScheduledReleaseCreateManyInlineInput = {
	/** Connect multiple existing ScheduledRelease documents */
	connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
	/** Create and connect multiple existing ScheduledRelease documents */
	create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
	/** Connect one existing ScheduledRelease document */
	connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
	/** Create and connect one ScheduledRelease document */
	create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	errorMessage?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	errorMessage_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	errorMessage_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	errorMessage_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	errorMessage_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	errorMessage_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	errorMessage_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	errorMessage_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	isActive_not?: InputMaybe<Scalars["Boolean"]["input"]>;
	isImplicit?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	isImplicit_not?: InputMaybe<Scalars["Boolean"]["input"]>;
	operations_every?: InputMaybe<ScheduledOperationWhereInput>;
	operations_none?: InputMaybe<ScheduledOperationWhereInput>;
	operations_some?: InputMaybe<ScheduledOperationWhereInput>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	releaseAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	releaseAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	releaseAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	releaseAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	releaseAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	status?: InputMaybe<ScheduledReleaseStatus>;
	/** All values that are contained in given list. */
	status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
	/** Any other value that exists and is not equal to the given value. */
	status_not?: InputMaybe<ScheduledReleaseStatus>;
	/** All values that are not contained in given list. */
	status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
	title?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export type ScheduledReleaseOrderByInput =
	| "createdAt_ASC"
	| "createdAt_DESC"
	| "description_ASC"
	| "description_DESC"
	| "errorMessage_ASC"
	| "errorMessage_DESC"
	| "id_ASC"
	| "id_DESC"
	| "isActive_ASC"
	| "isActive_DESC"
	| "isImplicit_ASC"
	| "isImplicit_DESC"
	| "publishedAt_ASC"
	| "publishedAt_DESC"
	| "releaseAt_ASC"
	| "releaseAt_DESC"
	| "status_ASC"
	| "status_DESC"
	| "title_ASC"
	| "title_DESC"
	| "updatedAt_ASC"
	| "updatedAt_DESC";

/** System Scheduled Release Status */
export type ScheduledReleaseStatus = "COMPLETED" | "FAILED" | "IN_PROGRESS" | "PENDING";

export type ScheduledReleaseUpdateInput = {
	description?: InputMaybe<Scalars["String"]["input"]>;
	errorMessage?: InputMaybe<Scalars["String"]["input"]>;
	isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
	releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	title?: InputMaybe<Scalars["String"]["input"]>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
	/** Connect multiple existing ScheduledRelease documents */
	connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
	/** Create and connect multiple ScheduledRelease documents */
	create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
	/** Delete multiple ScheduledRelease documents */
	delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
	/** Disconnect multiple ScheduledRelease documents */
	disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing ScheduledRelease documents */
	set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
	/** Update multiple ScheduledRelease documents */
	update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple ScheduledRelease documents */
	upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
	description?: InputMaybe<Scalars["String"]["input"]>;
	errorMessage?: InputMaybe<Scalars["String"]["input"]>;
	isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
	releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	title?: InputMaybe<Scalars["String"]["input"]>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: ScheduledReleaseUpdateManyInput;
	/** Document search */
	where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
	/** Connect existing ScheduledRelease document */
	connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
	/** Create and connect one ScheduledRelease document */
	create?: InputMaybe<ScheduledReleaseCreateInput>;
	/** Delete currently connected ScheduledRelease document */
	delete?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Disconnect currently connected ScheduledRelease document */
	disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Update single ScheduledRelease document */
	update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
	/** Upsert single ScheduledRelease document */
	upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: ScheduledReleaseUpdateInput;
	/** Unique document search */
	where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
	/** Create document if it didn't exist */
	create: ScheduledReleaseCreateInput;
	/** Update document if it exists */
	update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: ScheduledReleaseUpsertInput;
	/** Unique document search */
	where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	errorMessage?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	errorMessage_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	errorMessage_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	errorMessage_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	errorMessage_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	errorMessage_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	errorMessage_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	errorMessage_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	isActive_not?: InputMaybe<Scalars["Boolean"]["input"]>;
	isImplicit?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	isImplicit_not?: InputMaybe<Scalars["Boolean"]["input"]>;
	operations_every?: InputMaybe<ScheduledOperationWhereInput>;
	operations_none?: InputMaybe<ScheduledOperationWhereInput>;
	operations_some?: InputMaybe<ScheduledOperationWhereInput>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	releaseAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	releaseAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	releaseAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	releaseAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	releaseAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	status?: InputMaybe<ScheduledReleaseStatus>;
	/** All values that are contained in given list. */
	status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
	/** Any other value that exists and is not equal to the given value. */
	status_not?: InputMaybe<ScheduledReleaseStatus>;
	/** All values that are not contained in given list. */
	status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
	title?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Stage system enumeration */
export type Stage =
	/** The Draft is the default stage for all your content. */
	| "DRAFT"
	/** The Published stage is where you can publish your content to. */
	| "PUBLISHED";

export type SystemDateTimeFieldVariation = "BASE" | "COMBINED" | "LOCALIZATION";

export type UnpublishLocaleInput = {
	/** Locales to unpublish */
	locale: Locale;
	/** Stages to unpublish selected locales from */
	stages: Array<Stage>;
};

export type UserConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: UserWhereUniqueInput;
};

export type UserCreateManyInlineInput = {
	/** Connect multiple existing User documents */
	connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
	/** Connect one existing User document */
	connect?: InputMaybe<UserWhereUniqueInput>;
};

/** System User Kind */
export type UserKind = "MEMBER" | "PAT" | "PUBLIC" | "WEBHOOK";

/** Identifies documents */
export type UserManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<UserWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<UserWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<UserWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	documentInStages_every?: InputMaybe<UserWhereStageInput>;
	documentInStages_none?: InputMaybe<UserWhereStageInput>;
	documentInStages_some?: InputMaybe<UserWhereStageInput>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	isActive_not?: InputMaybe<Scalars["Boolean"]["input"]>;
	kind?: InputMaybe<UserKind>;
	/** All values that are contained in given list. */
	kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
	/** Any other value that exists and is not equal to the given value. */
	kind_not?: InputMaybe<UserKind>;
	/** All values that are not contained in given list. */
	kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	name_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	picture?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	picture_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	picture_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	picture_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	picture_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	picture_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	picture_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	picture_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	picture_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	picture_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
};

export type UserOrderByInput =
	| "createdAt_ASC"
	| "createdAt_DESC"
	| "id_ASC"
	| "id_DESC"
	| "isActive_ASC"
	| "isActive_DESC"
	| "kind_ASC"
	| "kind_DESC"
	| "name_ASC"
	| "name_DESC"
	| "picture_ASC"
	| "picture_DESC"
	| "publishedAt_ASC"
	| "publishedAt_DESC"
	| "updatedAt_ASC"
	| "updatedAt_DESC";

export type UserUpdateManyInlineInput = {
	/** Connect multiple existing User documents */
	connect?: InputMaybe<Array<UserConnectInput>>;
	/** Disconnect multiple User documents */
	disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing User documents */
	set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
	/** Connect existing User document */
	connect?: InputMaybe<UserWhereUniqueInput>;
	/** Disconnect currently connected User document */
	disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type UserWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<UserWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<UserWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<UserWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars["String"]["input"]>;
	createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	documentInStages_every?: InputMaybe<UserWhereStageInput>;
	documentInStages_none?: InputMaybe<UserWhereStageInput>;
	documentInStages_some?: InputMaybe<UserWhereStageInput>;
	id?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
	isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	isActive_not?: InputMaybe<Scalars["Boolean"]["input"]>;
	kind?: InputMaybe<UserKind>;
	/** All values that are contained in given list. */
	kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
	/** Any other value that exists and is not equal to the given value. */
	kind_not?: InputMaybe<UserKind>;
	/** All values that are not contained in given list. */
	kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	name_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	picture?: InputMaybe<Scalars["String"]["input"]>;
	/** All values containing the given string. */
	picture_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values ending with the given string. */
	picture_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are contained in given list. */
	picture_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Any other value that exists and is not equal to the given value. */
	picture_not?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not containing the given string. */
	picture_not_contains?: InputMaybe<Scalars["String"]["input"]>;
	/** All values not ending with the given string */
	picture_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values that are not contained in given list. */
	picture_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** All values not starting with the given string. */
	picture_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	/** All values starting with the given string. */
	picture_starts_with?: InputMaybe<Scalars["String"]["input"]>;
	publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<UserWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<UserWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<UserWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<UserWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type VersionWhereInput = {
	id: Scalars["ID"]["input"];
	revision: Scalars["Int"]["input"];
	stage: Stage;
};

export type _FilterKind =
	| "AND"
	| "NOT"
	| "OR"
	| "contains"
	| "contains_all"
	| "contains_none"
	| "contains_some"
	| "ends_with"
	| "eq"
	| "eq_not"
	| "gt"
	| "gte"
	| "in"
	| "json_path_exists"
	| "json_value_recursive"
	| "lt"
	| "lte"
	| "not_contains"
	| "not_ends_with"
	| "not_in"
	| "not_starts_with"
	| "relational_every"
	| "relational_none"
	| "relational_single"
	| "relational_some"
	| "search"
	| "starts_with"
	| "union_empty"
	| "union_every"
	| "union_none"
	| "union_single"
	| "union_some";

export type _MutationInputFieldKind =
	| "enum"
	| "relation"
	| "richText"
	| "richTextWithEmbeds"
	| "scalar"
	| "union"
	| "virtual";

export type _MutationKind =
	| "create"
	| "delete"
	| "deleteMany"
	| "publish"
	| "publishMany"
	| "schedulePublish"
	| "scheduleUnpublish"
	| "unpublish"
	| "unpublishMany"
	| "update"
	| "updateMany"
	| "upsert";

export type _OrderDirection = "asc" | "desc";

export type _RelationInputCardinality = "many" | "one";

export type _RelationInputKind = "create" | "update";

export type _RelationKind = "regular" | "union";

export type _SystemDateTimeFieldVariation = "base" | "combined" | "localization";

export type CartFragment = {
	id: string;
	orderItems: Array<{
		id: string;
		quantity: number;
		total: number;
		product?: {
			id: string;
			slug: string;
			name: string;
			price: number;
			images: Array<{ url: string }>;
		} | null;
	}>;
};

export type CategoryListItemFragment = { slug: string; name: string };

export type CollectionListItemFragment = { slug: string; name: string };

export type OrderFragment = {
	updatedAt: unknown;
	id: string;
	orderItems: Array<{
		id: string;
		quantity: number;
		total: number;
		product?: {
			id: string;
			slug: string;
			name: string;
			price: number;
			images: Array<{ url: string }>;
		} | null;
	}>;
};

export type ProductDetailsFragment = {
	id: string;
	slug: string;
	name: string;
	description: string;
	price: number;
	rating?: number | null;
	categories: Array<{ slug: string; name: string }>;
	images: Array<{ url: string }>;
	productSizeVariants: Array<{ name: string }>;
	productColorVariants: Array<{ name: string }>;
};

export type ProductListItemFragment = {
	id: string;
	slug: string;
	name: string;
	price: number;
	rating?: number | null;
	categories: Array<{ name: string }>;
	images: Array<{ url: string }>;
};

export type ReviewFragment = {
	id: string;
	name: string;
	email: string;
	rating: number;
	headline: string;
	content: string;
	createdAt: unknown;
};

export type CartAddItemMutationVariables = Exact<{
	orderId: Scalars["ID"]["input"];
	itemId: Scalars["ID"]["input"];
	price: Scalars["Int"]["input"];
	quantity: Scalars["Int"]["input"];
}>;

export type CartAddItemMutation = { upsertOrderItem?: { id: string } | null };

export type CartChangeItemQuantityMutationVariables = Exact<{
	itemId: Scalars["ID"]["input"];
	quantity: Scalars["Int"]["input"];
}>;

export type CartChangeItemQuantityMutation = { updateOrderItem?: { id: string } | null };

export type CartCreateMutationVariables = Exact<{ [key: string]: never }>;

export type CartCreateMutation = {
	createOrder?: {
		id: string;
		orderItems: Array<{
			id: string;
			quantity: number;
			total: number;
			product?: {
				id: string;
				slug: string;
				name: string;
				price: number;
				images: Array<{ url: string }>;
			} | null;
		}>;
	} | null;
};

export type CartRemoveItemMutationVariables = Exact<{
	itemId: Scalars["ID"]["input"];
}>;

export type CartRemoveItemMutation = { deleteOrderItem?: { id: string } | null };

export type OrderUpdateAfterPaymentMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
	email: Scalars["String"]["input"];
	stripeCheckoutId: Scalars["String"]["input"];
}>;

export type OrderUpdateAfterPaymentMutation = { updateOrder?: { id: string } | null };

export type ProductUpdateRatingMutationVariables = Exact<{
	productId: Scalars["ID"]["input"];
	rating: Scalars["Float"]["input"];
}>;

export type ProductUpdateRatingMutation = {
	updateProduct?: { id: string } | null;
	publishProduct?: { id: string } | null;
};

export type ReviewCreateMutationVariables = Exact<{
	productId: Scalars["ID"]["input"];
	headline: Scalars["String"]["input"];
	content: Scalars["String"]["input"];
	rating: Scalars["Int"]["input"];
	name: Scalars["String"]["input"];
	email: Scalars["String"]["input"];
}>;

export type ReviewCreateMutation = { createReview?: { id: string } | null };

export type ReviewPublishMutationVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type ReviewPublishMutation = { publishReview?: { id: string } | null };

export type CartGetByIdQueryVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type CartGetByIdQuery = {
	order?: {
		id: string;
		orderItems: Array<{
			id: string;
			quantity: number;
			total: number;
			product?: {
				id: string;
				slug: string;
				name: string;
				price: number;
				images: Array<{ url: string }>;
			} | null;
		}>;
	} | null;
};

export type CategoriesGetListQueryVariables = Exact<{
	includeImg?: InputMaybe<Scalars["Boolean"]["input"]>;
}>;

export type CategoriesGetListQuery = {
	categories: Array<{ slug: string; name: string; image?: { url: string } }>;
};

export type CategoryGetBySlugQueryVariables = Exact<{
	category: Scalars["String"]["input"];
	priceGt: Scalars["Int"]["input"];
	priceLt: Scalars["Int"]["input"];
	ratingGt: Scalars["Float"]["input"];
	ratingLt: Scalars["Float"]["input"];
	colors?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
	sizes?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
	brand: Scalars["String"]["input"];
	limit: Scalars["Int"]["input"];
	offset: Scalars["Int"]["input"];
	orderBy?: InputMaybe<ProductOrderByInput>;
}>;

export type CategoryGetBySlugQuery = {
	category?: {
		description?: string | null;
		slug: string;
		name: string;
		products: Array<{
			id: string;
			slug: string;
			name: string;
			price: number;
			rating?: number | null;
			categories: Array<{ name: string }>;
			images: Array<{ url: string }>;
		}>;
	} | null;
};

export type CollectionGetBySlugQueryVariables = Exact<{
	collection: Scalars["String"]["input"];
	priceGt: Scalars["Int"]["input"];
	priceLt: Scalars["Int"]["input"];
	ratingGt: Scalars["Float"]["input"];
	ratingLt: Scalars["Float"]["input"];
	colors?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
	sizes?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
	brand: Scalars["String"]["input"];
	limit: Scalars["Int"]["input"];
	offset: Scalars["Int"]["input"];
	orderBy?: InputMaybe<ProductOrderByInput>;
}>;

export type CollectionGetBySlugQuery = {
	collection?: {
		description?: string | null;
		slug: string;
		name: string;
		image: { url: string };
		products: Array<{
			id: string;
			slug: string;
			name: string;
			price: number;
			rating?: number | null;
			categories: Array<{ name: string }>;
			images: Array<{ url: string }>;
		}>;
	} | null;
};

export type CollectionsGetListQueryVariables = Exact<{
	includeImg?: InputMaybe<Scalars["Boolean"]["input"]>;
	includeDescription?: InputMaybe<Scalars["Boolean"]["input"]>;
}>;

export type CollectionsGetListQuery = {
	collections: Array<{
		description?: string | null;
		slug: string;
		name: string;
		image?: { url: string };
	}>;
};

export type OrdersGetByEmailQueryVariables = Exact<{
	email: Scalars["String"]["input"];
}>;

export type OrdersGetByEmailQuery = {
	orders: Array<{
		updatedAt: unknown;
		id: string;
		orderItems: Array<{
			id: string;
			quantity: number;
			total: number;
			product?: {
				id: string;
				slug: string;
				name: string;
				price: number;
				images: Array<{ url: string }>;
			} | null;
		}>;
	}>;
};

export type ProductGetByIdQueryVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type ProductGetByIdQuery = {
	product?: {
		id: string;
		slug: string;
		name: string;
		description: string;
		price: number;
		rating?: number | null;
		categories: Array<{ slug: string; name: string }>;
		images: Array<{ url: string }>;
		productSizeVariants: Array<{ name: string }>;
		productColorVariants: Array<{ name: string }>;
	} | null;
};

export type ProductGetBySlugQueryVariables = Exact<{
	slug: Scalars["String"]["input"];
}>;

export type ProductGetBySlugQuery = {
	product?: {
		id: string;
		slug: string;
		name: string;
		description: string;
		price: number;
		rating?: number | null;
		categories: Array<{ slug: string; name: string }>;
		images: Array<{ url: string }>;
		productSizeVariants: Array<{ name: string }>;
		productColorVariants: Array<{ name: string }>;
	} | null;
};

export type ProductsGetAllSlugsQueryVariables = Exact<{ [key: string]: never }>;

export type ProductsGetAllSlugsQuery = { products: Array<{ slug: string }> };

export type ProductsGetBySearchQueryVariables = Exact<{
	search: Scalars["String"]["input"];
	priceGt: Scalars["Int"]["input"];
	priceLt: Scalars["Int"]["input"];
	ratingGt: Scalars["Float"]["input"];
	ratingLt: Scalars["Float"]["input"];
	colors?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
	sizes?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
	brand: Scalars["String"]["input"];
	limit: Scalars["Int"]["input"];
	offset: Scalars["Int"]["input"];
	orderBy?: InputMaybe<ProductOrderByInput>;
}>;

export type ProductsGetBySearchQuery = {
	products: Array<{
		id: string;
		slug: string;
		name: string;
		price: number;
		rating?: number | null;
		categories: Array<{ name: string }>;
		images: Array<{ url: string }>;
	}>;
};

export type ProductsGetCountQueryVariables = Exact<{
	priceGt: Scalars["Int"]["input"];
	priceLt: Scalars["Int"]["input"];
	ratingGt: Scalars["Float"]["input"];
	ratingLt: Scalars["Float"]["input"];
	colors?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
	sizes?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
	brand: Scalars["String"]["input"];
}>;

export type ProductsGetCountQuery = { productsConnection: { aggregate: { count: number } } };

export type ProductsGetCountBySearchQueryVariables = Exact<{
	search: Scalars["String"]["input"];
	priceGt: Scalars["Int"]["input"];
	priceLt: Scalars["Int"]["input"];
	ratingGt: Scalars["Float"]["input"];
	ratingLt: Scalars["Float"]["input"];
	colors?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
	sizes?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
	brand: Scalars["String"]["input"];
}>;

export type ProductsGetCountBySearchQuery = {
	productsConnection: { aggregate: { count: number } };
};

export type ProductsGetCountInCategoryQueryVariables = Exact<{
	slug?: InputMaybe<Scalars["String"]["input"]>;
	priceGt: Scalars["Int"]["input"];
	priceLt: Scalars["Int"]["input"];
	ratingGt: Scalars["Float"]["input"];
	ratingLt: Scalars["Float"]["input"];
	colors?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
	sizes?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
	brand: Scalars["String"]["input"];
}>;

export type ProductsGetCountInCategoryQuery = {
	productsConnection: { aggregate: { count: number } };
};

export type ProductsGetCountInCollectionQueryVariables = Exact<{
	slug?: InputMaybe<Scalars["String"]["input"]>;
	priceGt: Scalars["Int"]["input"];
	priceLt: Scalars["Int"]["input"];
	ratingGt: Scalars["Float"]["input"];
	ratingLt: Scalars["Float"]["input"];
	colors?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
	sizes?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
	brand: Scalars["String"]["input"];
}>;

export type ProductsGetCountInCollectionQuery = {
	productsConnection: { aggregate: { count: number } };
};

export type ProductsGetListQueryVariables = Exact<{
	priceGt: Scalars["Int"]["input"];
	priceLt: Scalars["Int"]["input"];
	ratingGt: Scalars["Float"]["input"];
	ratingLt: Scalars["Float"]["input"];
	colors?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
	sizes?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
	brand: Scalars["String"]["input"];
	limit: Scalars["Int"]["input"];
	offset: Scalars["Int"]["input"];
	orderBy?: InputMaybe<ProductOrderByInput>;
}>;

export type ProductsGetListQuery = {
	products: Array<{
		id: string;
		slug: string;
		name: string;
		price: number;
		rating?: number | null;
		categories: Array<{ name: string }>;
		images: Array<{ url: string }>;
	}>;
};

export type ProductsGetRelatedQueryVariables = Exact<{
	slug: Scalars["String"]["input"];
	categoriesSlugs?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
}>;

export type ProductsGetRelatedQuery = {
	products: Array<{
		id: string;
		slug: string;
		name: string;
		price: number;
		rating?: number | null;
		categories: Array<{ name: string }>;
		images: Array<{ url: string }>;
	}>;
};

export type ReviewsGetByProductIdQueryVariables = Exact<{
	productId: Scalars["ID"]["input"];
}>;

export type ReviewsGetByProductIdQuery = {
	reviews: Array<{
		id: string;
		name: string;
		email: string;
		rating: number;
		headline: string;
		content: string;
		createdAt: unknown;
	}>;
};

export class TypedDocumentString<TResult, TVariables>
	extends String
	implements DocumentTypeDecoration<TResult, TVariables>
{
	__apiType?: DocumentTypeDecoration<TResult, TVariables>["__apiType"];

	constructor(
		private value: string,
		public __meta__?: Record<string, any>,
	) {
		super(value);
	}

	toString(): string & DocumentTypeDecoration<TResult, TVariables> {
		return this.value;
	}
}
export const CollectionListItemFragmentDoc = new TypedDocumentString(
	`
    fragment CollectionListItem on Collection {
  slug
  name
}
    `,
	{ fragmentName: "CollectionListItem" },
) as unknown as TypedDocumentString<CollectionListItemFragment, unknown>;
export const CartFragmentDoc = new TypedDocumentString(
	`
    fragment Cart on Order {
  id
  orderItems {
    id
    quantity
    total
    product {
      id
      slug
      name
      price
      images {
        url
      }
    }
  }
}
    `,
	{ fragmentName: "Cart" },
) as unknown as TypedDocumentString<CartFragment, unknown>;
export const OrderFragmentDoc = new TypedDocumentString(
	`
    fragment Order on Order {
  updatedAt
  ...Cart
}
    fragment Cart on Order {
  id
  orderItems {
    id
    quantity
    total
    product {
      id
      slug
      name
      price
      images {
        url
      }
    }
  }
}`,
	{ fragmentName: "Order" },
) as unknown as TypedDocumentString<OrderFragment, unknown>;
export const CategoryListItemFragmentDoc = new TypedDocumentString(
	`
    fragment CategoryListItem on Category {
  slug
  name
}
    `,
	{ fragmentName: "CategoryListItem" },
) as unknown as TypedDocumentString<CategoryListItemFragment, unknown>;
export const ProductDetailsFragmentDoc = new TypedDocumentString(
	`
    fragment ProductDetails on Product {
  id
  slug
  name
  description
  price
  rating
  categories {
    ...CategoryListItem
  }
  images {
    url
  }
  productSizeVariants {
    name
  }
  productColorVariants {
    name
  }
}
    fragment CategoryListItem on Category {
  slug
  name
}`,
	{ fragmentName: "ProductDetails" },
) as unknown as TypedDocumentString<ProductDetailsFragment, unknown>;
export const ProductListItemFragmentDoc = new TypedDocumentString(
	`
    fragment ProductListItem on Product {
  id
  slug
  name
  price
  rating
  categories(first: 1) {
    name
  }
  images(first: 1) {
    url
  }
}
    `,
	{ fragmentName: "ProductListItem" },
) as unknown as TypedDocumentString<ProductListItemFragment, unknown>;
export const ReviewFragmentDoc = new TypedDocumentString(
	`
    fragment Review on Review {
  id
  name
  email
  rating
  headline
  content
  createdAt
}
    `,
	{ fragmentName: "Review" },
) as unknown as TypedDocumentString<ReviewFragment, unknown>;
export const CartAddItemDocument = new TypedDocumentString(`
    mutation CartAddItem($orderId: ID!, $itemId: ID!, $price: Int!, $quantity: Int!) {
  upsertOrderItem(
    where: {id: $orderId}
    upsert: {create: {quantity: 1, total: $price, order: {connect: {id: $orderId}}, product: {connect: {id: $itemId}}}, update: {quantity: $quantity, total: $price}}
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartAddItemMutation, CartAddItemMutationVariables>;
export const CartChangeItemQuantityDocument = new TypedDocumentString(`
    mutation CartChangeItemQuantity($itemId: ID!, $quantity: Int!) {
  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {
    id
  }
}
    `) as unknown as TypedDocumentString<
	CartChangeItemQuantityMutation,
	CartChangeItemQuantityMutationVariables
>;
export const CartCreateDocument = new TypedDocumentString(`
    mutation CartCreate {
  createOrder(data: {total: 0}) {
    ...Cart
  }
}
    fragment Cart on Order {
  id
  orderItems {
    id
    quantity
    total
    product {
      id
      slug
      name
      price
      images {
        url
      }
    }
  }
}`) as unknown as TypedDocumentString<CartCreateMutation, CartCreateMutationVariables>;
export const CartRemoveItemDocument = new TypedDocumentString(`
    mutation CartRemoveItem($itemId: ID!) {
  deleteOrderItem(where: {id: $itemId}) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartRemoveItemMutation, CartRemoveItemMutationVariables>;
export const OrderUpdateAfterPaymentDocument = new TypedDocumentString(`
    mutation OrderUpdateAfterPayment($id: ID!, $email: String!, $stripeCheckoutId: String!) {
  updateOrder(
    data: {email: $email, stripeCheckoutId: $stripeCheckoutId}
    where: {id: $id}
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<
	OrderUpdateAfterPaymentMutation,
	OrderUpdateAfterPaymentMutationVariables
>;
export const ProductUpdateRatingDocument = new TypedDocumentString(`
    mutation ProductUpdateRating($productId: ID!, $rating: Float!) {
  updateProduct(where: {id: $productId}, data: {rating: $rating}) {
    id
  }
  publishProduct(where: {id: $productId}) {
    id
  }
}
    `) as unknown as TypedDocumentString<
	ProductUpdateRatingMutation,
	ProductUpdateRatingMutationVariables
>;
export const ReviewCreateDocument = new TypedDocumentString(`
    mutation ReviewCreate($productId: ID!, $headline: String!, $content: String!, $rating: Int!, $name: String!, $email: String!) {
  createReview(
    data: {product: {connect: {id: $productId}}, headline: $headline, content: $content, rating: $rating, name: $name, email: $email}
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<ReviewCreateMutation, ReviewCreateMutationVariables>;
export const ReviewPublishDocument = new TypedDocumentString(`
    mutation ReviewPublish($id: ID!) {
  publishReview(where: {id: $id}, to: PUBLISHED) {
    id
  }
}
    `) as unknown as TypedDocumentString<ReviewPublishMutation, ReviewPublishMutationVariables>;
export const CartGetByIdDocument = new TypedDocumentString(`
    query CartGetById($id: ID!) {
  order(where: {id: $id}, stage: DRAFT) {
    ...Cart
  }
}
    fragment Cart on Order {
  id
  orderItems {
    id
    quantity
    total
    product {
      id
      slug
      name
      price
      images {
        url
      }
    }
  }
}`) as unknown as TypedDocumentString<CartGetByIdQuery, CartGetByIdQueryVariables>;
export const CategoriesGetListDocument = new TypedDocumentString(`
    query CategoriesGetList($includeImg: Boolean = false) {
  categories {
    ...CategoryListItem
    image @include(if: $includeImg) {
      url
    }
  }
}
    fragment CategoryListItem on Category {
  slug
  name
}`) as unknown as TypedDocumentString<CategoriesGetListQuery, CategoriesGetListQueryVariables>;
export const CategoryGetBySlugDocument = new TypedDocumentString(`
    query CategoryGetBySlug($category: String!, $priceGt: Int!, $priceLt: Int!, $ratingGt: Float!, $ratingLt: Float!, $colors: [String!], $sizes: [String!], $brand: String!, $limit: Int!, $offset: Int!, $orderBy: ProductOrderByInput) {
  category(where: {slug: $category}) {
    ...CategoryListItem
    description
    products(
      where: {AND: [{price_gte: $priceGt}, {price_lte: $priceLt}, {rating_gte: $ratingGt}, {rating_lte: $ratingLt}, {name_contains: $brand}, {productColorVariants_some: {name_in: $colors}}, {OR: [{productSizeVariants_some: {name_in: $sizes}}, {productSizeVariants_none: {}}]}]}
      first: $limit
      skip: $offset
      orderBy: $orderBy
    ) {
      ...ProductListItem
    }
  }
}
    fragment CategoryListItem on Category {
  slug
  name
}
fragment ProductListItem on Product {
  id
  slug
  name
  price
  rating
  categories(first: 1) {
    name
  }
  images(first: 1) {
    url
  }
}`) as unknown as TypedDocumentString<CategoryGetBySlugQuery, CategoryGetBySlugQueryVariables>;
export const CollectionGetBySlugDocument = new TypedDocumentString(`
    query CollectionGetBySlug($collection: String!, $priceGt: Int!, $priceLt: Int!, $ratingGt: Float!, $ratingLt: Float!, $colors: [String!], $sizes: [String!], $brand: String!, $limit: Int!, $offset: Int!, $orderBy: ProductOrderByInput) {
  collection(where: {slug: $collection}) {
    ...CollectionListItem
    description
    image {
      url
    }
    products(
      where: {AND: [{price_gte: $priceGt}, {price_lte: $priceLt}, {rating_gte: $ratingGt}, {rating_lte: $ratingLt}, {name_contains: $brand}, {productColorVariants_some: {name_in: $colors}}, {OR: [{productSizeVariants_some: {name_in: $sizes}}, {productSizeVariants_none: {}}]}]}
      first: $limit
      skip: $offset
      orderBy: $orderBy
    ) {
      ...ProductListItem
    }
  }
}
    fragment CollectionListItem on Collection {
  slug
  name
}
fragment ProductListItem on Product {
  id
  slug
  name
  price
  rating
  categories(first: 1) {
    name
  }
  images(first: 1) {
    url
  }
}`) as unknown as TypedDocumentString<CollectionGetBySlugQuery, CollectionGetBySlugQueryVariables>;
export const CollectionsGetListDocument = new TypedDocumentString(`
    query CollectionsGetList($includeImg: Boolean = false, $includeDescription: Boolean = false) {
  collections {
    ...CollectionListItem
    description @include(if: $includeDescription)
    image @include(if: $includeImg) {
      url
    }
  }
}
    fragment CollectionListItem on Collection {
  slug
  name
}`) as unknown as TypedDocumentString<CollectionsGetListQuery, CollectionsGetListQueryVariables>;
export const OrdersGetByEmailDocument = new TypedDocumentString(`
    query OrdersGetByEmail($email: String!) {
  orders(where: {email: $email}, stage: DRAFT, orderBy: updatedAt_DESC) {
    ...Order
  }
}
    fragment Cart on Order {
  id
  orderItems {
    id
    quantity
    total
    product {
      id
      slug
      name
      price
      images {
        url
      }
    }
  }
}
fragment Order on Order {
  updatedAt
  ...Cart
}`) as unknown as TypedDocumentString<OrdersGetByEmailQuery, OrdersGetByEmailQueryVariables>;
export const ProductGetByIdDocument = new TypedDocumentString(`
    query ProductGetById($id: ID!) {
  product(where: {id: $id}) {
    ...ProductDetails
  }
}
    fragment CategoryListItem on Category {
  slug
  name
}
fragment ProductDetails on Product {
  id
  slug
  name
  description
  price
  rating
  categories {
    ...CategoryListItem
  }
  images {
    url
  }
  productSizeVariants {
    name
  }
  productColorVariants {
    name
  }
}`) as unknown as TypedDocumentString<ProductGetByIdQuery, ProductGetByIdQueryVariables>;
export const ProductGetBySlugDocument = new TypedDocumentString(`
    query ProductGetBySlug($slug: String!) {
  product(where: {slug: $slug}) {
    ...ProductDetails
  }
}
    fragment CategoryListItem on Category {
  slug
  name
}
fragment ProductDetails on Product {
  id
  slug
  name
  description
  price
  rating
  categories {
    ...CategoryListItem
  }
  images {
    url
  }
  productSizeVariants {
    name
  }
  productColorVariants {
    name
  }
}`) as unknown as TypedDocumentString<ProductGetBySlugQuery, ProductGetBySlugQueryVariables>;
export const ProductsGetAllSlugsDocument = new TypedDocumentString(`
    query ProductsGetAllSlugs {
  products {
    slug
  }
}
    `) as unknown as TypedDocumentString<
	ProductsGetAllSlugsQuery,
	ProductsGetAllSlugsQueryVariables
>;
export const ProductsGetBySearchDocument = new TypedDocumentString(`
    query ProductsGetBySearch($search: String!, $priceGt: Int!, $priceLt: Int!, $ratingGt: Float!, $ratingLt: Float!, $colors: [String!], $sizes: [String!], $brand: String!, $limit: Int!, $offset: Int!, $orderBy: ProductOrderByInput) {
  products(
    where: {AND: [{_search: $search}, {price_gte: $priceGt}, {price_lte: $priceLt}, {rating_gte: $ratingGt}, {rating_lte: $ratingLt}, {name_contains: $brand}, {productColorVariants_some: {name_in: $colors}}, {OR: [{productSizeVariants_some: {name_in: $sizes}}, {productSizeVariants_none: {}}]}]}
    first: $limit
    skip: $offset
    orderBy: $orderBy
  ) {
    ...ProductListItem
  }
}
    fragment ProductListItem on Product {
  id
  slug
  name
  price
  rating
  categories(first: 1) {
    name
  }
  images(first: 1) {
    url
  }
}`) as unknown as TypedDocumentString<ProductsGetBySearchQuery, ProductsGetBySearchQueryVariables>;
export const ProductsGetCountDocument = new TypedDocumentString(`
    query ProductsGetCount($priceGt: Int!, $priceLt: Int!, $ratingGt: Float!, $ratingLt: Float!, $colors: [String!], $sizes: [String!], $brand: String!) {
  productsConnection(
    where: {AND: [{price_gte: $priceGt}, {price_lte: $priceLt}, {rating_gte: $ratingGt}, {rating_lte: $ratingLt}, {name_contains: $brand}, {productColorVariants_some: {name_in: $colors}}, {OR: [{productSizeVariants_some: {name_in: $sizes}}, {productSizeVariants_none: {}}]}]}
  ) {
    aggregate {
      count
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsGetCountQuery, ProductsGetCountQueryVariables>;
export const ProductsGetCountBySearchDocument = new TypedDocumentString(`
    query ProductsGetCountBySearch($search: String!, $priceGt: Int!, $priceLt: Int!, $ratingGt: Float!, $ratingLt: Float!, $colors: [String!], $sizes: [String!], $brand: String!) {
  productsConnection(
    where: {AND: [{_search: $search}, {price_gte: $priceGt}, {price_lte: $priceLt}, {rating_gte: $ratingGt}, {rating_lte: $ratingLt}, {name_contains: $brand}, {productColorVariants_some: {name_in: $colors}}, {OR: [{productSizeVariants_some: {name_in: $sizes}}, {productSizeVariants_none: {}}]}]}
  ) {
    aggregate {
      count
    }
  }
}
    `) as unknown as TypedDocumentString<
	ProductsGetCountBySearchQuery,
	ProductsGetCountBySearchQueryVariables
>;
export const ProductsGetCountInCategoryDocument = new TypedDocumentString(`
    query ProductsGetCountInCategory($slug: String, $priceGt: Int!, $priceLt: Int!, $ratingGt: Float!, $ratingLt: Float!, $colors: [String!], $sizes: [String!], $brand: String!) {
  productsConnection(
    where: {AND: [{categories_some: {slug: $slug}}, {price_gte: $priceGt}, {price_lte: $priceLt}, {rating_gte: $ratingGt}, {rating_lte: $ratingLt}, {name_contains: $brand}, {productColorVariants_some: {name_in: $colors}}, {OR: [{productSizeVariants_some: {name_in: $sizes}}, {productSizeVariants_none: {}}]}]}
  ) {
    aggregate {
      count
    }
  }
}
    `) as unknown as TypedDocumentString<
	ProductsGetCountInCategoryQuery,
	ProductsGetCountInCategoryQueryVariables
>;
export const ProductsGetCountInCollectionDocument = new TypedDocumentString(`
    query ProductsGetCountInCollection($slug: String, $priceGt: Int!, $priceLt: Int!, $ratingGt: Float!, $ratingLt: Float!, $colors: [String!], $sizes: [String!], $brand: String!) {
  productsConnection(
    where: {AND: [{collections_some: {slug: $slug}}, {price_gte: $priceGt}, {price_lte: $priceLt}, {rating_gte: $ratingGt}, {rating_lte: $ratingLt}, {name_contains: $brand}, {productColorVariants_some: {name_in: $colors}}, {OR: [{productSizeVariants_some: {name_in: $sizes}}, {productSizeVariants_none: {}}]}]}
  ) {
    aggregate {
      count
    }
  }
}
    `) as unknown as TypedDocumentString<
	ProductsGetCountInCollectionQuery,
	ProductsGetCountInCollectionQueryVariables
>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($priceGt: Int!, $priceLt: Int!, $ratingGt: Float!, $ratingLt: Float!, $colors: [String!], $sizes: [String!], $brand: String!, $limit: Int!, $offset: Int!, $orderBy: ProductOrderByInput) {
  products(
    where: {AND: [{price_gte: $priceGt}, {price_lte: $priceLt}, {rating_gte: $ratingGt}, {rating_lte: $ratingLt}, {name_contains: $brand}, {productColorVariants_some: {name_in: $colors}}, {OR: [{productSizeVariants_some: {name_in: $sizes}}, {productSizeVariants_none: {}}]}]}
    first: $limit
    skip: $offset
    orderBy: $orderBy
  ) {
    ...ProductListItem
  }
}
    fragment ProductListItem on Product {
  id
  slug
  name
  price
  rating
  categories(first: 1) {
    name
  }
  images(first: 1) {
    url
  }
}`) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const ProductsGetRelatedDocument = new TypedDocumentString(`
    query ProductsGetRelated($slug: String!, $categoriesSlugs: [String!]) {
  products(
    where: {slug_not: $slug, AND: {categories_some: {slug_in: $categoriesSlugs}}}
    first: 4
  ) {
    ...ProductListItem
  }
}
    fragment ProductListItem on Product {
  id
  slug
  name
  price
  rating
  categories(first: 1) {
    name
  }
  images(first: 1) {
    url
  }
}`) as unknown as TypedDocumentString<ProductsGetRelatedQuery, ProductsGetRelatedQueryVariables>;
export const ReviewsGetByProductIdDocument = new TypedDocumentString(`
    query ReviewsGetByProductId($productId: ID!) {
  reviews(where: {product: {id: $productId}}, orderBy: createdAt_DESC) {
    ...Review
  }
}
    fragment Review on Review {
  id
  name
  email
  rating
  headline
  content
  createdAt
}`) as unknown as TypedDocumentString<
	ReviewsGetByProductIdQuery,
	ReviewsGetByProductIdQueryVariables
>;
