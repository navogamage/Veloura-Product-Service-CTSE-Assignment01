const DEFAULT_ALLOWED_HEADERS = ["Content-Type", "Authorization"];
const DEFAULT_ALLOWED_METHODS = ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"];

function parseAllowedOrigins(value = "") {
	return value
		.split(",")
		.map((origin) => origin.trim())
		.filter(Boolean);
}

const allowedOrigins = parseAllowedOrigins(process.env.ALLOWED_ORIGINS);
const allowedOriginsSet = new Set(allowedOrigins);

const corsOptions = {
	origin: (origin, callback) => {
		// Allow non-browser clients and same-origin requests that omit the Origin header.
		if (!origin || allowedOriginsSet.has(origin)) {
			return callback(null, true);
		}

		return callback(new Error("Not allowed by CORS"));
	},
	credentials: true,
	methods: DEFAULT_ALLOWED_METHODS,
	allowedHeaders: DEFAULT_ALLOWED_HEADERS,
};

module.exports = {
	allowedOrigins,
	corsOptions,
	parseAllowedOrigins,
};
