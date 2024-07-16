CREATE TABLE IF NOT EXISTS "public"."profiles" (
    "wallet_address" "text" NOT NULL,
    "ens_domain" "text",
    "pfp_address" "text",
    "pfp_token_id" "text",
    "name" "text",
    "introduce" "text",
    "social_links" text[],
    "is_on_chain_profile" boolean DEFAULT false NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone
);

ALTER TABLE "public"."profiles" OWNER TO "postgres";
ALTER TABLE ONLY "public"."profiles"
    ADD CONSTRAINT "profiles_pkey" PRIMARY KEY ("wallet_address");

ALTER TABLE "public"."profiles" ENABLE ROW LEVEL SECURITY;

GRANT ALL ON TABLE "public"."profiles" TO "anon";
GRANT ALL ON TABLE "public"."profiles" TO "authenticated";
GRANT ALL ON TABLE "public"."profiles" TO "service_role";

CREATE POLICY "view everyone" ON "public"."profiles" FOR SELECT USING (true);
