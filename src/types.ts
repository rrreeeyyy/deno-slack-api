export type BaseResponse = {
  /** `true` if the response from the server was successful, `false` otherwise. */
  ok: boolean;
  /** Optional error description returned by the server. */
  error?: string;
  /** Optional list of warnings returned by the server. */
  warnings?: string[];
  /** Optional metadata about the response returned by the server. */
  "response_metadata"?: {
    warnings?: string[];
    messages?: string[];
  };
  [otherOptions: string]: unknown;
};

export type SlackAPIOptions = {
  /**
   * @description Optional url endpoint for the Slack API used for api calls. Defaults to https://slack.com/api/
   */
  slackApiUrl?: string;
};

export type BaseMethodArgs = {
  /**
   * @description Optional override token. If set, it will be used as the token for this single api call rather than the token provided when creating the client.
   */
  token?: string;
};

export type SlackAPIMethodArgs = BaseMethodArgs & {
  [name: string]: unknown;
};

export type SlackAPIMethod = {
  (args?: SlackAPIMethodArgs): Promise<BaseResponse>;
};
