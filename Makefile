# Firebase Emulatorの立ち上げ
.PHONY: firebase-emulator
firebase-emulator:
	docker run \
		--rm \
		-p=9000:9000 \
		-p=8080:8080 \
		-p=4000:4000 \
		-p=9099:9099 \
		-p=8085:8085 \
		-p=5001:5001 \
		-p=9199:9199 \
		--env "GCP_PROJECT=fire-emulator-demo" \
		--env "ENABLE_UI=true" \
		spine3/firebase-emulator