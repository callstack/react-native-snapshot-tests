#import <UIKit/UIKit.h>
#import <XCTest/XCTest.h>

#import <RCTTest/RCTTestRunner.h>
#import <React/RCTRootView.h>

@interface SampleAppSnapshotTests : XCTestCase {
  RCTTestRunner *_runner;
}

@end

@implementation SampleAppSnapshotTests

- (void)setUp {
  _runner = RCTInitRunnerForApp(@"index.test", nil);
  _runner.recordMode = NO;
}

- (void)testAppContainer {
  [_runner runTest:_cmd module:@"AppContainer"];
}

- (void)testAppContainerSmall {
  [_runner runTest:_cmd
            module:@"AppContainer"
      initialProps:@{}
configurationBlock:^(RCTRootView *view) {
    view.frame = CGRectMake(0, 0, 320, 568);
  }];
}

- (void)testAppContainerSmallWithoutData {
  [_runner runTest:_cmd module:@"AppContainer"
      initialProps:@{@"data": @[]}
configurationBlock:^(RCTRootView *view) {
    view.frame = CGRectMake(0, 0, 320, 568);
  }];
}

@end
