# ---- CONFIG  ----
AWS_STACK      	= enter-the-dungeon
AWS_BUCKET     	= $(AWS_STACK)
AWS_REGION     	= us-east-1
NEXT_OUT_DIR    = out
SITE_LINK      	= http://enter-the-dungeon.s3-website-us-east-1.amazonaws.com
CF_TEMPLATE			= infrastructure/enter-the-dungeon.yaml
CF_DEPLOY     	= aws cloudformation deploy \
                  --region $(AWS_REGION) \
                  --stack-name $(AWS_STACK) \
                  --template-file $(CF_TEMPLATE) \
                  --capabilities CAPABILITY_NAMED_IAM \
  								--tags project=$(AWS_STACK) \
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
	$(CF_DEPLOY)

sync-site:       ## 3) Upload static files to the bucket
	# First sync everything with sensible MIME types
	aws s3 sync $(NEXT_OUT_DIR)/ s3://$(AWS_BUCKET)/ --delete
	# Then set long cache headers for immutable _next assets
	aws s3 cp $(NEXT_OUT_DIR)/ s3://$(AWS_BUCKET)/ \
	    --recursive \
	    --exclude "*" --include "_next/*" \
	    --cache-control "public,max-age=31536000,immutable"
	# Short/zero cache for HTML so changes go live quickly
	aws s3 cp $(NEXT_OUT_DIR)/ s3://$(AWS_BUCKET)/ \
	    --recursive \
	    --exclude "*" --include "*.html" \
	    --cache-control "no-cache"
	@echo "🚨 Validate Changes Here 🚨"
	@echo "\033[1;34m$(SITE_LINK)\033[0m"
