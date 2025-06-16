# ---- CONFIG  ----
STACK          = enter-the-dungeon
BUCKET         = enter-the-dungeon
TEMPLATE       = infrastructure/cloudformation.yaml
LINK           = http://enter-the-dungeon.s3-website-us-east-1.amazonaws.com
REGION         = us-east-1
OUT_DIR        = out
CFN_DEPLOY     = aws cloudformation deploy \
                  --region $(REGION) \
                  --stack-name $(STACK) \
                  --template-file $(TEMPLATE) \
                  --capabilities CAPABILITY_NAMED_IAM \
                  --parameter-overrides SiteBucketName=$(BUCKET) \
  								--tags project=enter-the-dungeon \
										     access=private

# ---- TARGETS ----
.PHONY: build deploy-stack sync-site deploy clean

run:
	/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 &
	npm run dev


deploy: build deploy-stack sync-site  


# ---- HELPER TARGETS ----
build:           ## 1) Compile & export the site (out/)
	npm ci
	npm run build 

deploy-stack:    ## 2) Create / update the S3 bucket via CloudFormation
	$(CFN_DEPLOY)

sync-site:       ## 3) Upload static files to the bucket
	# First sync everything with sensible MIME types
	aws s3 sync $(OUT_DIR)/ s3://$(BUCKET)/ --delete
	# Then set long cache headers for immutable _next assets
	aws s3 cp $(OUT_DIR)/ s3://$(BUCKET)/ \
	    --recursive \
	    --exclude "*" --include "_next/*" \
	    --cache-control "public,max-age=31536000,immutable"
	# Short/zero cache for HTML so changes go live quickly
	aws s3 cp $(OUT_DIR)/ s3://$(BUCKET)/ \
	    --recursive \
	    --exclude "*" --include "*.html" \
	    --cache-control "no-cache"
	@echo "🚨 Validate Changes Here 🚨"
	@echo "\033[1;34m$(LINK)\033[0m"
